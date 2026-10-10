import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Download, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { id: "work", label: "Work" },
  { id: "toolkit", label: "Skills" },
  { id: "experience", label: "Journey" },
  { id: "moments", label: "Milestones" },
  { id: "contact", label: "Contact" },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ["home", "work", "toolkit", "experience", "moments", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  function handleNav(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  }

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Monogram Brand */}
        <Link to="/" onClick={(e) => isHome && handleNav(e, "home")} className="flex items-center gap-3 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary text-primary-foreground font-display text-base font-bold shadow-sm transition-spring group-hover:scale-105">
            MN<span className="text-accent">·</span>
          </span>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              MD. Nurujjaman
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Software Engineer (Mobile) · Dhaka
            </span>
          </div>
        </Link>

        {/* Desktop Pill Navigation with Smooth Scrolling */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/80 bg-surface/90 px-2 py-1 shadow-sm">
          {navLinks.map((item) => {
            const isActive = isHome && activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleNav(e, item.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-smooth ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="/resume.pdf"
            download="MD_Nurujjaman_Flutter_Developer.pdf"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-elevated px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-xs transition-smooth hover:border-primary/40 hover:bg-muted/60"
          >
            <Download className="h-3.5 w-3.5 text-primary" /> Résumé ↓
          </a>
          <a
            href="/#contact"
            onClick={(e) => handleNav(e, "contact")}
            className="inline-flex items-center gap-1 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground shadow-sm transition-spring hover:scale-105 hover:brightness-105"
          >
            Let’s talk <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer with Smooth Scrolling */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-surface px-6 py-5 space-y-3 shadow-elegant">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((item) => {
              const isActive = isHome && activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => handleNav(e, item.id)}
                  className={`px-4 py-2.5 text-sm font-semibold rounded-lg ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/80 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-border/80 flex items-center justify-between gap-3">
            <a
              href="/resume.pdf"
              download="MD_Nurujjaman_Flutter_Developer.pdf"
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-surface-elevated py-2.5 text-xs font-semibold text-foreground"
            >
              <Download className="h-3.5 w-3.5 text-primary" /> Résumé ↓
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleNav(e, "contact")}
              className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-accent py-2.5 text-xs font-semibold text-accent-foreground"
            >
              Let’s talk <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const navigate = useNavigate();
  const clickCount = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleSecretClick() {
    clickCount.current += 1;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 3000);
    if (clickCount.current >= 5) {
      clickCount.current = 0;
      navigate({ to: "/admin" });
    }
  }

  return (
    <footer className="border-t border-border mt-28 bg-surface/50">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20 bg-primary text-primary-foreground font-display text-xs font-bold">
            MN<span className="text-accent">·</span>
          </span>
          <p onClick={handleSecretClick} className="select-none cursor-default font-medium text-foreground/80">
            © {new Date().getFullYear()} MD. Nurujjaman — <span className="font-serif italic">Mobile Engineer.</span>
          </p>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          Built with React · TypeScript · Clean Mobile Craft
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-accent transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
