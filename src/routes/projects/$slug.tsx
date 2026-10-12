import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Layers, Zap, Package, X, Images, CheckCircle2 } from "lucide-react";
import { StoreLinks } from "@/components/portfolio/StoreLinks";
import { fetchProject } from "@/lib/firestore-projects";
import { projects as staticProjects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: async ({ params }) => {
    const project = await fetchProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  const images = project.images ?? [];

  const currentIndex = staticProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? staticProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex >= 0 && currentIndex < staticProjects.length - 1
      ? staticProjects[currentIndex + 1]
      : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Breadcrumb Navigation */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All Projects
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          Home ↗
        </Link>
      </div>

      {/* Header */}
      <header className="mb-10">
        <div className={`mb-4 h-1 w-12 rounded-full bg-gradient-to-r ${project.accent}`} />
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">{project.tag}</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground">{project.name}</h1>
        <p className="mt-3 text-lg text-foreground/80 leading-relaxed font-sans">{project.tagline}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
          <span className="font-mono text-muted-foreground">{project.company}</span>
          <span className="text-border">·</span>
          <span className="font-mono text-muted-foreground">{project.period}</span>
          <span className="text-border">·</span>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 font-mono text-xs font-semibold text-primary">
            {project.status}
          </span>
          {project.storeLink && (
            <StoreLinks appStoreUrl={project.appStoreUrl} playStoreUrl={project.playStoreUrl} />
          )}
        </div>
      </header>

      {/* Screenshots */}
      <div className="mb-12">
        <Block title="Screenshots & Interface" icon={<Images className="h-4 w-4" />}>
          {images.length > 0 ? (
            <ScreenshotGallery images={images} projectName={project.name} />
          ) : (
            <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
              Production screenshots available upon request.
            </div>
          )}
        </Block>
      </div>

      <div className="space-y-10">
        <Block title="Overview" icon={<Layers className="h-4 w-4" />}>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card">
            <p className="text-foreground/85 leading-relaxed text-base">{project.overview}</p>
          </div>
        </Block>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-xs">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              The Challenge
            </p>
            <p className="text-sm text-foreground/85 leading-relaxed">{project.challenge}</p>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-card p-6 shadow-xs">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              The Solution
            </p>
            <p className="text-sm text-foreground/85 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <Block title="Key Features" icon={<Zap className="h-4 w-4" />}>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-xl border border-border bg-card p-5 shadow-xs transition-spring hover:border-primary/40"
              >
                <p className="font-display font-semibold text-foreground">{h.title}</p>
                <p className="mt-1 text-sm text-foreground/75 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Architecture" icon={<Layers className="h-4 w-4" />}>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card">
            <span className="inline-block rounded-md border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
              {project.architecture.pattern}
            </span>
            <p className="mb-6 mt-4 text-sm text-foreground/85 leading-relaxed">
              {project.architecture.description}
            </p>
            <div className="space-y-4">
              {project.architecture.layers.map((layer, i) => (
                <div key={layer.name} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-xs font-bold text-primary-foreground shadow-xs">
                      {i + 1}
                    </div>
                    {i < project.architecture.layers.length - 1 && (
                      <div className="mt-2 h-full w-px bg-border" />
                    )}
                  </div>
                  <div className="pb-3">
                    <p className="font-display font-semibold text-foreground">{layer.name}</p>
                    <p className="mt-0.5 text-sm text-foreground/75 leading-relaxed">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Block>

        <Block title="State Management" icon={<Zap className="h-4 w-4" />}>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card">
            <span className="inline-block rounded-md border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent">
              {project.stateManagement.solution}
            </span>
            <p className="mt-4 text-sm text-foreground/85 leading-relaxed">
              {project.stateManagement.reason}
            </p>
          </div>
        </Block>

        <Block title="Tech Stack" icon={<Package className="h-4 w-4" />}>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.stack.map((s) => (
              <div
                key={s.name}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-xs"
              >
                <span className="mt-0.5 rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs font-semibold shrink-0 text-foreground">
                  {s.name}
                </span>
                <span className="text-xs text-foreground/75 leading-relaxed">{s.purpose}</span>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Outcome & Impact" icon={<CheckCircle2 className="h-4 w-4" />}>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card">
            <ul className="space-y-3">
              {project.results.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </Block>
      </div>

      {/* Prev / Next Project Navigation */}
      <div className="mt-16 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevProject ? (
          <Link
            to="/projects/$slug"
            params={{ slug: prevProject.slug }}
            className="group flex flex-col text-left"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
              <ArrowLeft className="h-3 w-3" /> Previous Project
            </span>
            <span className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
              {prevProject.name}
            </span>
          </Link>
        ) : (
          <div />
        )}

        <Link
          to="/projects"
          className="rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs font-semibold text-foreground hover:bg-muted/70 transition-colors shadow-xs"
        >
          All 13+ Projects
        </Link>

        {nextProject ? (
          <Link
            to="/projects/$slug"
            params={{ slug: nextProject.slug }}
            className="group flex flex-col text-right"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground flex items-center justify-end gap-1 group-hover:text-primary transition-colors">
              Next Project <ArrowRight className="h-3 w-3" />
            </span>
            <span className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
              {nextProject.name}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

function Block({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-2 text-muted-foreground">
        {icon}
        <h2 className="font-mono text-xs uppercase tracking-widest">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ScreenshotGallery({
  images,
  projectName,
}: {
  images: string[];
  projectName: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const updateScrollState = () => {
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [images]);

  function scrollByPage(direction: 1 | -1) {
    scrollerRef.current?.scrollBy({
      left: direction * scrollerRef.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0"
      >
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setLightboxIndex(i)}
            aria-label={`View ${projectName} screenshot ${i + 1} full size`}
            className="group shrink-0 snap-start cursor-zoom-in"
          >
            <img
              src={src}
              alt={`${projectName} screenshot ${i + 1}`}
              loading={i < 3 ? "eager" : "lazy"}
              decoding="async"
              className="aspect-[9/19] w-[160px] rounded-xl border border-border/60 object-cover shadow-card transition-spring group-hover:scale-[1.02] sm:w-[200px]"
            />
          </button>
        ))}
      </div>

      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          aria-label="Scroll screenshots left"
          className="absolute left-1 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/90 p-2 shadow-elegant backdrop-blur transition-smooth hover:bg-secondary sm:flex"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      )}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          aria-label="Scroll screenshots right"
          className="absolute right-1 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/90 p-2 shadow-elegant backdrop-blur transition-smooth hover:bg-secondary sm:flex"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          projectName={projectName}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}

function Lightbox({
  images,
  index,
  projectName,
  onClose,
  onNavigate,
}: {
  images: string[];
  index: number;
  projectName: string;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [index, images.length, onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-smooth hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + images.length) % images.length);
            }}
            aria-label="Previous screenshot"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-smooth hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % images.length);
            }}
            aria-label="Next screenshot"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-smooth hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <img
        src={images[index]}
        alt={`${projectName} screenshot ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
      />

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-white/60">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}
