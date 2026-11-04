import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Download,
  Menu,
  X,
  Plus,
  Pencil,
  Code2,
  Database,
  Sparkles,
  Copy,
  Check,
  MapPin,
  Linkedin,
  Upload,
  Trash2,
  Terminal,
  Layers,
  ExternalLink,
} from "lucide-react";
import { SiPython, SiPostgresql, SiHtml5, SiRuby, SiLinux } from "react-icons/si";
import { FaCss3Alt as SiCss3 } from "react-icons/fa";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string;
  image: string;
  demo: string;
  repo: string;
  example: boolean;
  visual: string;
};
const initialProjects: Project[] = [
  {
    id: "01",
    title: "Dados que contam histórias.",
    category: "Dados & IA",
    description:
      "Espaço para um projeto de análise de dados: apresente o problema, os insights e como sua solução ajuda na tomada de decisões.",
    tags: "Python, SQL, Power BI",
    image: "",
    demo: "",
    repo: "",
    example: true,
    visual: "data",
  },
  {
    id: "02",
    title: "Do processo à solução.",
    category: "Fullstack",
    description:
      "Espaço para uma aplicação web: adicione as funcionalidades, a arquitetura e os desafios de desenvolvimento.",
    tags: "HTML, CSS, SQL",
    image: "",
    demo: "",
    repo: "",
    example: true,
    visual: "app",
  },
  {
    id: "03",
    title: "Menos tarefas. Mais impacto.",
    category: "Automação",
    description:
      "Espaço para sua automação: explique a rotina automatizada, as tecnologias e os resultados reais.",
    tags: "Python, IA",
    image: "",
    demo: "",
    repo: "",
    example: true,
    visual: "automation",
  },
];
const technologies = [
  {
    name: "Python",
    sub: "Dados & automação",
    icon: SiPython,
    color: "#7eb5e0",
    detail:
      "Análise de dados, Data Science e desenvolvimento com Python. Formação complementar pela IBM.",
  },
  {
    name: "SQL",
    sub: "Bancos de dados",
    icon: SiPostgresql,
    color: "#79add4",
    detail: "Bancos de dados e SQL para Data Science com Python. Formação complementar pela IBM.",
  },
  {
    name: "HTML5",
    sub: "Estrutura web",
    icon: SiHtml5,
    color: "#f87950",
    detail: "Estruturação de interfaces web. Formação em HTML5 e CSS3 pela OneBitCode.",
  },
  {
    name: "CSS3",
    sub: "Interfaces & estilo",
    icon: SiCss3,
    color: "#5f9ff5",
    detail: "Estilização de páginas e interfaces web. Formação em HTML5 e CSS3 pela OneBitCode.",
  },
  {
    name: "Ruby",
    sub: "Desenvolvimento",
    icon: SiRuby,
    color: "#ef6464",
    detail: "Conhecimentos de Ruby a partir da formação complementar Ruby 2.0 pela OneBitCode.",
  },
  {
    name: "Power BI",
    sub: "Business intelligence",
    icon: Database,
    color: "#ebce58",
    detail:
      "Visualização de dados e Business Intelligence. Formação complementar pela Fundação Bradesco.",
  },
  {
    name: "Linux",
    sub: "Sistemas",
    icon: SiLinux,
    color: "#f2ede2",
    detail:
      "Conhecimentos em sistemas Linux e Windows, documentação técnica e segurança da informação.",
  },
  {
    name: "IA Generativa",
    sub: "Inteligência artificial",
    icon: Sparkles,
    color: "#baff5b",
    detail:
      "Google AI Professional Certificate (7 cursos) e formação IBM em IA Generativa aplicada à análise de dados.",
  },
];
const linkedIn = "https://www.linkedin.com/in/guilherme-carlos-oliveira/";
const email = "gui.carlos.comercial@outlook.com";
function safeUrl(url: string) {
  try {
    const u = new URL(url);
    return ["https:", "http:"].includes(u.protocol) ? u.href : "";
  } catch {
    return "";
  }
}
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65 }}
    >
      {children}
    </motion.div>
  );
}
function Globe() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  return (
    <div
      className="hero-art"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPoint({
          x: (e.clientX - r.left - r.width / 2) / 35,
          y: (e.clientY - r.top - r.height / 2) / 35,
        });
      }}
      onPointerLeave={() => setPoint({ x: 0, y: 0 })}
    >
      <div className="art-coordinates">
        SYSTEM ONLINE <span>●</span>
        <br />
        23°33′ S / 46°38′ W
      </div>
      <div className="globe" style={{ transform: `translate(${point.x}px, ${point.y}px)` }}>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
        <svg viewBox="0 0 400 400" className="wire-sphere" aria-hidden="true">
          <defs>
            <radialGradient id="sphereFill">
              <stop offset="0%" stopColor="#a2f64b" stopOpacity=".04" />
              <stop offset="100%" stopColor="#a2f64b" stopOpacity=".14" />
            </radialGradient>
            <clipPath id="circleClip">
              <circle cx="200" cy="200" r="148" />
            </clipPath>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="148"
            fill="url(#sphereFill)"
            stroke="#baff5b"
            strokeOpacity=".5"
          />
          <g
            clipPath="url(#circleClip)"
            stroke="#baff5b"
            strokeWidth=".7"
            fill="none"
            opacity=".45"
          >
            {[24, 50, 78, 108, 132, 148].map((r) => (
              <ellipse key={r} cx="200" cy="200" rx={r} ry="148" />
            ))}
            {[-130, -104, -78, -52, -26, 0, 26, 52, 78, 104, 130].map((n) => (
              <ellipse key={n} cx="200" cy={200 + n} rx={Math.sqrt(148 ** 2 - n ** 2)} ry="20" />
            ))}
          </g>
          <ellipse
            cx="200"
            cy="200"
            rx="183"
            ry="56"
            transform="rotate(-32 200 200)"
            fill="none"
            stroke="#baff5b"
            strokeWidth="1.4"
          />
          <circle cx="351" cy="109" r="5" fill="#baff5b" />
          <circle cx="67" cy="273" r="3" fill="#baff5b" />
        </svg>
        <div className="globe-core">
          <Code2 size={42} strokeWidth={1.2} />
        </div>
      </div>
      <div className="float-label label-python">
        <SiPython /> Python <span>↗</span>
      </div>
      <div className="float-label label-sql">
        <Database size={16} /> SQL
      </div>
      <div className="code-window">
        <div className="code-title">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>guilherme.dev</span>
          <Code2 size={13} />
        </div>
        <pre>
          <span className="code-muted">01 </span>
          <span className="code-purple">const</span> developer = {"{"}
          <br />
          <span className="code-muted">02 </span> name:{" "}
          <span className="code-green">'Guilherme Carlos'</span>,<br />
          <span className="code-muted">03 </span> focus:{" "}
          <span className="code-green">'build. learn. evolve.'</span>,<br />
          <span className="code-muted">04 </span> mindset:{" "}
          <span className="code-green">'problem solver'</span>
          <br />
          <span className="code-muted">05 </span>
          {"}"};
        </pre>
        <div className="code-bottom">
          <span>●</span> Transformando ideias em soluções<span className="cursor-blink">▌</span>
        </div>
      </div>
      <div className="art-caption">
        <span>DESIGNED TO SOLVE.</span>
        <span>BUILT TO EVOLVE.</span>
      </div>
    </div>
  );
}
function ProjectVisual({ project }: { project: Project }) {
  if (project.image)
    return <img className="project-image" src={project.image} alt={`Prévia de ${project.title}`} />;
  return (
    <div className={`project-visual ${project.visual}`} aria-hidden="true">
      {project.visual === "data" ? (
        <div className="dashboard-mock">
          <div className="mock-sidebar">
            <div className="mock-brand">
              g<span>.</span>
            </div>
            {[0, 1, 2, 3].map((i) => (
              <i key={i} />
            ))}
          </div>
          <div className="mock-body">
            <div className="mock-top">
              Overview <span>↗</span>
            </div>
            <div className="mock-stats">
              <div>
                <small>VISÃO GERAL</small>
                <strong>Dados em foco</strong>
                <em>+ insights, − ruído</em>
              </div>
              <Sparkles size={24} />
            </div>
            <div className="chart">
              {[32, 48, 37, 62, 51, 73, 61, 83, 71, 93, 81, 100].map((n, i) => (
                <i key={i} style={{ height: `${n}%` }} />
              ))}
            </div>
            <div className="mock-foot">
              ANALYZE <span>→</span> UNDERSTAND <span>→</span> BUILD
            </div>
          </div>
        </div>
      ) : project.visual === "app" ? (
        <div className="app-mock">
          <div className="app-mock-nav">
            <Layers size={16} />
            <span>workspace</span>
            <i>● ● ●</i>
          </div>
          <div className="app-mock-title">
            Uma ideia.
            <br />
            <span>Infinitas possibilidades.</span>
          </div>
          <div className="mock-task">
            <span className="task-check">✓</span> Planejar a próxima solução <span>01</span>
          </div>
          <div className="mock-task">
            <span className="task-check">✓</span> Conectar front e back <span>02</span>
          </div>
          <div className="mock-task">
            <span className="task-empty" /> Construir algo que importa <span>03</span>
          </div>
        </div>
      ) : (
        <div className="flow-mock">
          <div className="flow-node">
            <Terminal size={24} />
            <span>INPUT</span>
          </div>
          <div className="flow-line" />
          <div className="flow-node central">
            <Sparkles size={30} />
            <span>PROCESS</span>
          </div>
          <div className="flow-line" />
          <div className="flow-node">
            <Check size={24} />
            <span>OUTPUT</span>
          </div>
          <div className="flow-caption">make it work. make it smarter.</div>
        </div>
      )}
      <span className="mock-watermark">PRÉVIA ILUSTRATIVA</span>
    </div>
  );
}
function Dialog({
  children,
  onClose,
  title,
}: {
  children: ReactNode;
  onClose: () => void;
  title: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    ref.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const list = ref.current?.querySelectorAll<HTMLElement>(
          'button,a[href],input,textarea,select,[tabindex="0"]',
        );
        if (!list?.length) return;
        const first = list[0],
          last = list[list.length - 1];
        if (
          e.shiftKey &&
          (document.activeElement === first || document.activeElement === ref.current)
        ) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", key);
      prev?.focus();
    };
  }, [onClose]);
  return (
    <div className="modal-overlay">
      <dialog open className="modal" ref={ref} tabIndex={-1} aria-modal="true" aria-label={title}>
        <button className="close-modal" onClick={onClose} aria-label="Fechar">
          <X size={22} />
        </button>
        {children}
      </dialog>
    </div>
  );
}
export default function Portfolio() {
  const [menu, setMenu] = useState(false),
    [filter, setFilter] = useState("Todos"),
    [editor, setEditor] = useState(false),
    [projects, setProjects] = useState<Project[]>(initialProjects),
    [selected, setSelected] = useState<Project | null>(null),
    [draft, setDraft] = useState<Project | null>(null),
    [tech, setTech] = useState<(typeof technologies)[number] | null>(null),
    [notice, setNotice] = useState(""),
    [copied, setCopied] = useState(false),
    [active, setActive] = useState("inicio");
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  useEffect(() => {
    document.title = "Guilherme Carlos — Desenvolvimento, Dados & IA";
    try {
      const saved = localStorage.getItem("gc-projects-v1");
      if (saved) {
        const data = JSON.parse(saved);
        if (validProjects(data)) setProjects(data);
      }
    } catch {
      setNotice("Não foi possível ler os projetos salvos.");
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 4500);
    return () => clearTimeout(timer);
  }, [notice]);
  function persist(next: Project[]) {
    try {
      localStorage.setItem("gc-projects-v1", JSON.stringify(next));
      setProjects(next);
      return true;
    } catch {
      setNotice("Armazenamento cheio ou indisponível. Use uma imagem menor.");
      return false;
    }
  }
  function validProjects(data: unknown): data is Project[] {
    return (
      Array.isArray(data) &&
      data.length <= 100 &&
      data.every(
        (p) =>
          p &&
          [
            "id",
            "title",
            "category",
            "description",
            "tags",
            "image",
            "demo",
            "repo",
            "visual",
          ].every((k) => typeof p[k] === "string") &&
          typeof p.example === "boolean" &&
          ["Fullstack", "Dados & IA", "Automação"].includes(p.category) &&
          ["data", "app", "automation"].includes(p.visual) &&
          (!p.image || /^data:image\/(png|jpeg|webp);base64,/.test(p.image) || !!safeUrl(p.image)),
      )
    );
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setNotice(`E-mail: ${email}`);
    }
  }
  function saveProject(e: FormEvent) {
    e.preventDefault();
    if (!draft) return;
    if ((draft.demo && !safeUrl(draft.demo)) || (draft.repo && !safeUrl(draft.repo))) {
      setNotice("Use links completos com https:// ou http://.");
      return;
    }
    const next = projects.some((p) => p.id === draft.id)
      ? projects.map((p) => (p.id === draft.id ? draft : p))
      : [...projects, draft];
    if (persist(next)) {
      setDraft(null);
      setNotice("Projeto salvo neste navegador.");
    }
  }
  function exportProjects() {
    const a = document.createElement("a");
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(projects, null, 2)], { type: "application/json" }),
    );
    a.href = url;
    a.download = "guilherme-projetos.json";
    a.click();
    URL.revokeObjectURL(url);
  }
  async function importProjects(file?: File) {
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (!validProjects(data)) throw Error();
      if (persist(data)) setNotice("Projetos importados neste navegador.");
    } catch {
      setNotice("Arquivo inválido. Importe um backup JSON exportado por este site.");
    }
  }
  return (
    <div className="portfolio">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <header className="header">
        <a href="#inicio" className="brand" aria-label="Guilherme Carlos início">
          gc<span>.</span>
          <span className="brand-slash">/</span>
          <small>dev</small>
        </a>
        <nav className={menu ? "nav open" : "nav"} aria-label="Navegação principal">
          {[
            ["inicio", "Início"],
            ["sobre", "Sobre"],
            ["stack", "Stack"],
            ["projetos", "Projetos"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenu(false)}
              className={active === id ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-contact" href="#contato">
          Vamos conversar <ArrowUpRight size={16} />
        </a>
        <button
          className="mobile-toggle"
          aria-label={menu ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main>
        <section id="inicio" className="hero section-container">
          <div className="hero-copy">
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="availability"
            >
              <i /> Aberto a oportunidades <span>FULLSTACK · DADOS · IA</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="hello">Olá, eu sou Guilherme Carlos.</p>
              <h1>
                Transformando
                <br />
                ideias em
                <br />
                <span>
                  soluções<span className="hero-dot">.</span>
                </span>
              </h1>
              <p className="hero-description">
                Código com propósito. Dados com significado.
                <br />
                Desenvolvimento, automação e inteligência artificial
                <br className="desktop-br" /> para conectar problemas a possibilidades.
              </p>
              <div className="hero-actions">
                <a href="#projetos" className="button primary">
                  Explorar projetos <ArrowUpRight size={19} />
                </a>
                <a href="/documents/guilherme-carlos-curriculo.pdf" download className="cv-link">
                  <Download size={17} /> Baixar currículo
                </a>
              </div>
              <div className="hero-meta">
                <span>
                  <MapPin size={14} /> São Paulo, Brasil
                </span>
                <span className="meta-divider" />
                <a href={linkedIn} target="_blank" rel="noreferrer">
                  <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="hero-art-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.15 }}
          >
            <Globe />
          </motion.div>
          <div className="hero-bottom">
            <a href="#sobre">
              <span className="scroll-box">
                <ArrowDown size={15} />
              </span>{" "}
              ROLE PARA EXPLORAR
            </a>
            <span>CRIATIVIDADE + LÓGICA + CAFÉ</span>
            <span className="hero-index">01 / 05</span>
          </div>
        </section>
        <div className="tech-ribbon">
          <div>
            {[
              "DESENVOLVIMENTO",
              "DADOS",
              "INTELIGÊNCIA ARTIFICIAL",
              "AUTOMAÇÃO",
              "RESOLUÇÃO DE PROBLEMAS",
            ].map((s) => (
              <span key={s}>
                <span className="ribbon-star">✳</span>
                {s}
              </span>
            ))}
          </div>
        </div>
        <section id="sobre" className="section-container about-section">
          <Reveal>
            <div className="eyebrow">
              <span>01 / SOBRE MIM</span>
              <span>O HUMANO POR TRÁS DO CÓDIGO</span>
            </div>
            <div className="about-grid">
              <h2>
                Um olhar analítico.
                <br />
                Uma vontade de
                <br />
                <span>construir o novo.</span>
              </h2>
              <div className="about-copy">
                <p>
                  Sou Guilherme Carlos, formado em{" "}
                  <strong>Análise e Desenvolvimento de Sistemas</strong>. Encontro na tecnologia um
                  caminho para transformar informação em soluções úteis e processos em
                  possibilidades.
                </p>
                <p>
                  Minha experiência em liderança operacional trouxe algo que levo para o código:
                  entender o problema antes de construir a solução. Hoje, direciono essa bagagem
                  para desenvolvimento, dados e inteligência artificial.
                </p>
                <div className="about-pills">
                  <span>
                    <Code2 size={15} /> Desenvolvimento
                  </span>
                  <span>
                    <Database size={15} /> Dados
                  </span>
                  <span>
                    <Sparkles size={15} /> Inteligência artificial
                  </span>
                </div>
                <a href="#trajetoria" className="text-link">
                  Conheça minha trajetória <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="values-row">
              <div>
                <span>01</span>
                <strong>Resolver, não complicar.</strong>
                <p>Tecnologia a serviço de problemas reais.</p>
              </div>
              <div>
                <span>02</span>
                <strong>Aprender faz parte.</strong>
                <p>Curiosidade e evolução contínua.</p>
              </div>
              <div>
                <span>03</span>
                <strong>Construir com propósito.</strong>
                <p>Clareza, organização e atenção ao detalhe.</p>
              </div>
            </div>
          </Reveal>
        </section>
        <section id="stack" className="stack-section">
          <div className="section-container">
            <Reveal>
              <div className="eyebrow">
                <span>02 / TECH STACK</span>
                <span>FERRAMENTAS PARA CRIAR</span>
              </div>
              <div className="section-heading">
                <h2>
                  Ideias boas.
                  <br />
                  <span>Ferramentas certas.</span>
                </h2>
                <p>
                  Minha base técnica, em constante evolução.
                  <br />
                  Explore as tecnologias para saber mais.
                </p>
              </div>
              <div className="stack-grid">
                {technologies.map((t) => (
                  <button key={t.name} className="tech-card" onClick={() => setTech(t)}>
                    <t.icon size={34} style={{ color: t.color }} />
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.sub}</span>
                    </div>
                    <ArrowUpRight size={16} />
                  </button>
                ))}
              </div>
              <div className="stack-foot">
                <span>
                  <i /> ALWAYS LEARNING. ALWAYS BUILDING.
                </span>
                <span>Conhecimento que cresce a cada desafio.</span>
              </div>
            </Reveal>
          </div>
        </section>
        <section id="projetos" className="section-container projects-section">
          <Reveal>
            <div className="eyebrow">
              <span>03 / PROJETOS</span>
              <button className="edit-toggle" onClick={() => setEditor(!editor)}>
                <Pencil size={13} />
                {editor ? "Sair da edição" : "Personalizar projetos"}
              </button>
            </div>
            <div className="section-heading">
              <h2>
                Da ideia
                <br />
                <span>ao próximo commit.</span>
              </h2>
              <p>
                Um espaço para soluções, experimentos
                <br />e tudo o que ainda está por vir.
              </p>
            </div>
            <div className="projects-toolbar">
              <div className="filters">
                {["Todos", "Fullstack", "Dados & IA", "Automação"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={filter === f ? "selected" : ""}
                  >
                    {f}
                    {f === "Todos" && <span>{projects.length.toString().padStart(2, "0")}</span>}
                  </button>
                ))}
              </div>
              <span className="toolbar-label">SELECTED WORK / LAB</span>
            </div>
            {editor && (
              <div className="editor-bar">
                <div>
                  <strong>Seu espaço de criação</strong>
                  <p>
                    Alterações ficam apenas neste navegador. Exporte um backup para não perder seus
                    projetos.
                  </p>
                </div>
                <div className="editor-tools">
                  <button
                    onClick={() =>
                      setDraft({
                        id: crypto.randomUUID(),
                        title: "",
                        description: "",
                        category: "Fullstack",
                        tags: "",
                        image: "",
                        demo: "",
                        repo: "",
                        example: false,
                        visual: "app",
                      })
                    }
                  >
                    <Plus size={15} />
                    Adicionar
                  </button>
                  <button onClick={exportProjects} aria-label="Exportar backup">
                    <Download size={16} />
                  </button>
                  <label className="import-label" title="Importar backup">
                    <Upload size={16} />
                    <input
                      type="file"
                      accept="application/json"
                      aria-label="Importar backup JSON"
                      onChange={(e) => {
                        importProjects(e.target.files?.[0]);
                        e.target.value = "";
                      }}
                    />
                  </label>
                </div>
              </div>
            )}
            <div className="project-grid">
              {projects
                .filter((p) => filter === "Todos" || p.category === filter)
                .map((p, i) => (
                  <article
                    key={p.id}
                    className={`project-card ${i === 0 && filter === "Todos" ? "featured" : ""}`}
                  >
                    <button
                      className="project-open"
                      onClick={() => setSelected(p)}
                      aria-label={`Ver detalhes de ${p.title}`}
                    >
                      <ProjectVisual project={p} />
                      <span className="project-hover-arrow">
                        <ArrowUpRight size={24} />
                      </span>
                    </button>
                    <div className="project-content">
                      <div className="project-category">
                        <span>{p.category}</span>
                        {p.example && <span className="example-badge">ESPAÇO DE EXEMPLO</span>}
                      </div>
                      <button className="project-title" onClick={() => setSelected(p)}>
                        {p.title}
                        <ArrowUpRight size={21} />
                      </button>
                      <p>{p.description}</p>
                      <div className="project-tags">
                        {p.tags
                          .split(",")
                          .filter(Boolean)
                          .map((t, j) => (
                            <span key={j}>{t.trim()}</span>
                          ))}
                      </div>
                      {editor && (
                        <div className="project-edit-actions">
                          <button onClick={() => setDraft({ ...p })}>
                            <Pencil size={13} />
                            Editar projeto
                          </button>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
            </div>
            {!projects.some((p) => filter === "Todos" || p.category === filter) && (
              <div className="empty-projects">
                Nenhum projeto nesta categoria. Ative a edição para adicionar o primeiro.
              </div>
            )}
            <p className="project-note">
              <Code2 size={14} /> Os projetos de exemplo são espaços ilustrativos — substitua pelas
              suas próprias criações.
            </p>
          </Reveal>
        </section>
        <section id="trajetoria" className="section-container journey-section">
          <Reveal>
            <div className="eyebrow">
              <span>04 / TRAJETÓRIA</span>
              <span>EXPERIÊNCIA QUE CONECTA</span>
            </div>
            <div className="journey-grid">
              <div>
                <h2>
                  Aprendizado contínuo.
                  <br />
                  <span>Evolução real.</span>
                </h2>
                <p className="journey-intro">
                  Da organização de processos à construção de soluções. Cada experiência soma uma
                  nova perspectiva.
                </p>
                <div className="languages">
                  <span>
                    Inglês <b>B2</b>
                  </span>
                  <span>
                    Espanhol <b>B2</b>
                  </span>
                </div>
                <p className="language-note">Intercâmbio de 21 semanas em Gold Coast, Austrália.</p>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">FORMAÇÃO · CONCLUÍDO EM JUN 2026</div>
                  <h3>Análise e Desenvolvimento de Sistemas</h3>
                  <p>Cruzeiro do Sul · São Paulo</p>
                </div>
                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">EXPERIÊNCIA · SET 2023 — ATUAL</div>
                  <h3>Líder de Almoxarifado</h3>
                  <p>SIGA — Elementos de Fixação</p>
                  <p className="timeline-description">
                    Liderança operacional, análise de relatórios, gestão de informações,
                    rastreabilidade e melhoria de processos.
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">FORMAÇÃO COMPLEMENTAR</div>
                  <h3>Conhecimento em movimento</h3>
                  <div className="certifications">
                    <span>
                      Google <small>Google AI · 7 cursos</small>
                    </span>
                    <span>
                      IBM <small>Python, SQL, Dados & IA Generativa</small>
                    </span>
                    <span>
                      Fundação Bradesco <small>Power BI</small>
                    </span>
                    <span>
                      OneBitCode <small>HTML5, CSS3 & Ruby</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
        <section id="contato" className="contact-section">
          <div className="section-container">
            <Reveal>
              <div className="eyebrow">
                <span>05 / CONTATO</span>
                <span>
                  <i /> ABERTO A NOVAS CONEXÕES
                </span>
              </div>
              <div className="contact-main">
                <h2>
                  A próxima ideia
                  <br />
                  pode começar
                  <br />
                  <span>com um olá.</span>
                </h2>
                <a href={`mailto:${email}`} className="contact-orb" aria-label="Enviar e-mail">
                  <ArrowUpRight size={70} strokeWidth={1} />
                </a>
              </div>
              <div className="contact-bottom">
                <div>
                  <p>Tem uma oportunidade ou um projeto em mente?</p>
                  <div className="email-row">
                    <a href={`mailto:${email}`}>{email}</a>
                    <button onClick={copyEmail} aria-label="Copiar e-mail">
                      {copied ? <Check size={17} /> : <Copy size={17} />}
                    </button>
                  </div>
                </div>
                <a href={linkedIn} target="_blank" rel="noreferrer" className="button secondary">
                  <Linkedin size={17} /> Conectar no LinkedIn <ArrowUpRight size={17} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="section-container footer">
        <a href="#inicio" className="brand">
          gc<span>.</span>
          <span className="brand-slash">/</span>
          <small>dev</small>
        </a>
        <span>© {new Date().getFullYear()} Guilherme Carlos. Feito para evoluir.</span>
        <a href="#inicio">
          De volta ao topo <ArrowUpRight size={16} />
        </a>
      </footer>
      {notice && <output className="toast">{notice}</output>}
      {selected && (
        <Dialog title={selected.title} onClose={() => setSelected(null)}>
          <ProjectVisual project={selected} />
          <div className="detail-body">
            <div className="eyebrow">
              {selected.category}
              {selected.example && " / EXEMPLO ILUSTRATIVO"}
            </div>
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>
            <div className="project-tags">
              {selected.tags.split(",").map((t, i) => (
                <span key={i}>{t.trim()}</span>
              ))}
            </div>
            <div className="detail-links">
              {safeUrl(selected.demo) && (
                <a
                  className="button primary"
                  href={safeUrl(selected.demo)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver projeto <ExternalLink size={16} />
                </a>
              )}
              {safeUrl(selected.repo) && (
                <a
                  className="button secondary"
                  href={safeUrl(selected.repo)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Código-fonte <Code2 size={16} />
                </a>
              )}
              {!selected.demo && !selected.repo && (
                <p className="detail-note">
                  Links ainda não adicionados. Use “Personalizar projetos” para incluir os seus.
                </p>
              )}
            </div>
          </div>
        </Dialog>
      )}
      {tech && (
        <Dialog title={tech.name} onClose={() => setTech(null)}>
          <div className="tech-detail">
            <tech.icon size={54} style={{ color: tech.color }} />
            <div className="eyebrow">TECH STACK / {tech.sub}</div>
            <h2>{tech.name}</h2>
            <p>{tech.detail}</p>
            <a className="button secondary" href="#projetos" onClick={() => setTech(null)}>
              Explorar projetos <ArrowUpRight size={17} />
            </a>
          </div>
        </Dialog>
      )}
      {draft && (
        <Dialog title="Editar projeto" onClose={() => setDraft(null)}>
          <form className="project-form" onSubmit={saveProject}>
            <div className="eyebrow">PROJECT EDITOR / LOCAL</div>
            <h2>
              {projects.some((p) => p.id === draft.id) ? "Editar projeto" : "Novo projeto"}
              <span>.</span>
            </h2>
            <label>
              Título
              <input
                required
                maxLength={90}
                aria-label="Título"
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                placeholder="Nome do seu projeto"
              />
            </label>
            <div className="form-row">
              <label>
                Categoria
                <select
                  aria-label="Categoria"
                  value={draft.category}
                  onChange={(e) =>
                    setDraft({
                      ...draft,
                      category: e.target.value,
                      visual:
                        e.target.value === "Dados & IA"
                          ? "data"
                          : e.target.value === "Automação"
                            ? "automation"
                            : "app",
                    })
                  }
                >
                  {["Fullstack", "Dados & IA", "Automação"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
              <label>
                Tecnologias
                <input
                  aria-label="Tecnologias"
                  value={draft.tags}
                  maxLength={150}
                  onChange={(e) => setDraft({ ...draft, tags: e.target.value })}
                  placeholder="Python, SQL"
                />
              </label>
            </div>
            <label>
              Legenda / descrição
              <textarea
                aria-label="Legenda / descrição"
                required
                rows={4}
                maxLength={2500}
                value={draft.description}
                onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                placeholder="O problema, sua solução e os resultados..."
              />
            </label>
            <label className="image-upload">
              <Upload size={18} /> {draft.image ? "Trocar imagem" : "Adicionar imagem do projeto"}
              <small>PNG, JPG ou WebP · até 2 MB</small>
              <input
                type="file"
                aria-label="Imagem do projeto"
                accept="image/png,image/jpeg,image/webp"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (!f) return;
                  if (
                    f.size > 2 * 1024 * 1024 ||
                    !["image/png", "image/jpeg", "image/webp"].includes(f.type)
                  ) {
                    setNotice("Selecione PNG, JPG ou WebP de até 2 MB.");
                    return;
                  }
                  const reader = new FileReader();
                  reader.onload = () => setDraft({ ...draft, image: String(reader.result) });
                  reader.readAsDataURL(f);
                }}
              />
            </label>
            {draft.image && (
              <button
                type="button"
                className="remove-image"
                onClick={() => setDraft({ ...draft, image: "" })}
              >
                Remover imagem
              </button>
            )}
            <div className="form-row">
              <label>
                Link do projeto
                <input
                  type="url"
                  aria-label="Link do projeto"
                  value={draft.demo}
                  onChange={(e) => setDraft({ ...draft, demo: e.target.value })}
                  placeholder="https://..."
                />
              </label>
              <label>
                Repositório
                <input
                  type="url"
                  aria-label="Repositório"
                  value={draft.repo}
                  onChange={(e) => setDraft({ ...draft, repo: e.target.value })}
                  placeholder="https://github.com/..."
                />
              </label>
            </div>
            <label className="checkbox-label">
              <input
                type="checkbox"
                aria-label="Identificar como exemplo ilustrativo"
                checked={draft.example}
                onChange={(e) => setDraft({ ...draft, example: e.target.checked })}
              />{" "}
              Identificar como exemplo ilustrativo
            </label>
            <div className="form-actions">
              {projects.some((p) => p.id === draft.id) && (
                <button
                  type="button"
                  className="danger-button"
                  onClick={() => {
                    if (window.confirm("Excluir este projeto do navegador?")) {
                      if (persist(projects.filter((p) => p.id !== draft.id))) setDraft(null);
                    }
                  }}
                >
                  <Trash2 size={16} />
                  Excluir
                </button>
              )}
              <button className="button primary" type="submit">
                Salvar projeto <Check size={17} />
              </button>
            </div>
            <p className="local-warning">
              Salvo somente neste navegador. Não é um painel administrativo público ou uma
              publicação compartilhada.
            </p>
          </form>
        </Dialog>
      )}
    </div>
  );
}
