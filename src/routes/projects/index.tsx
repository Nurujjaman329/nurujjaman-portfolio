import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/portfolio/Section";
import { StoreLinks } from "@/components/portfolio/StoreLinks";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { fetchProjects } from "@/lib/firestore-projects";
import { trackEvent } from "@/lib/analytics";
import { type ProjectDetail } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  loader: () => fetchProjects(),
  component: Projects,
});

function Projects() {
  const projects = Route.useLoaderData() as ProjectDetail[];

  return (
    <Section
      eyebrow="03 — Project Archive"
      title="Every project shipped."
      description="13+ Flutter apps shipped — 6 live on the App Store and Google Play — spanning social commerce, beauty, ride-sharing, enterprise logistics for Nokia & Honor, agri-tech, fintech, edtech and national GovTech."
    >
      <div className="mb-8 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3 w-3" /> Back to Home
        </Link>
        <span className="font-mono text-xs text-muted-foreground">
          Showing {projects.length} case studies
        </span>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, idx) => (
          <div
            key={p.slug}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-spring hover:-translate-y-1 hover:border-primary/40"
          >
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              onClick={() => trackEvent("Project Click", { slug: p.slug, name: p.name })}
              className="flex-1 flex flex-col"
            >
              {/* Device Screenshot Preview Container */}
              {p.images[0] && (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface/70 border-b border-border/80 flex items-center justify-center p-4">
                  <img
                    src={p.images[0]}
                    alt={`${p.name} preview`}
                    loading={idx < 4 ? "eager" : "lazy"}
                    decoding="async"
                    className="max-h-full max-w-[170px] rounded-lg border border-border/60 object-contain shadow-card transition-spring group-hover:scale-105"
                  />
                  {p.status.includes("Live") && (
                    <span className="absolute top-3 right-3 rounded-full border border-emerald-700/30 bg-emerald-700/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-800 backdrop-blur-xs">
                      Live on Stores
                    </span>
                  )}
                </div>
              )}

              <div className="p-7 pb-0 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                        {p.tag}
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {p.name}
                      </h3>
                    </div>
                    <ArrowRight className="h-4 w-4 mt-2 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <p className="mt-3 text-sm text-foreground/80 leading-relaxed line-clamp-3">
                    {p.overview}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {p.stack.slice(0, 4).map((s) => (
                    <span
                      key={s.name}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 text-foreground/80"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            <div className="mt-6 flex items-center justify-between border-t border-border/80 px-7 py-4 text-xs">
              <span className="font-mono text-[11px] text-muted-foreground">
                {p.company} · {p.period}
              </span>
              {p.storeLink ? (
                <StoreLinks appStoreUrl={p.appStoreUrl} playStoreUrl={p.playStoreUrl} />
              ) : (
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="font-mono text-[11px] font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  Read story →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-xs font-mono text-muted-foreground">
        A few additional shipped apps aren’t listed here due to client NDAs.
      </p>
    </Section>
  );
}
