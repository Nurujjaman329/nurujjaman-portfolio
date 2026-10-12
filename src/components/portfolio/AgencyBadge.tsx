import { useState } from "react";
import portrait from "@/assets/portrait.jpg";
import { experienceStat } from "@/data/profile";
import { Sparkles, RotateCw, ExternalLink } from "lucide-react";

export function AgencyBadge() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center select-none">
      {/* Lanyard Cord */}
      <div className="flex flex-col items-center">
        <div className="h-6 w-12 rounded-t-md border-t-2 border-x-2 border-border/80 bg-muted/60 flex items-center justify-center">
          <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
            SPARKTECH
          </span>
        </div>
        <div className="h-5 w-1 bg-border/90" />
        <div className="h-2 w-5 rounded-full bg-border" />
      </div>

      {/* 3D Card Container */}
      <div
        className="relative h-[340px] w-[240px] sm:h-[360px] sm:w-[260px] cursor-pointer group [perspective:1000px]"
        onClick={() => setIsFlipped(!isFlipped)}
        role="button"
        tabIndex={0}
        aria-label="Click to flip agency badge"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setIsFlipped(!isFlipped);
        }}
      >
        <div
          className={`relative h-full w-full rounded-2xl border border-border/90 shadow-elegant transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* FRONT FACE */}
          <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-card p-5 [backface-visibility:hidden]">
            {/* Top Header */}
            <div className="flex items-center justify-between border-b border-border/80 pb-3">
              <div className="flex flex-col">
                <span className="font-display text-xs font-bold tracking-tight text-foreground">
                  SPARKTECH AGENCY
                </span>
                <span className="font-mono text-[9px] text-muted-foreground tracking-widest uppercase">
                  Mobile Engineering
                </span>
              </div>
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Sparkles className="h-3 w-3" />
              </span>
            </div>

            {/* Photo & Profile */}
            <div className="my-auto flex flex-col items-center text-center">
              <div className="relative mb-3 h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-xl border-2 border-border shadow-sm group-hover:scale-102 transition-transform">
                <img
                  src={portrait}
                  alt="MD. Nurujjaman"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">
                MD. Nurujjaman
              </h3>
              <p className="font-mono text-[11px] font-semibold text-accent mt-0.5">
                Software Engineer (Flutter)
              </p>
              <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                Dhaka, Bangladesh
              </p>
            </div>

            {/* Bottom Barcode */}
            <div className="border-t border-border/80 pt-3 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">
                  Badge ID
                </div>
                <div className="font-mono text-[10px] font-bold text-foreground">
                  MN·FLUTTER-PRO
                </div>
              </div>
              <span className="inline-flex items-center gap-1 font-mono text-[9px] text-accent font-semibold group-hover:underline">
                <RotateCw className="h-3 w-3 animate-spin-slow" /> Flip stats
              </span>
            </div>
          </div>

          {/* BACK FACE */}
          <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-card p-5 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="border-b border-border/80 pb-3 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                Verified Career Vitals
              </span>
              <span className="font-mono text-[10px] text-primary font-bold">2023–2026</span>
            </div>

            <div className="my-auto space-y-3">
              <div className="rounded-xl border border-border/70 bg-surface/70 p-3 text-center">
                <div className="font-display text-3xl font-bold text-foreground">
                  {experienceStat()}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Years Commercial Exp
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="rounded-xl border border-border/70 bg-surface/70 p-2.5">
                  <div className="font-display text-xl font-bold text-primary">13+</div>
                  <div className="font-mono text-[9px] text-muted-foreground uppercase">
                    Apps Shipped
                  </div>
                </div>
                <div className="rounded-xl border border-border/70 bg-surface/70 p-2.5">
                  <div className="font-display text-xl font-bold text-accent">6 Live</div>
                  <div className="font-mono text-[9px] text-muted-foreground uppercase">
                    Store Releases
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border/60 bg-surface/40 p-2.5 text-center">
                <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
                  Enterprise Clients
                </div>
                <div className="font-display text-xs font-semibold text-foreground mt-0.5">
                  Nokia · Honor · Meghna Life
                </div>
              </div>
            </div>

            <div className="border-t border-border/80 pt-3 text-center">
              <span className="inline-flex items-center gap-1 font-mono text-[9px] text-muted-foreground">
                <RotateCw className="h-3 w-3" /> Tap to view front
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 font-mono text-[11px] text-muted-foreground/80 flex items-center gap-1.5">
        <span>↔</span> Click badge to inspect verified stats
      </p>
    </div>
  );
}

