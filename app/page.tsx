"use client";

import * as React from "react";
import { ExternalLink, Menu, X } from "lucide-react";

const navItems = [
  { label: "01 About", href: "#about" },
  { label: "02 Path", href: "#experience" },
  { label: "03 Work", href: "#work" },
  { label: "04 Signal", href: "#contact" },
];

const marqueeItems = [
  "Gen-AI",
  "Vibe Coding",
  "Problem Solving",
  "RAG & Agents",
  "Productive Development",
];

const specs = [
  {
    label: "Currently",
    value: "Junior Software Engineer",
    subvalue: "ProdGain \u00b7 Hyderabad",
  },
  {
    label: "Education",
    value: "B.E. Computer Science",
    subvalue: "CIT, Coimbatore \u00b7 2025",
  },
  {
    label: "Focus",
    value: "Full-Stack \u00b7 Gen-AI",
  },
  {
    label: "Stack",
    value: "TypeScript \u00b7 Next.js \u00b7 Node",
  },
];

const experience = [
  {
    dates: ["Jun 2025", "Present"],
    role: "Junior Software Engineer",
    company: "ProdGain Pvt Ltd \u00b7 Hyderabad",
    description:
      "Built a Sales Agent wired into client databases for actionable insight, and a real-time Sales Coaching app on the Gemini Live API that simulates calls and returns live feedback. Shipped an agent framework exposed over REST for developer research tasks.",
  },
  {
    dates: ["Jan 2025", "May 2025"],
    role: "Intern Software Engineer",
    company: "ProdGain Pvt Ltd \u00b7 Hyderabad",
    description:
      "Built an Agentic Research Platform with customizable agents for complex work and lighter agents for general research, wiring in Internet and Semantic Search. Designed the backend for an agentic chatbot with a RAG framework for efficient PDF summarization.",
  },
  {
    dates: ["Sep 2023", "Oct 2023"],
    role: "MERN Stack Developer",
    company: "BlockSurvey Technologies \u00b7 Bangalore",
    description:
      "Shipped an MVP social app with user profiles and interactive feeds for photo, audio, and video posts, then implemented REST APIs for registration, authentication, and post management.",
  },
];

const projects = [
  {
    number: "001",
    year: "2026",
    title: "QueryLLM",
    description:
      "Full-stack AI chat across three deployed services: Next.js frontend, REST backend, dedicated AI server, real-time SSE streaming, and a tool-calling system.",
    tags: ["Next.js", "Vercel AI SDK", "SSE", "MongoDB"],
    href: "https://query-llm-frontend.vercel.app/",
  },
  {
    number: "002",
    year: "2024",
    title: "SalesSense-AI",
    description:
      "Text-to-SQL analytics chatbot using Gemini to interpret questions, generate SQL, and return accurate, contextual answers from the database.",
    tags: ["Text-to-SQL", "React", "SQLite"],
    href: "https://github.com/HarshalRamRV/SalesSense-AI",
  },
];

const skillGroups = [
  { label: "Languages", items: ["JavaScript", "TypeScript"] },
  { label: "Frontend", items: ["Next.js", "React.js", "React Query"] },
  { label: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase"] },
  { label: "DevOps", items: ["Linux", "Git \u00b7 GitHub", "Render"] },
  { label: "Gen-AI", items: ["Cursor", "Codex", "Claude Code"] },
];

function SectionKicker({
  chapter,
  label,
}: {
  chapter: string;
  label: string;
}) {
  return (
    <div className="section-kicker reveal">
      <span>{chapter}</span>
      <i aria-hidden="true" />
      <strong>{label}</strong>
    </div>
  );
}

function formatTokensK(value: number): string {
  const k = Math.min(value / 1000, 99.9);
  return `${k.toFixed(1)}k`;
}

export default function Home() {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const tokenTargetRef = React.useRef(99_900);
  const [progress, setProgress] = React.useState(0);
  const [tokens, setTokens] = React.useState(0);
  const [loaderLifted, setLoaderLifted] = React.useState(false);
  const [loaderDone, setLoaderDone] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const targetTokens = tokenTargetRef.current;

    if (reduceMotion) {
      setProgress(100);
      setTokens(targetTokens);
      const liftTimer = window.setTimeout(() => setLoaderLifted(true), 300);
      const doneTimer = window.setTimeout(() => setLoaderDone(true), 900);
      return () => {
        window.clearTimeout(liftTimer);
        window.clearTimeout(doneTimer);
      };
    }

    let frame = 0;
    let lastBurst = 0;
    const duration = 2800;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      const burstInterval = 32 + Math.sin(now * 0.011) * 18;
      if (now - lastBurst >= burstInterval) {
        lastBurst = now;
        const tokenTarget = Math.floor(eased * targetTokens);
        setTokens((prev) => {
          if (prev >= tokenTarget) return prev;
          const remaining = tokenTarget - prev;
          const jump = Math.max(
            1,
            Math.floor(remaining * (0.22 + Math.random() * 0.48))
          );
          return Math.min(tokenTarget, prev + jump);
        });
      }

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTokens(targetTokens);
        window.setTimeout(() => setLoaderLifted(true), 450);
        window.setTimeout(() => setLoaderDone(true), 1700);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealEls = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    const show = (el: HTMLElement) => el.classList.add("is-visible");

    if (!("IntersectionObserver" in window)) {
      revealEls.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
    const safety = window.setTimeout(() => revealEls.forEach(show), 5000);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY || window.pageYOffset || 0;
        root.style.setProperty("--hero-title-y", `${y * 0.16}px`);
        root.style.setProperty("--hero-glow-y", `${y * 0.28}px`);
        root.style.setProperty("--hero-photo-y", `${y * 0.07}px`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={rootRef} className="portfolio-shell">
      <div className="film-grain" aria-hidden="true" />

      {!loaderDone && (
        <div className={`loader ${loaderLifted ? "loader--lifted" : ""}`}>
          <div className="loader__top">
          </div>
          <div className="loader__brand">
            <span>Initiating Sequence</span>
            <strong>Harshal Ram</strong>
          </div>
          <div>
            <div className="loader__status">
              <span>Loading context</span>
              <strong className="loader__tokens">
                {formatTokensK(tokens)}
                <em>tokens</em>
              </strong>
            </div>
            <div
              className="loader__bar"
              aria-hidden="true"
              style={{ "--loader-progress": progress / 100 } as React.CSSProperties}
            >
              <i />
            </div>
          </div>
        </div>
      )}

      <nav className="site-nav" aria-label="Primary navigation">
        <a className="site-nav__mark" href="#top" onClick={closeMenu}>
          H.R.V<span>.</span>
        </a>
        <div className="site-nav__links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <button
          className="site-nav__toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`site-nav__mobile ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <main>
        <section id="top" className="hero">
          <div className="hero__glow" aria-hidden="true" />
          <div className="hero__vignette" aria-hidden="true" />
          <div className="hero__halo" aria-hidden="true" />
          <div className="hero__photo" aria-hidden="true">
            <img src="/images/portrait-cutout.png" alt="" />
          </div>
          <div className="hero__base" aria-hidden="true" />

          <div className="hero__content">
            <div className="hero__meta">
              <p>
                <span>Software Engineer</span>
              Full-Stack &middot; Gen-AI
              </p>
              <p>
                17&deg;23&prime;N 78&deg;28&prime;E
                <br />
                Hyderabad &middot; IN
              </p>
            </div>

            <h1 className="hero__title">
              Harshal
              <br />
              <span>Ram</span>
              <small>R&nbsp;V</small>
            </h1>

            <div className="hero__footer">
              <p>
                Engineer building AI-native products — agentic research platforms with tooling and harness to solve real-world problems.
              </p>
            </div>
          </div>
        </section>

        <div className="marquee" aria-label="Core technologies">
          <div>
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <React.Fragment key={`${item}-${index}`}>
                <span>{item}</span>
                <i aria-hidden="true">✦</i>
              </React.Fragment>
            ))}
          </div>
        </div>

        <section id="about" className="section section--about">
          <SectionKicker chapter="Ch. 01" label="Origins" />
          <div className="about-grid">
            <div className="about-copy reveal reveal-delay-1">
              <p className="section-statement">
              Tokenmaxing is the new builder mindset.
              </p>
              <p>
                A Computer Science engineer from Coimbatore, now shipping
                production AI systems at ProdGain. I work across the full stack — Next.js frontends,
                Node backends, and the AI layer — shipping things
                people actually use.
              </p>
            </div>

            <div className="spec-list reveal reveal-delay-2">
              {specs.map((spec) => (
                <div key={spec.label} className="spec-row">
                  <span>{spec.label}</span>
                  <strong>
                    {spec.value}
                    {spec.subvalue && <em>{spec.subvalue}</em>}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section section--path">
          <SectionKicker chapter="Ch. 02" label="The Path" />
          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.role}-${item.dates[0]}`} className="timeline-item reveal">
                <div className="timeline-item__date">
                  {item.dates[0]}
                  <span>{item.dates[1]}</span>
                </div>
                <div>
                  <h2>{item.role}</h2>
                  <p className="timeline-item__company">{item.company}</p>
                  <p className="timeline-item__description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section section--work">
          <SectionKicker chapter="Ch. 03" label="Selected Work" />
          <div className="project-grid">
            {projects.map((project, index) => (
              <a
                key={project.title}
                className={`project-card reveal ${index ? "reveal-delay-1" : ""}`}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-card__meta">
                  <span>{project.number}</span>
                  <span>{project.year}</span>
                </div>
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section section--skills">
          <SectionKicker chapter="Ch. 04" label="The Arsenal" />
          <div className="skills-grid reveal">
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-group">
                <h2>{group.label}</h2>
                <p>
                  {group.items.map((item) => (
                    <React.Fragment key={item}>
                      {item}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-section__glow" aria-hidden="true" />
          <div className="contact-section__inner">
            <p className="contact-eyebrow reveal">Open to the network</p>
            <a className="contact-title reveal" href="mailto:ramharshal03@gmail.com">
              Let&apos;s
              <br />
              <span style={{ letterSpacing: "0.08em" }}>Vibe</span>
         
            </a>
            <div className="contact-links">
              <a href="mailto:ramharshal03@gmail.com">ramharshal03@gmail.com</a>
              <div>
                <a
                  href="https://www.linkedin.com/in/harshal-ram-r-v-05a1a81b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <ExternalLink size={14} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/HarshalRamRV"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <footer className="site-footer">
            <span>&copy; Harshal Ram R V</span>
            <span>Hyderabad &middot; IN</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
