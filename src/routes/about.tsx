import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { T } from "@/components/LanguageProvider";
import hero from "@/assets/nene-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — 朱樹音々 / NENE AKAGI" },
      { name: "description", content: "写真家・研究家 朱樹音々のプロフィールと活動概要。" },
      { property: "og:title", content: "About — NENE AKAGI" },
      { property: "og:description", content: "A photographer and researcher working between art and psychology." },
    ],
  }),
  component: () => <SiteLayout><About /></SiteLayout>,
});

function About() {
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-24 grid md:grid-cols-12 gap-12 lg:gap-20">
        <div className="md:col-span-7 order-2 md:order-1">
          <p className="font-sans text-[11px] text-ember">ABOUT</p>
          <h1 className="font-display text-5xl md:text-6xl mt-6 leading-[1.1]">
            About <em className="italic">NENE AKAGI</em>
          </h1>
          <p className="font-jp text-[11px] tracking-[0.4em] text-muted-foreground mt-4">朱樹音々 ・ あかぎ ねね</p>
          <div className="hairline w-12 my-10" />
          <div className="space-y-7 text-[15px] leading-loose text-foreground/85">
            <T
              ja={
                <>
                  <p className="font-jp">写真家・研究家。<br/>写真を通して内面を可視化する表現手法<span className="text-foreground">「心象写真」</span>を提唱し、アートと心理の領域を横断しながら、自己理解や創造性向上につながる体験を提供しています。</p>
                  <p className="font-jp">個人セッション、企業研修、ワークショップ、講演、大学・研究機関との共同研究など、写真を媒介に「人と内面が出会う場」をつくる活動を国内外で続けています。</p>
                  <p className="font-jp">静かな対話と、被写体への深いまなざし。一枚の写真が、見る人の中に残る景色になることを願って。</p>
                </>
              }
              en={
                <>
                  <p>Photographer and researcher.<br/>Founder of <span className="text-foreground">Shinshō Shashin</span> ("inner-image photography") — a practice that makes the inner world visible through the camera, working between art and psychology to support self-understanding and creative growth.</p>
                  <p>Through personal sessions, corporate programs, workshops, lectures, and collaborative research with universities and institutions, she creates spaces where people meet their own interior — in Japan and abroad.</p>
                  <p>Quiet dialogue, and a deep gaze toward the subject. A single image, hoping to remain as a landscape inside the viewer.</p>
                </>
              }
            />
          </div>

          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            <Link to="/biography" className="group border border-foreground/30 p-6 hover:border-foreground transition-colors">
              <p className="font-sans text-[10px] text-ember">BIOGRAPHY</p>
              <p className="text-base mt-3"><T ja="経歴・受賞・出版を見る" en="Career, awards & publications" /></p>
              <span className="font-sans text-[11px] mt-4 inline-block group-hover:translate-x-2 transition-transform">→</span>
            </Link>
            <Link to="/contact" className="group border border-foreground/30 p-6 hover:border-foreground transition-colors">
              <p className="font-sans text-[10px] text-ember">CONTACT</p>
              <p className="text-base mt-3"><T ja="展示・依頼のご相談" en="Exhibitions & inquiries" /></p>
              <span className="font-sans text-[11px] mt-4 inline-block group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>

        <div className="md:col-span-5 order-1 md:order-2">
          <div className="relative aspect-[4/5] bg-sumi">
            <img src={hero} alt="Nene Akagi" loading="lazy" width={1280} height={1600} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <p className="font-sans text-[10px] text-muted-foreground mt-3 text-right">PORTRAIT, 2024</p>
        </div>
      </section>

      <section className="bg-secondary/40 py-24 mt-12">
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="font-sans text-[11px] text-ember">ACTIVITIES</p>
          <h2 className="font-display text-3xl md:text-4xl mt-4"><T ja="活動概要" en="Practice" /></h2>
          <div className="hairline w-12 my-10" />
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { n: "01", t: "Exhibition", jp: "展示", ja: "国内外のギャラリー・美術館での個展、グループ展、企業空間での常設展示。", en: "Solo and group exhibitions at galleries and museums in Japan and abroad, plus permanent installations in corporate spaces." },
              { n: "02", t: "Workshop", jp: "ワークショップ", ja: "個人・少人数制の心象写真ワークショップ。自己理解と創造性開発のための実践。", en: "Individual and small-group Shinshō Shashin workshops — a practice for self-understanding and creative development." },
              { n: "03", t: "Lecture", jp: "講演", ja: "企業研修、人事・管理職向けプログラム、教育機関での講義。日英対応。", en: "Corporate programs for executives and HR teams, university lectures and public talks. Available in English and Japanese." },
              { n: "04", t: "Research", jp: "共同研究", ja: "大学・研究機関との学際的研究。論文発表、書籍寄稿、共同プロジェクト。", en: "Interdisciplinary research with universities and institutions, including papers, essays and collaborative projects." },
            ].map(s => (
              <div key={s.n} className="border-t border-foreground/30 pt-5">
                <div className="font-display text-xs text-ember">{s.n}</div>
                <h3 className="font-display text-2xl mt-3">{s.t}</h3>
                <p className="font-jp text-[11px] tracking-[0.3em] text-muted-foreground mt-1">{s.jp}</p>
                <p className="text-sm text-foreground/80 mt-5 leading-loose"><T ja={s.ja} en={s.en} /></p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
