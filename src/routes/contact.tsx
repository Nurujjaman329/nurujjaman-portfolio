import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Section } from "@/components/portfolio/Section";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    // Vite inlines this at build time — a missing value means the deploy
    // environment lacks the var, not that the request failed.
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("VITE_WEB3FORMS_ACCESS_KEY is not set — add it to the build environment.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const form = new FormData(formRef.current);
      form.append("access_key", accessKey);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("sent");
        trackEvent("Contact Form", { status: "sent" });
        formRef.current.reset();
      } else {
        setStatus("error");
        trackEvent("Contact Form", { status: "error" });
      }
    } catch {
      setStatus("error");
      trackEvent("Contact Form", { status: "error" });
    }
  }

  return (
    <Section
      eyebrow="06 — Contact"
      title="Let’s build something."
      description="Open to Mobile / Flutter roles, freelance engineering, and collaborations on high-impact products."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <ContactItem
            icon={Mail}
            label="Email"
            value="mdnurujjaman329@gmail.com"
            href="mailto:mdnurujjaman329@gmail.com"
          />
          <ContactItem
            icon={Phone}
            label="Phone"
            value="+880 1957 073942"
            href="tel:+8801957073942"
          />
          <ContactItem icon={MapPin} label="Based in" value="Mohakhali, Dhaka, Bangladesh" />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
              Elsewhere
            </p>
            <div className="flex gap-3">
              <Social icon={Github} href="https://github.com/Nurujjaman329" />
              <Social icon={Linkedin} href="https://www.linkedin.com/in/nurujjaman329/" />
            </div>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 shadow-xs">
            <p className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">Current Availability</p>
            <p className="mt-2 text-sm text-foreground/85 leading-relaxed">
              Currently working at <span className="font-semibold text-foreground">Sparktech Agency</span> — open to new full-time engineering roles and high-impact freelance projects.
            </p>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-8 shadow-card space-y-5"
        >
          <Field label="Name">
            <input
              required
              name="name"
              type="text"
              className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Your name"
            />
          </Field>
          <Field label="Email">
            <input
              required
              name="email"
              type="email"
              className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="you@company.com"
            />
          </Field>
          <Field label="Subject">
            <input
              name="title"
              type="text"
              className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Mobile engineering opportunity"
            />
          </Field>
          <Field label="Message">
            <textarea
              required
              name="message"
              rows={5}
              className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Tell me about your product, team, or challenge..."
            />
          </Field>
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-spring hover:scale-[1.01] hover:brightness-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Send className="h-4 w-4" />
            {status === "sending" ? "Sending…" : status === "sent" ? "Message sent!" : "Send message"}
          </button>
          {status === "sent" && (
            <p className="text-sm text-primary text-center font-medium animate-fade-up">
              ✓ Thanks — I’ll respond within 24–48 hours.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-destructive text-center font-medium">
              Please email directly at mdnurujjaman329@gmail.com
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Comp = href ? "a" : "div";
  return (
    <Comp
      {...(href ? { href } : {})}
      className="flex items-start gap-4 rounded-xl border border-border/60 bg-card-gradient p-5 transition-spring hover:shadow-glow"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
        <Icon className="h-5 w-5 text-primary-foreground" />
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-0.5 font-medium">{value}</p>
      </div>
    </Comp>
  );
}

function Social({ icon: Icon, href }: { icon: typeof Github; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/60 transition-spring hover:scale-110 hover:border-primary hover:text-primary"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}
