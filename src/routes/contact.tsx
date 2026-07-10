import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { T, useLang } from "@/components/LanguageProvider";
import { useState } from "react";
import { Instagram, Facebook } from "lucide-react";

const NoteIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 1 24 22" className={className} fill="currentColor" aria-hidden="true">
    <text x="50%" y="55%" dominantBaseline="central" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="20">n</text>
  </svg>
);

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Nene Akagi | お問い合わせ" },
      { name: "description", content: "朱樹音々（Nene Akagi）への展示・ワークショップ・講演・取材・共同研究のご依頼、企業研修プログラムのご相談はこちらから。" },
      { property: "og:title", content: "Contact | Nene Akagi | お問い合わせ" },
      { property: "og:description", content: "For exhibitions, workshops, lectures and collaborative research with Nene Akagi." },
      { property: "og:url", content: "https://neneakagi.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://neneakagi.lovable.app/contact" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://neneakagi.lovable.app/" },
          { "@type": "ListItem", position: 2, name: "Contact", item: "https://neneakagi.lovable.app/contact" },
        ],
      }),
    }],
  }),
  component: () => <SiteLayout><Contact /></SiteLayout>,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const { lang } = useLang();
  const subjects = lang === "ja"
    ? ["個人セッションについて", "企業研修・人事プログラム", "展示・キュレーション", "講演・取材のご依頼", "共同研究のご相談", "その他"]
    : ["Personal session", "Corporate / HR program", "Exhibition & curation", "Lecture / press inquiry", "Collaborative research", "Other"];
  return (
    <section className="max-w-[1300px] mx-auto px-6 lg:px-12 pt-20 pb-32 grid md:grid-cols-12 gap-12 lg:gap-20">
      <div className="md:col-span-5">
        <p className="font-sans text-[11px] text-ember">CONTACT</p>
        <h1 className="font-display text-5xl md:text-6xl mt-6 leading-[1.1]">
          Get in<br/><em className="italic">touch.</em>
        </h1>
        <div className="hairline w-12 my-10" />
        <div className="text-[15px] leading-loose text-foreground/85 space-y-4">
          <T
            ja={<>
              <p>展示・ワークショップ・講演などのご相談を承っております。</p>
              <p>お気軽にご連絡ください。</p>
            </>}
            en={<>
              <p>I welcome inquiries regarding exhibitions, workshops, and lectures.</p>
              <p>Please feel free to contact me.</p>
            </>}
          />
        </div>

        <div className="mt-14 space-y-7 text-sm">
          <div>
            <p className="font-sans text-[10px] text-muted-foreground">EMAIL</p>
            <a href="mailto:neneakagi@gmail.com" className="mt-2 inline-block hover:text-ember transition-colors">neneakagi@gmail.com</a>
          </div>
          <div>
            <p className="font-sans text-[10px] text-muted-foreground">SNS</p>
            <div className="mt-3 flex items-center gap-5">
              <a href="https://www.instagram.com/neneakagi/" target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="text-foreground/70 hover:text-ember transition-all duration-300 hover:-translate-y-0.5">
                <Instagram className="w-[18px] h-[18px]" strokeWidth={1.2} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61589334376047" target="_blank" rel="noreferrer noopener" aria-label="Facebook" className="text-foreground/70 hover:text-ember transition-all duration-300 hover:-translate-y-0.5">
                <Facebook className="w-[18px] h-[18px]" strokeWidth={1.2} />
              </a>
              <a href="https://note.com/neneakagi" target="_blank" rel="noreferrer noopener" aria-label="Note" className="text-foreground/70 hover:text-ember transition-all duration-300 hover:-translate-y-0.5">
                <NoteIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
          <div>
            <p className="font-sans text-[10px] text-muted-foreground">SUPPORT</p>
            <a
              href="https://www.patreon.com/c/NeneAkagi"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 inline-flex items-center gap-2 hover:text-ember transition-colors"
            >
              <T ja="Patreon でサポートする" en="Support on Patreon" />
            </a>
          </div>
        </div>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="md:col-span-7"
      >
        {sent ? (
          <div className="border border-border bg-secondary/40 p-12 text-center">
            <p className="font-display italic text-3xl">Thank you.</p>
            <p className="mt-4 text-sm text-muted-foreground">
              <T ja="お便りを受け取りました。改めてご連絡いたします。" en="Your message has been received. I'll reply soon." />
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <Field jaLabel="お名前" enLabel="Name" tag="NAME">
                <input required className="w-full bg-transparent border-b border-foreground/40 py-3 focus:outline-none focus:border-ember transition-colors" />
              </Field>
              <Field jaLabel="所属（任意）" enLabel="Company (optional)" tag="COMPANY">
                <input className="w-full bg-transparent border-b border-foreground/40 py-3 focus:outline-none focus:border-ember transition-colors" />
              </Field>
            </div>
            <Field jaLabel="メールアドレス" enLabel="Email" tag="EMAIL">
              <input required type="email" className="w-full bg-transparent border-b border-foreground/40 py-3 focus:outline-none focus:border-ember transition-colors" />
            </Field>
            <Field jaLabel="ご用件" enLabel="Subject" tag="SUBJECT">
              <select required className="w-full bg-transparent border-b border-foreground/40 py-3 focus:outline-none focus:border-ember transition-colors">
                {subjects.map(s => <option key={s}>{s}</option>)}
              </select>
            </Field>
            <Field jaLabel="メッセージ" enLabel="Message" tag="MESSAGE">
              <textarea required rows={6} className="w-full bg-transparent border-b border-foreground/40 py-3 focus:outline-none focus:border-ember transition-colors resize-none" />
            </Field>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 border border-foreground px-10 py-4 font-sans text-[11px] hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              SEND MESSAGE
              <span className="transition-transform group-hover:translate-x-2">→</span>
            </button>
          </div>
        )}
      </form>
    </section>
  );
}

function Field({ jaLabel, enLabel, tag, children }: { jaLabel: string; enLabel: string; tag: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between mb-2">
        <span className="text-sm"><T ja={jaLabel} en={enLabel} /></span>
        <span className="font-sans text-[10px] text-muted-foreground">{tag}</span>
      </span>
      {children}
    </label>
  );
}
