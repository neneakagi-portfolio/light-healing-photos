import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — お問い合わせ / NENE AKAGI" },
      { name: "description", content: "展示・ワークショップ・講演・取材・共同研究のご依頼、企業研修プログラムのご相談はこちらから。" },
      { property: "og:title", content: "Contact — NENE AKAGI" },
      { property: "og:description", content: "ご依頼・ご相談を承ります。" },
    ],
  }),
  component: () => <SiteLayout><Contact /></SiteLayout>,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="max-w-[1300px] mx-auto px-6 lg:px-12 pt-20 pb-32 grid md:grid-cols-12 gap-12 lg:gap-20">
      <div className="md:col-span-5">
        <p className="font-sans text-[11px] text-ember">CONTACT</p>
        <h1 className="font-display text-5xl md:text-6xl mt-6 leading-[1.1]">
          Get in<br/><em className="italic">touch.</em>
        </h1>
        <div className="hairline w-12 my-10" />
        <p className="font-jp text-[15px] leading-loose text-foreground/85">
          展示・ワークショップ・講演・取材・共同研究のご依頼、
          企業研修プログラムのご相談を承ります。<br/>
          通常3〜5営業日以内にご返信いたします。
        </p>

        <div className="mt-14 space-y-7 text-sm">
          <div>
            <p className="font-sans text-[10px] text-muted-foreground">EMAIL</p>
            <p className="mt-2">studio@akaginene.com</p>
          </div>
          <div>
            <p className="font-sans text-[10px] text-muted-foreground">FOR PRESS</p>
            <p className="mt-2">press@akaginene.com</p>
          </div>
          <div>
            <p className="font-sans text-[10px] text-muted-foreground">SNS</p>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
              <a href="#" className="hover:text-ember transition-colors">Instagram</a>
              <a href="#" className="hover:text-ember transition-colors">Note</a>
              <a href="#" className="hover:text-ember transition-colors">X / Twitter</a>
            </div>
          </div>
          <div>
            <p className="font-sans text-[10px] text-muted-foreground">SUPPORT</p>
            <a
              href="https://www.patreon.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 inline-flex items-center gap-2 hover:text-ember transition-colors"
            >
              Patreon でサポートする →
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
            <p className="font-jp mt-4 text-sm text-muted-foreground">お便りを受け取りました。改めてご連絡いたします。</p>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <Field label="お名前" jp="NAME">
                <input required className="w-full bg-transparent border-b border-foreground/40 py-3 focus:outline-none focus:border-ember transition-colors" />
              </Field>
              <Field label="所属（任意）" jp="COMPANY">
                <input className="w-full bg-transparent border-b border-foreground/40 py-3 focus:outline-none focus:border-ember transition-colors" />
              </Field>
            </div>
            <Field label="メールアドレス" jp="EMAIL">
              <input required type="email" className="w-full bg-transparent border-b border-foreground/40 py-3 focus:outline-none focus:border-ember transition-colors" />
            </Field>
            <Field label="ご用件" jp="SUBJECT">
              <select required className="w-full bg-transparent border-b border-foreground/40 py-3 focus:outline-none focus:border-ember transition-colors font-jp">
                <option>個人セッションについて</option>
                <option>企業研修・人事プログラム</option>
                <option>展示・キュレーション</option>
                <option>講演・取材のご依頼</option>
                <option>共同研究のご相談</option>
                <option>その他</option>
              </select>
            </Field>
            <Field label="メッセージ" jp="MESSAGE">
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

function Field({ label, jp, children }: { label: string; jp: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between mb-2">
        <span className="font-jp text-sm">{label}</span>
        <span className="font-sans text-[10px] text-muted-foreground">{jp}</span>
      </span>
      {children}
    </label>
  );
}
