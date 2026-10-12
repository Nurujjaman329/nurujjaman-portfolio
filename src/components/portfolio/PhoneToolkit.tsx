import { useState } from "react";
import { Smartphone, Zap, CheckCircle2, ChevronRight, Layers, CreditCard, Cloud, Settings, X } from "lucide-react";

interface TechItem {
  id: string;
  name: string;
  category: "mobile" | "arch" | "backend" | "payments" | "tools";
  iconText: string;
  badgeColor: string;
  summary: string;
  usedIn: string;
}

const techItems: TechItem[] = [
  {
    id: "flutter",
    name: "Flutter",
    category: "mobile",
    iconText: "F",
    badgeColor: "bg-emerald-800 text-white",
    summary: "Primary cross-platform framework building high-performance 60fps applications for iOS and Android.",
    usedIn: "Presentini, Fouta App, TNP Beauty, BloodFit, Lyfuber, Meghna Life",
  },
  {
    id: "dart",
    name: "Dart",
    category: "mobile",
    iconText: "D",
    badgeColor: "bg-teal-700 text-white",
    summary: "Strong null-safety, asynchronous streams, custom isolates, and platform channel interop.",
    usedIn: "Every production app",
  },
  {
    id: "bloc",
    name: "Bloc / Cubit",
    category: "arch",
    iconText: "B",
    badgeColor: "bg-blue-800 text-white",
    summary: "Predictable event-driven state management enforcing strict immutability, testability, and audit trails.",
    usedIn: "Meghna Life, MyKrishi, DMS, Edex-365, Nursery Management",
  },
  {
    id: "getx",
    name: "GetX",
    category: "arch",
    iconText: "G",
    badgeColor: "bg-purple-800 text-white",
    summary: "High-velocity reactive state management, micro-benchmarked dependency injection, and routing.",
    usedIn: "Presentini, Fouta App, TNP Beauty, BloodFit, Lyfuber",
  },
  {
    id: "clean-arch",
    name: "Clean Architecture",
    category: "arch",
    iconText: "CA",
    badgeColor: "bg-amber-800 text-white",
    summary: "Feature-first separation into Presentation, Domain (use cases), and Data layers for zero vendor lock-in.",
    usedIn: "Meghna Life, MyKrishi, DMS, Edex-365, Nursery Management",
  },
  {
    id: "socketio",
    name: "Socket.IO",
    category: "backend",
    iconText: "SI",
    badgeColor: "bg-slate-800 text-white",
    summary: "Real-time bidirectional event pipeline with heartbeat recovery and offline polling fallbacks.",
    usedIn: "Fouta App, BloodFit, Lyfuber",
  },
  {
    id: "maps",
    name: "Google Maps API",
    category: "mobile",
    iconText: "GM",
    badgeColor: "bg-red-800 text-white",
    summary: "Live camera tracking, custom map styles, route polylines, and distance matrix pricing.",
    usedIn: "Lyfuber, Fouta App, DMS",
  },
  {
    id: "firebase",
    name: "Firebase Suite",
    category: "backend",
    iconText: "FB",
    badgeColor: "bg-amber-700 text-white",
    summary: "FCM Push Notifications, Google Auth, Crashlytics, and real-time remote configuration.",
    usedIn: "Presentini, Fouta App, TNP Beauty, BloodFit, Lyfuber",
  },
  {
    id: "stripe",
    name: "Stripe & IAP",
    category: "payments",
    iconText: "S$",
    badgeColor: "bg-indigo-700 text-white",
    summary: "Server-confirmed payment intents, 3D-Secure challenges, and App Store / Google Play In-App Purchases.",
    usedIn: "TNP Beauty, BloodFit, Lyfuber",
  },
  {
    id: "mfs",
    name: "bKash & Nagad",
    category: "payments",
    iconText: "৳",
    badgeColor: "bg-pink-800 text-white",
    summary: "Direct mobile financial services gateway integration automating digital policy premiums in Bangladesh.",
    usedIn: "Meghna Life",
  },
  {
    id: "hive",
    name: "Hive / Local DB",
    category: "arch",
    iconText: "H",
    badgeColor: "bg-yellow-800 text-white",
    summary: "Local storage for offline cart persistence and cached feeds.",
    usedIn: "Fouta App",
  },
  {
    id: "stores",
    name: "App Store & Play",
    category: "tools",
    iconText: "ASC",
    badgeColor: "bg-zinc-800 text-white",
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
                  {selectedTech.iconText}
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
        <div className="relative w-full max-w-[340px] rounded-[40px] border-4 border-foreground/15 bg-card p-4 shadow-elegant">
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

          {/* Category Filter Pills on Phone Screen */}
          <div className="mb-4 flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`whitespace-nowrap rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold transition-all ${
                  activeFilter === cat.id
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "border border-border bg-surface text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
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
                    <span className="font-display text-xs font-bold">{item.iconText}</span>
                  </div>
                  <span className="font-mono text-[10px] leading-tight text-foreground/80 line-clamp-1">
                    {item.name}
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

