import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import { Boxes, Database, Layers, type LucideIcon } from "lucide-react";
import { Bkash } from "react-bangla-pay-icons";
import {
  siAppstore,
  siDart,
  siFirebase,
  siFlutter,
  siGetx,
  siGooglemaps,
  siGoogleplay,
  siSocketdotio,
  siStripe,
  type SimpleIcon,
} from "simple-icons";

interface TechItem {
  id: string;
  name: string;
  label: string;
  category: "mobile" | "arch" | "backend" | "payments" | "tools";
  icon?: LucideIcon;
  brand?: SimpleIcon | SimpleIcon[];
  logo?: ComponentType<SVGProps<SVGSVGElement>>;
  badgeColor: string;
  summary: string;
  usedIn: string;
}

const brandTile = "border border-border bg-white text-foreground";

function TechGlyph({
  item,
  className,
}: {
  item: TechItem;
  className: string;
}) {
  if (item.logo) {
    const Logo = item.logo;
    return <Logo width="100%" height="100%" className="h-7 w-10" aria-hidden />;
  }

  if (!item.brand) {
    if (!item.icon) return null;
    const Icon = item.icon;
    return <Icon className={className} />;
  }

  const marks = Array.isArray(item.brand) ? item.brand : [item.brand];
  return (
    <span className="flex items-center justify-center gap-0.5">
      {marks.map((mark) => (
        <svg
          key={mark.title}
          viewBox="0 0 24 24"
          className={marks.length > 1 ? "h-4 w-4" : className}
          aria-hidden
        >
          <path fill={`#${mark.hex}`} d={mark.path} />
        </svg>
      ))}
    </span>
  );
}

const techItems: TechItem[] = [
  {
    id: "flutter",
    name: "Flutter",
    label: "Flutter",
    category: "mobile",
    brand: siFlutter,
    badgeColor: brandTile,
    summary: "Primary cross-platform framework building high-performance 60fps applications for iOS and Android.",
    usedIn: "Presentini, Fouta App, TNP Beauty, BloodFit, Lyfuber, Meghna Life",
  },
  {
    id: "dart",
    name: "Dart",
    label: "Dart",
    category: "mobile",
    brand: siDart,
    badgeColor: brandTile,
    summary: "Strong null-safety, asynchronous streams, custom isolates, and platform channel interop.",
    usedIn: "Every production app",
  },
  {
    id: "bloc",
    name: "Bloc / Cubit",
    label: "Bloc",
    category: "arch",
    icon: Boxes,
    badgeColor: brandTile,
    summary: "Predictable event-driven state management enforcing strict immutability, testability, and audit trails.",
    usedIn: "Meghna Life, MyKrishi, DMS, Edex-365, Nursery Management",
  },
  {
    id: "getx",
    name: "GetX",
    label: "GetX",
    category: "arch",
    brand: siGetx,
    badgeColor: brandTile,
    summary: "High-velocity reactive state management, micro-benchmarked dependency injection, and routing.",
    usedIn: "Presentini, Fouta App, TNP Beauty, BloodFit, Lyfuber",
  },
  {
    id: "clean-arch",
    name: "Clean Architecture",
    label: "Clean",
    category: "arch",
    icon: Layers,
    badgeColor: brandTile,
    summary: "Feature-first separation into Presentation, Domain (use cases), and Data layers for zero vendor lock-in.",
    usedIn: "Meghna Life, MyKrishi, DMS, Edex-365, Nursery Management",
  },
  {
    id: "socketio",
    name: "Socket.IO",
    label: "Socket",
    category: "backend",
    brand: siSocketdotio,
    badgeColor: brandTile,
    summary: "Real-time bidirectional event pipeline with heartbeat recovery and offline polling fallbacks.",
    usedIn: "Fouta App, BloodFit, Lyfuber",
  },
  {
    id: "maps",
    name: "Google Maps API",
    label: "Maps",
    category: "mobile",
    brand: siGooglemaps,
    badgeColor: brandTile,
    summary: "Live camera tracking, custom map styles, route polylines, and distance matrix pricing.",
    usedIn: "Lyfuber, Fouta App, DMS",
  },
  {
    id: "firebase",
    name: "Firebase Suite",
    label: "Firebase",
    category: "backend",
    brand: siFirebase,
    badgeColor: brandTile,
    summary: "FCM Push Notifications, Google Auth, Crashlytics, and real-time remote configuration.",
    usedIn: "Presentini, Fouta App, TNP Beauty, BloodFit, Lyfuber",
  },
  {
    id: "stripe",
    name: "Stripe & IAP",
    label: "Stripe",
    category: "payments",
    brand: siStripe,
    badgeColor: brandTile,
    summary: "Server-confirmed payment intents, 3D-Secure challenges, and App Store / Google Play In-App Purchases.",
    usedIn: "TNP Beauty, BloodFit, Lyfuber",
  },
  {
    id: "mfs",
    name: "bKash & Nagad",
    label: "bKash",
    category: "payments",
    logo: Bkash,
    badgeColor: brandTile,
    summary: "Direct mobile financial services gateway integration automating digital policy premiums in Bangladesh.",
    usedIn: "Meghna Life",
  },
  {
    id: "hive",
    name: "Hive / Local DB",
    label: "Hive",
    category: "arch",
    icon: Database,
    badgeColor: brandTile,
    summary: "Local storage for offline cart persistence and cached feeds.",
    usedIn: "Fouta App",
  },
  {
    id: "stores",
    name: "App Store & Play",
    label: "Stores",
    category: "tools",
    brand: [siAppstore, siGoogleplay],
    badgeColor: brandTile,
    summary: "End-to-end publishing lifecycle: provisioning profiles, TestFlight, bundle signing, and store compliance.",
    usedIn: "Presentini, Fouta App, TNP Beauty, BloodFit, Lyfuber, Meghna Life",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile Core" },
  { id: "arch", label: "Architecture" },
  { id: "backend", label: "Real-time & APIs" },
  { id: "payments", label: "Payments" },
  { id: "tools", label: "DevOps & Stores" },
] as const;

export function PhoneToolkit() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(techItems[0]);
  const filterScrollRef = useRef<HTMLDivElement>(null);
  const [filterEdges, setFilterEdges] = useState({ left: false, right: true });

  useEffect(() => {
    const el = filterScrollRef.current;
    if (!el) return;

    function updateEdges() {
      const node = filterScrollRef.current;
      if (!node) return;
      setFilterEdges({
        left: node.scrollLeft > 4,
        right: node.scrollLeft + node.clientWidth < node.scrollWidth - 4,
      });
    }

    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  const filtered = techItems.filter((item) =>
    activeFilter === "all" ? true : item.category === activeFilter
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      {/* Left Copy & Tech Detail Card */}
      <div className="space-y-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
            02 — THE TOOLKIT
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-2">
            The stack, <br />
            <em className="text-accent font-serif font-normal">in your pocket.</em>
          </h2>
          <p className="mt-4 text-base text-foreground/80 leading-relaxed">
            The tools evolve, but the goal stays the same: build dependable, offline-resilient, 60fps mobile applications that real people rely on every single day.
          </p>
        </div>

        {/* Selected Tech Inspector Box */}
        {selectedTech && (
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all">
            <div className="flex items-center justify-between border-b border-border/80 pb-4">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl font-display text-sm font-bold shadow-xs ${selectedTech.badgeColor}`}
                >
                  <TechGlyph item={selectedTech} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {selectedTech.name}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Verified Production Stack
                  </span>
                </div>
              </div>
              <span className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase text-foreground/70">
                {selectedTech.category}
              </span>
            </div>

            <p className="mt-4 text-sm text-foreground/85 leading-relaxed font-sans">
              {selectedTech.summary}
            </p>

            <div className="mt-4 rounded-xl border border-border/70 bg-surface/80 p-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1">
                Used in:
              </span>
              <span className="font-sans text-xs font-semibold text-primary">
                {selectedTech.usedIn}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Right Smartphone Screen Mockup */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-[340px] overflow-hidden rounded-[40px] border-4 border-foreground/15 bg-card p-4 shadow-elegant">
          {/* Phone Speaker & Camera Notch */}
          <div className="mx-auto mb-4 flex h-4 w-28 items-center justify-center gap-2 rounded-full bg-surface">
            <div className="h-1.5 w-8 rounded-full bg-border" />
            <div className="h-2 w-2 rounded-full bg-border" />
          </div>

          {/* Phone Status Bar */}
          <div className="mb-4 flex items-center justify-between px-3 text-[11px] font-mono text-muted-foreground">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span>●●●</span> <span>100%</span>
            </span>
          </div>

          {/* Interactive Screen Header */}
          <div className="mb-4 px-2">
            <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
              ENGINEERING TOOLKIT
            </span>
            <div className="font-display text-sm font-bold text-foreground">
              Tap any icon to inspect
            </div>
          </div>

          {/* Category filters scroll sideways inside the phone */}
          <div className="relative mb-4 min-w-0">
            <div
              ref={filterScrollRef}
              className="toolkit-scroll flex gap-1.5 overflow-x-auto pb-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={(e) => {
                    setActiveFilter(cat.id);
                    const scroller = filterScrollRef.current;
                    const chip = e.currentTarget;
                    if (!scroller) return;
                    const left = chip.offsetLeft - (scroller.clientWidth - chip.offsetWidth) / 2;
                    scroller.scrollTo({ left, behavior: "smooth" });
                  }}
                  className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold transition-all ${
                    activeFilter === cat.id
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "border border-border bg-surface text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            {filterEdges.left && (
              <div className="pointer-events-none absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-card to-transparent" />
            )}
            {filterEdges.right && (
              <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-card to-transparent" />
            )}
          </div>

          {/* App Icons Grid */}
          <div className="grid grid-cols-4 gap-3 py-2">
            {filtered.map((item) => {
              const isSelected = selectedTech?.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedTech(item)}
                  className="flex flex-col items-center gap-1.5 transition-transform hover:scale-105 active:scale-95 text-center group"
                >
                  <div
                    className={`relative flex h-12 w-12 items-center justify-center rounded-2xl shadow-xs transition-all ${
                      item.badgeColor
                    } ${
                      isSelected
                        ? "ring-2 ring-accent ring-offset-2 ring-offset-card scale-105"
                        : "opacity-90 group-hover:opacity-100"
                    }`}
                  >
                    <TechGlyph item={item} className="h-6 w-6" />
                  </div>
                  <span className="max-w-full text-center font-mono text-[10px] leading-tight text-foreground/80">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Phone Home Bar Indicator */}
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 rounded-full bg-border" />
          </div>
        </div>
      </div>
    </div>
  );
}

