import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { AppShowcase } from "@/components/portfolio/AppShowcase";
import { AgencyBadge } from "@/components/portfolio/AgencyBadge";
import { PhoneToolkit } from "@/components/portfolio/PhoneToolkit";
import { experienceStat, experienceText } from "@/data/profile";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => {
    const description = `Flutter Developer with ${experienceText()} of experience building cross-platform mobile apps with clean architecture, Socket.IO, Google Maps and secure payments.`;
    return {
      meta: [
        { title: SITE_NAME },
        { name: "description", content: description },
        { property: "og:title", content: SITE_NAME },
        {
          property: "og:description",
          content: `Flutter Developer · ${experienceText()} · Cross-platform mobile apps.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: SITE_URL },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: SITE_NAME },
        { name: "twitter:image", content: OG_IMAGE },
      ],
      links: [{ rel: "canonical", href: SITE_URL }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "MD. Nurujjaman",
            jobTitle: "Flutter Developer",
            url: SITE_URL,
            email: "mdnurujjaman329@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dhaka",
              addressCountry: "BD",
            },
            sameAs: [
              "https://github.com/Nurujjaman329",
              "https://www.linkedin.com/in/nurujjaman329/",
            ],
            knowsAbout: [
              "Flutter",
              "Dart",
              "Mobile Development",
              "Clean Architecture",
              "Firebase",
              "Socket.IO",
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL,
            description,
          }),
        },
      ],
    };
  },
  component: Index,
});

const stats = [
  { value: experienceStat(), label: "Years experience" },
  { value: "13+", label: "Production apps" },
  { value: "2", label: "Companies" },
  { value: "5+", label: "Payment gateways" },
];

const stack = [
  "Flutter",
  "Dart",
  "Bloc",
  "GetX",
  "Riverpod",
  "Provider",
  "Socket.IO",
  "Google Maps",
  "Firebase",
  "Stripe",
  "REST APIs",
  "Clean Architecture",
  "Git",
  "Figma",
  "Postman",
];

const highlights = [
  {
    title: "Cross-Platform Apps",
    desc: "Shipped 13+ Flutter apps — 6 live on the App Store and Google Play — from social commerce and beauty marketplaces to ride-sharing and government platforms.",
  },
  {
    title: "Real-Time & Maps",
    desc: "Socket.IO for live chat and feeds, Google Directions API for routing and auto-pricing, deep linking and push notifications integrated end-to-end.",
  },
  {
    title: "Secure Payments",
    desc: "Production payment integrations with Stripe, ShurjoPay, bKash and Nagad across fintech, insurance and e-commerce products.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-hero border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="animate-fade-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary font-semibold shadow-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              MD. Nurujjaman · Software Engineer (Mobile) · Dhaka
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-foreground">
              Software <br />
              Engineer <br />
              <em className="text-accent font-serif font-normal">— Mobile.</em>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-foreground/85 leading-relaxed">
              Big ideas. Small screens. <strong className="text-foreground font-semibold">Great experiences.</strong>
              <br />
              From Clean Architecture to the App Store — shipping scalable iOS &amp; Android apps across social commerce, fintech payments, enterprise logistics for <span className="font-semibold text-foreground">Nokia &amp; Honor</span>, and national GovTech.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold text-primary-foreground shadow-sm transition-spring hover:scale-105 hover:brightness-110"
              >
                Explore work <span>→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-5 py-3 text-xs font-semibold text-foreground shadow-xs transition-smooth hover:bg-muted/70"
              >
                Let’s talk ↗
              </a>
              <a
                href="/resume.pdf"
                download="MD_Nurujjaman_Flutter_Developer.pdf"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-elevated px-5 py-3 text-xs font-semibold text-foreground shadow-xs transition-smooth hover:border-primary/40 hover:bg-muted/60"
              >
                <Download className="h-3.5 w-3.5 text-primary" /> Résumé ↓
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-muted-foreground">
              <a
                href="https://github.com/Nurujjaman329"
                target="_blank"
                rel="noreferrer"
                className="transition-smooth hover:text-foreground"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nurujjaman329/"
                target="_blank"
                rel="noreferrer"
                className="transition-smooth hover:text-foreground"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:mdnurujjaman329@gmail.com"
                className="transition-smooth hover:text-foreground"
                aria-label="Email Address"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up flex justify-center lg:justify-end" style={{ animationDelay: "0.15s" }}>
            <AgencyBadge />
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24 border-b border-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              03 — SELECTED WORK
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-2">
              Things I’ve <em className="text-accent font-serif font-normal">built.</em>
            </h2>
            <p className="mt-3 text-base text-foreground/80 max-w-xl">
              From construction &amp; hardware distribution to everyday consumer feeds. 13+ production apps — 6 live on the App Store and Google Play.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-muted/70 transition-colors shadow-xs"
          >
            All 13+ projects <span>→</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1: Presentini */}
          <div className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-spring hover:-translate-y-1 hover:border-primary/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold">
                  01 / FLAGSHIP · APP STORE &amp; PLAY STORE
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">Sparktech · 2026</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Presentini
              </h3>
              <p className="font-sans text-sm text-foreground/80 mt-2.5 leading-relaxed">
                City &amp; event discovery platform surfacing curated local experiences, location-aware filters, and push alerts. Live on iOS and Android.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px] text-muted-foreground">
                <span className="rounded-md border border-border bg-surface px-2 py-0.5">Flutter</span>
                <span className="rounded-md border border-border bg-surface px-2 py-0.5">Bloc</span>
                <span className="rounded-md border border-border bg-surface px-2 py-0.5">Geolocation</span>
                <span className="rounded-md border border-border bg-surface px-2 py-0.5">Firebase</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between text-xs">
              <Link to="/projects/presentini" className="font-semibold text-primary hover:underline inline-flex items-center gap-1">
                Project story <span>→</span>
              </Link>
              <div className="flex items-center gap-3 font-mono text-[11px]">
                <a href="https://apps.apple.com/us/app/presentini/id6770782530" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground underline">App Store ↗</a>
                <a href="https://play.google.com/store/apps/details?id=com.savvymyles.involved.involved" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground underline">Play Store ↗</a>
              </div>
            </div>
          </div>

          {/* Card 2: Fouta App */}
          <div className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-spring hover:-translate-y-1 hover:border-primary/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-bold">
                  02 / 4-ROLE SOCIAL COMMERCE
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">Sparktech · 2026</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Fouta App
              </h3>
              <p className="font-sans text-sm text-foreground/80 mt-2.5 leading-relaxed">
                4-role system (User, Seller, Driver, Admin) with Socket.IO real-time feeds, live chat, local cart caching, and end-to-end checkout &amp; delivery tracking.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px] text-muted-foreground">
                <span className="rounded-md border border-border bg-surface px-2 py-0.5">Socket.IO</span>
                <span className="rounded-md border border-border bg-surface px-2 py-0.5">Hive</span>
                <span className="rounded-md border border-border bg-surface px-2 py-0.5">REST API</span>
                <span className="rounded-md border border-border bg-surface px-2 py-0.5">Google Maps</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between text-xs">
              <Link to="/projects/fouta-app" className="font-semibold text-primary hover:underline inline-flex items-center gap-1">
                Project story <span>→</span>
              </Link>
              <div className="flex items-center gap-3 font-mono text-[11px]">
                <a href="https://apps.apple.com/us/app/fouta-app/id6749207732" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground underline">App Store ↗</a>
                <a href="https://play.google.com/store/apps/details?id=com.fouta.foutaapp" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground underline">Play Store ↗</a>
              </div>
            </div>
          </div>

          {/* Card 3: DMS for Nokia & Honor */}
          <div className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-spring hover:-translate-y-1 hover:border-primary/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-800 font-bold">
                  03 / ENTERPRISE LOGISTICS · NOKIA &amp; HONOR
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">Synergy Interface</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Distributor Management System (DMS)
              </h3>
              <p className="font-sans text-sm text-foreground/80 mt-2.5 leading-relaxed">
                Supply-chain and sales-rep tracking for official Nokia and Honor device distribution. Background GPS tracking, offline sync, and barcode scanning.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px] text-muted-foreground">
                <span className="rounded-md border border-border bg-surface px-2 py-0.5">Background GPS</span>
                <span className="rounded-md border border-border bg-surface px-2 py-0.5">Barcode Scanner</span>
                <span className="rounded-md border border-border bg-surface px-2 py-0.5">Offline Sync</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between text-xs">
              <Link to="/projects/distributor-management-system" className="font-semibold text-primary hover:underline inline-flex items-center gap-1">
                Project story <span>→</span>
              </Link>
              <span className="font-mono text-[11px] text-muted-foreground">Enterprise Production</span>
            </div>
          </div>

          {/* Card 4: BloodFit */}
          <div className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-spring hover:-translate-y-1 hover:border-primary/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold">
                  04 / AI HEALTH &amp; IN-APP PURCHASES
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">Sparktech Agency</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                BloodFit
              </h3>
              <p className="font-sans text-sm text-foreground/80 mt-2.5 leading-relaxed">
                Blood-type personalized nutrition with AI generation, resilient Socket.IO with polling fallback, and 6-tier in-app subscription purchases on Google Play.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px] text-muted-foreground">
                <span className="rounded-md border border-border bg-surface px-2 py-0.5">In-App Purchases</span>
                <span className="rounded-md border border-border bg-surface px-2 py-0.5">Socket.IO</span>
                <span className="rounded-md border border-border bg-surface px-2 py-0.5">GetX</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between text-xs">
              <Link to="/projects/blood-fit" className="font-semibold text-primary hover:underline inline-flex items-center gap-1">
                Project story <span>→</span>
              </Link>
              <a href="https://play.google.com/store/apps/details?id=com.bloodfitltd.bloodfit" target="_blank" rel="noreferrer" className="font-mono text-[11px] text-muted-foreground hover:text-foreground underline">
                Play Store ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TOOLKIT */}
      <section id="toolkit" className="mx-auto max-w-6xl px-6 py-20 border-b border-border">
        <PhoneToolkit />
      </section>

      {/* 04 — THE JOURNEY */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24 border-b border-border">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
            04 — THE JOURNEY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-2">
            Experience that <em className="text-accent font-serif font-normal">moves things forward.</em>
          </h2>
          <p className="mt-3 text-base text-foreground/80 max-w-xl">
            From architecture to store releases — 3 years shipping across 2 agencies and national institutions.
          </p>
        </div>

        <div className="space-y-6">
          {/* Role 1: Sparktech */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/80 pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-bold">
                  DEC 2025 — PRESENT
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-1">
                  Software Engineer (Flutter)
                </h3>
                <p className="font-sans text-sm font-semibold text-primary">
                  Sparktech Agency · Dhaka, Bangladesh
                </p>
              </div>
              <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted-foreground w-fit">
                Current Role
              </span>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85 leading-relaxed font-sans">
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-1">•</span>
                <span>Architected and published production Flutter apps (<strong>Presentini</strong>, <strong>Fouta App</strong>, <strong>BloodFit</strong>) directly to Apple App Store and Google Play Console.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-1">•</span>
                <span>Engineered Socket.IO real-time event pipelines for 4-role messaging, live activity feeds, and order tracking with automated reconnect backoff.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-1">•</span>
                <span>Owned Google Maps and geolocation tracking with camera tracking, custom polylines, and proximity discovery.</span>
              </li>
            </ul>
          </div>

          {/* Role 2: Synergy Interface */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/80 pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                  OCT 2023 — NOV 2025
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-1">
                  Software Developer (Flutter)
                </h3>
                <p className="font-sans text-sm font-semibold text-primary">
                  Synergy Interface Ltd. · Dhaka, Bangladesh
                </p>
              </div>
              <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted-foreground w-fit">
                2 Years Tenure
              </span>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85 leading-relaxed font-sans">
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-1">•</span>
                <span>Delivered 6+ production-grade Flutter apps including <strong>Meghna Life Insurance</strong>, <strong>DMS (Nokia & Honor distribution)</strong>, <strong>Nursery Management (GovTech)</strong>, and <strong>Edex-365</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-1">•</span>
                <span>Enforced feature-first Clean Architecture across Presentation, Domain, and Data layers, accelerating onboarding and feature delivery.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-1">•</span>
                <span>Integrated bKash, Nagad, and ShurjoPay payment gateways for automated digital premiums and investment transactions.</span>
              </li>
            </ul>
          </div>

          {/* Education Mini Card */}
          <div className="rounded-2xl border border-border bg-surface/80 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                ACADEMIC FOUNDATION
              </span>
              <h4 className="font-display text-base font-bold text-foreground mt-0.5">
                B.Sc. in Computer Science and Engineering
              </h4>
              <p className="font-sans text-xs text-muted-foreground">
                Dhaka City College, National University, Bangladesh · Graduated 2023
              </p>
            </div>
            <span className="rounded-md border border-border bg-card px-2.5 py-1 text-primary font-mono text-xs font-semibold w-fit">
              BASIS SEIP Flutter Certified
            </span>
          </div>
        </div>
      </section>

      {/* PROUD MOMENTS */}
      <section id="moments" className="mx-auto max-w-6xl px-6 py-24 border-b border-border">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
            05 — PROUD MOMENTS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-2">
            Small steps. <em className="text-accent font-serif font-normal">Meaningful milestones.</em>
          </h2>
          <p className="mt-3 text-base text-foreground/80 max-w-xl">
            Real software delivered to real users. Shipped across commerce, fintech, and enterprise hardware distribution.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-10">
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
            <div className="font-display text-4xl font-bold text-primary">{experienceStat()}</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Years Experience
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
            <div className="font-display text-4xl font-bold text-accent">13+</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Production Apps
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
            <div className="font-display text-4xl font-bold text-emerald-800">6 Live</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Store Releases
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
            <div className="font-display text-4xl font-bold text-foreground">2</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Agencies Shipped At
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-card flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold">
                COMMERCIAL SCALE
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mt-2">
                Trusted with Production
              </h3>
              <p className="font-sans text-sm text-foreground/80 mt-2 leading-relaxed">
                Sole mobile engineer across key client deliverables at Sparktech Agency, publishing Presentini, Fouta, and BloodFit directly to App Store Connect and Google Play Console.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-card flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-bold">
                GLOBAL BRANDS
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mt-2">
                Nokia &amp; Honor Logistics
              </h3>
              <p className="font-sans text-sm text-foreground/80 mt-2 leading-relaxed">
                Architected the Distributor Management System (DMS) for sales reps handling official Nokia and Honor device distributions with background location tracking and barcode scanning.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-card flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-800 font-bold">
                FINTECH &amp; GOVTECH
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mt-2">
                Automated Premium Collections
              </h3>
              <p className="font-sans text-sm text-foreground/80 mt-2 leading-relaxed">
                Replaced manual cash collection with secure digital bKash and Nagad mobile payment integrations for Meghna Life Insurance and national forestry platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — CONTACT CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-16 text-center shadow-elegant relative overflow-hidden">
          <div className="mx-auto max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              06 — YOUR NEXT BIG IDEA
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-3">
              Let’s build <em className="text-accent font-serif font-normal">something great.</em>
            </h2>
            <p className="mt-4 text-base text-foreground/80 leading-relaxed">
              Have an idea, an on-demand app, or an engineering team looking for a dependable Flutter engineer? Let’s talk.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold text-accent-foreground shadow-sm transition-spring hover:scale-105 hover:brightness-105"
              >
                Send a message <span>→</span>
              </Link>
              <a
                href="mailto:mdnurujjaman329@gmail.com"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-5 py-3 text-xs font-semibold text-foreground hover:bg-muted/70 transition-colors"
              >
                mdnurujjaman329@gmail.com ↗
              </a>
              <a
                href="/resume.pdf"
                download="MD_Nurujjaman_Flutter_Developer.pdf"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-elevated px-5 py-3 text-xs font-semibold text-foreground hover:border-primary/40 transition-colors"
              >
                <Download className="h-3.5 w-3.5 text-primary" /> Résumé ↓
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
