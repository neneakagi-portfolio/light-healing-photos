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
                  <p className="font-jp">大分県出身。写真家・研究者です。</p>
                  <p className="font-jp">19歳から写真活動を開始し、モナコ・フランス・スペインなど国内外で作品を発表。<br/>2016年には「モナコ・日本芸術祭」にて芸術創造賞を受賞し、作品はユネスコ公認国際美術連盟モナコ公国委員会に永久収蔵されました。</p>
                  <p className="font-jp">近年は、写真を“記録”ではなく「内面と対話するためのメディア」として再定義し、感情・記憶・無意識のイメージを可視化する表現手法<span className="text-foreground">「心象写真（Inner Vision Photography）」</span>の研究と実践を行っています。</p>
                  <p className="font-jp">個人セッション、展示、ワークショップ、企業研修、講演、共同研究などを通して、「写真を見ることそのものが、自分を理解する体験になる」場づくりを国内外で展開。</p>
                  <p className="font-jp">静かな対話と、被写体への深いまなざし。<br/>一枚の写真が、誰かの人生に小さな光を残すことを願いながら活動を続けています。</p>
                </>
              }
              en={
                <>
                  <p>From Ōita Prefecture. A photographer and researcher based in Japan.</p>
                  <p>She began her practice at the age of 19 and has exhibited internationally in Monaco, France, Spain and beyond. In 2016 she received the Art Creation Award at the Monaco–Japan Art Festival, and her work was permanently archived by the UNESCO-affiliated International Association of Art, Monaco Committee.</p>
                  <p>In recent years she has redefined photography not as "record" but as "a medium for dialogue with the inner self," researching and practicing <span className="text-foreground">Inner Vision Photography (Shinshō Shashin)</span> — a method that makes emotions, memories and unconscious imagery visible.</p>
                  <p>Through individual sessions, exhibitions, workshops, corporate programs, lectures and collaborative research, she creates spaces — in Japan and abroad — where "the act of looking at a photograph itself becomes an experience of understanding oneself."</p>
                  <p>Quiet dialogue, and a deep gaze toward the subject. She continues her practice with the hope that a single photograph might leave a small light in someone's life.</p>
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
