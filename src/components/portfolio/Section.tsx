import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-6 py-20 ${className}`}>
      <div className="mb-12 max-w-2xl animate-fade-up">
        {eyebrow && (
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary font-semibold shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">{title}</h1>
        {description && (
          <p className="mt-4 text-lg text-foreground/80 leading-relaxed font-sans">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}
