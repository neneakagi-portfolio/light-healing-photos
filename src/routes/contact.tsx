import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — お問い合わせ / Hikari Mori" },
      { name: "description", content: "セッションのご予約、講演・取材依頼、研究に関するお問い合わせ。" },
      { property: "og:title", content: "Contact — Hikari Mori" },
      { property: "og:description", content: "フォトセラピーセッションや講演のご依頼はこちらから。" },
    ],
  }),
  component: () => <SiteLayout><Contact /></SiteLayout>,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-32 grid md:grid-cols-12 gap-16">
      <div className="md:col-span-5">
        <p className="font-jp text-xs tracking-[0.4em] text-clay">CONTACT</p>
        <h1 className="font-display text-6xl md:text-7xl mt-6 leading-none">お便り</h1>
        <div className="hairline w-16 my-10" />
        <p className="font-jp leading-loose text-foreground/80">
          セッションのご予約、講演・取材のご依頼、研究のご相談など、
          どんな小さなお便りも歓迎いたします。<br/>
          通常3営業日以内にお返事いたします。
        </p>
        <div className="mt-12 space-y-4 text-sm">
          <div>
            <p className="font-jp text-xs tracking-[0.3em] text-muted-foreground">EMAIL</p>
            <p className="mt-1">studio@hikari-mori.jp</p>
          </div>
          <div>
            <p className="font-jp text-xs tracking-[0.3em] text-muted-foreground">STUDIO</p>
            <p className="mt-1 font-jp">京都市左京区 銀閣寺前 3-12<br/>白川光ハウス 2F</p>
          </div>
        </div>
      </div>
      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="md:col-span-7 space-y-8"
      >
        {sent ? (
          <div className="border border-clay/30 bg-secondary/40 p-12 text-center">
            <p className="font-display italic text-3xl text-clay">ありがとうございます。</p>
            <p className="font-jp mt-4 text-sm text-muted-foreground">お便りを受け取りました。光が届きますように。</p>
          </div>
        ) : (
          <>
            <Field label="お名前" jp="NAME"><input required className="w-full bg-transparent border-b border-foreground/40 py-3 focus:outline-none focus:border-clay transition-colors" /></Field>
            <Field label="メールアドレス" jp="EMAIL"><input required type="email" className="w-full bg-transparent border-b border-foreground/40 py-3 focus:outline-none focus:border-clay transition-colors" /></Field>
            <Field label="ご用件" jp="SUBJECT">
              <select className="w-full bg-transparent border-b border-foreground/40 py-3 focus:outline-none focus:border-clay transition-colors font-jp">
                <option>セッション予約</option>
                <option>ワークショップ参加</option>
                <option>講演・取材のご依頼</option>
                <option>研究について</option>
                <option>その他</option>
              </select>
            </Field>
            <Field label="メッセージ" jp="MESSAGE">
              <textarea required rows={6} className="w-full bg-transparent border-b border-foreground/40 py-3 focus:outline-none focus:border-clay transition-colors resize-none" />
            </Field>
            <button type="submit" className="group inline-flex items-center gap-3 border border-foreground px-10 py-4 text-xs tracking-[0.4em] hover:bg-foreground hover:text-background transition-colors">
              SEND <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </>
        )}
      </form>
    </section>
  );
}

function Field({ label, jp, children }: { label: string; jp: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between mb-2">
        <span className="font-jp text-sm">{label}</span>
        <span className="font-display text-[10px] tracking-[0.4em] text-muted-foreground">{jp}</span>
      </span>
      {children}
    </label>
  );
}
