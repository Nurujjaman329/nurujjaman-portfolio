import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/portfolio/Section";
import { Printer, Download, Mail, MapPin, Phone, Globe } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume / CV — MD. Nurujjaman" },
      {
        name: "description",
        content:
          "Full resume of MD. Nurujjaman, Flutter Developer. Skills, experience, education and certifications.",
      },
      { property: "og:title", content: "Resume — MD. Nurujjaman" },
      { property: "og:description", content: "Full CV of a Flutter Developer." },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <Section
      eyebrow="Curriculum Vitae"
      title="Resume."
      description="Download a PDF copy, or use your browser's print dialog for a live-formatted version."
    >
      <div className="mb-6 flex flex-col items-end gap-2 print:hidden">
        <div className="flex flex-wrap justify-end gap-3">
          <a
            href="/resume.pdf"
            download
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-spring hover:scale-105"
          >
            <Download className="h-4 w-4" /> Download PDF
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/60 px-4 py-2 text-sm font-semibold transition-smooth hover:bg-secondary"
          >
            <Printer className="h-4 w-4" /> Save as PDF
          </button>
        </div>
        <p className="text-xs text-muted-foreground">
          Download for a quick copy, or print to save a live-formatted PDF from this page.
        </p>
      </div>

      <article className="rounded-2xl border border-border/60 bg-card-gradient p-10 shadow-elegant">
        <header className="border-b border-border/60 pb-8">
          <h1 className="font-display text-4xl font-bold text-gradient">MD. Nurujjaman</h1>
          <p className="mt-1 text-lg text-foreground/80">Flutter Developer · Dhaka, Bangladesh</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-primary" /> mdnurujjaman329@gmail.com
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-primary" /> +880 1957 073942
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" /> Mohakhali, Dhaka
            </span>
            <a
              className="inline-flex items-center gap-1.5 hover:text-primary"
              href="https://www.linkedin.com/in/nurujjaman329/"
              target="_blank"
              rel="noreferrer"
            >
              <Globe className="h-4 w-4 text-primary" /> linkedin.com/in/nurujjaman329
            </a>
          </div>
        </header>

        <Block title="Career Objective">
          <p className="text-foreground/85 leading-relaxed">
            Flutter Developer with 3 years of experience shipping scalable, cross-platform mobile apps across
            social commerce, beauty, fitness, ride-sharing, agri-tech, and enterprise GovTech. Delivered 13+ production
            apps, with 7 live on the App Store and Google Play (Presentini, Fouta, TNP Beauty, BloodFit, Lyfuber, Ride Sharing App, Meghna). Proven expertise in Clean Architecture,
            Socket.IO real-time communication, Google Maps navigation, and multi-gateway payments (Stripe, bKash, Nagad, ShurjoPay).
          </p>
        </Block>

        <Block title="Experience">
          <Job
            role="Software Engineer (Flutter)"
            company="Sparktech Agency"
            period="Dec 2025 — Present"
            bullets={[
              "Architected and shipped production Flutter apps (Presentini, Fouta, TNP Beauty, BloodFit, Lyfuber) published on the App Store and Google Play.",
              "Engineered Socket.IO real-time pipelines for multi-role messaging, live activity feeds, and order tracking with reconnect handling.",
              "Implemented Google Maps and geolocation tracking with camera tracking, custom polylines, and proximity discovery.",
            ]}
          />
          <Job
            role="Software Developer (Flutter)"
            company="Synergy Interface Ltd."
            period="Oct 2023 — Nov 2025"
            bullets={[
              "Delivered 6+ production Flutter apps including Meghna Life Insurance, DMS (Nokia & Honor distribution), Nursery Management (GovTech), and Edex-365.",
              "Applied feature-first Clean Architecture across Presentation, Domain, and Data layers, accelerating onboarding and feature delivery.",
              "Integrated bKash, Nagad, and ShurjoPay payment gateways for automated digital premiums and investment transactions.",
            ]}
          />
        </Block>

        <Block title="Key Projects">
          <Job
            role="Presentini — City & Event Discovery"
            company="Sparktech Agency · App Store & Play Store"
            period=""
            bullets={[
              "City discovery platform surfacing location-aware events, exclusive specials, category filters, and Firebase push alerts.",
              "Shipped live on both App Store and Google Play with GetX reactive state management and geolocation discovery.",
            ]}
          />
          <Job
            role="Fouta App — Social Commerce Marketplace"
            company="Sparktech Agency · App Store & Play Store"
            period=""
            bullets={[
              "Multi-role commerce system (Customer, Seller, Driver, Admin) with real-time chat, live feeds, local cart caching, and end-to-end delivery tracking.",
              "Built real-time messaging, feeds and order updates using Socket.IO, GetX state management, and Hive local persistence.",
            ]}
          />
          <Job
            role="TNP Beauty — Beauty Marketplace"
            company="Sparktech Agency · App Store & Play Store"
            period=""
            bullets={[
              "4-role marketplace — Customer, Beautician, and Vendor apps plus an Admin web panel — with location-aware bookings.",
              "Stripe payments and geolocation discovery, shipped live on both the App Store and Google Play.",
            ]}
          />
          <Job
            role="BloodFit — AI Health & Nutrition"
            company="Sparktech Agency · Live on Google Play"
            period=""
            bullets={[
              "Blood-type personalized nutrition with AI generation, resilient Socket.IO + polling fetch, and 6-tier in-app subscriptions.",
              "Implemented multi-tier in-app purchases with Firebase Auth and GetX state management.",
            ]}
          />
          <Job
            role="Lyfuber — Ride Sharing"
            company="Sparktech Agency · Live on Google Play"
            period=""
            bullets={[
              "Passenger and driver apps with a ride state machine, live map tracking, and in-trip messaging.",
              "Google Directions routing and Stripe payments on the completed-ride path.",
            ]}
          />
          <Job
            role="Ride Sharing App — Shared Rides"
            company="Sparktech Agency · Live on Google Play"
            period=""
            bullets={[
              "Passenger and driver app with live tracking, in-trip chat, and wallet payments.",
              "Live on Google Play as A dedo, with Socket.IO location updates and Google Directions auto-pricing.",
            ]}
          />
          <Job
            role="Meghna Life Insurance — Advisor Mobile Suite"
            company="Synergy Interface Ltd. · Live on Google Play"
            period=""
            bullets={[
              "Enterprise mobile suite for a major national insurer, digitizing advisor workflows, premium collection, and digital receipts.",
              "Integrated bKash and Nagad for secure digital premium payments, replacing manual collection workflows.",
            ]}
          />
        </Block>

        <Block title="Skills">
          <div className="grid gap-3 sm:grid-cols-2">
            <SkillRow label="Languages" items={["Dart", "Platform Channels (Kotlin / Swift interop)", "C/C++"]} />
            <SkillRow label="Frameworks" items={["Flutter (iOS & Android)"]} />
            <SkillRow label="State Management" items={["Bloc", "GetX", "Provider", "Riverpod"]} />
            <SkillRow label="Architecture" items={["Clean Architecture (Feature-First)", "Repository Pattern", "SOLID"]} />
            <SkillRow label="Backend & APIs" items={["REST API", "Dio", "Firebase (Auth, FCM, Analytics)", "Socket.IO", "WebSockets"]} />
            <SkillRow
              label="Payments"
              items={["Stripe", "In-App Purchases", "bKash", "Nagad", "ShurjoPay"]}
            />
            <SkillRow
              label="Mobile Core"
              items={[
                "Google Maps & Directions API",
                "Geolocation",
                "Push Notifications",
                "Deep Linking",
                "Biometric Auth",
                "Hive",
              ]}
            />
            <SkillRow
              label="Tools & DevOps"
              items={[
                "Git",
                "GitHub",
                "App Store Connect",
                "Google Play Console",
                "Postman",
                "Figma",
                "VS Code",
              ]}
            />
          </div>
        </Block>

        <Block title="Education">
          <Job
            role="B.Sc. in Computer Science and Engineering"
            company="Dhaka City College (National University, Bangladesh)"
            period="Graduated 2023"
            bullets={[]}
          />
        </Block>

        <Block title="Professional Courses">
          <ul className="space-y-2 text-foreground/85">
            <li>
              • Mobile Application Development — Flutter · BASIS SEIP (Sep 2022 – Dec 2022) ·{" "}
              <a
                href="https://drive.google.com/file/d/1kibfkA2Zp4aV6Iq5OpP_sz6bsdx-phOD/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Verify
              </a>
            </li>
            <li>
              • Professional English Communication Skill · WSDA New Zealand (Nov 2022) ·{" "}
              <a
                href="https://drive.google.com/file/d/1kj_M8FgAZO76zJlQAXMFT1vmK5s7-t2n/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Verify
              </a>
            </li>
            <li>• CSE Fundamentals · Phitron</li>
          </ul>
        </Block>

        <Block title="Extra-Curricular Activities">
          <ul className="space-y-2 text-foreground/85">
            <li>• Participation in DCC CSE Digital Week 2020</li>
            <li>• Participation in DCC Inter Dept. Programming Contest 2019</li>
          </ul>
        </Block>
      </article>
    </Section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-primary">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Job({
  role,
  company,
  period,
  bullets,
}: {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-lg font-semibold">{role}</h3>
        {period && <span className="font-mono text-xs text-muted-foreground">{period}</span>}
      </div>
      <p className="text-sm text-muted-foreground">{company}</p>
      {bullets.length > 0 && (
        <ul className="mt-2 space-y-1 text-sm text-foreground/85">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SkillRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 text-foreground/90">{items.join(" · ")}</p>
    </div>
  );
}
