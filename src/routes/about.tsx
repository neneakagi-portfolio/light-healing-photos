import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { T } from "@/components/LanguageProvider";
import hero from "@/assets/nene-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Nene Akagi | 朱樹音々 プロフィール" },
      { name: "description", content: "写真家・研究者 朱樹音々（Nene Akagi）のプロフィールと活動概要。Inner Vision Photography（心象写真）を軸に、展示・講演・研究を国内外で展開。" },
      { property: "og:title", content: "About | Nene Akagi | 朱樹音々 プロフィール" },
      { property: "og:description", content: "写真家・研究者 朱樹音々（Nene Akagi）のプロフィールと活動概要。" },
      { property: "og:url", content: "https://neneakagi.lovable.app/about" },
      { property: "og:image", content: `https://neneakagi.lovable.app${hero}` },
      { name: "twitter:image", content: `https://neneakagi.lovable.app${hero}` },
    ],
    links: [{ rel: "canonical", href: "https://neneakagi.lovable.app/about" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://neneakagi.lovable.app/" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://neneakagi.lovable.app/about" },
        ],
      }),
    }],
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
                  <p className="font-jp">大分県出身。</p>
                  <p className="font-jp">19歳より写真をはじめ、モナコ、フランスなど、国内外で作品を発表。<br/>2016年、モナコ・日本芸術祭にて芸術創造賞を受賞。作品はユネスコ公認 国際美術連盟モナコ公国委員会に永久収蔵。</p>
                  <p className="font-jp">写真を“記録”ではなく、<span className="text-foreground">内面と対話するためのメディア</span>として捉え直し、感情・記憶・無意識のイメージを可視化する手法<span className="text-foreground">「心象写真（Inner Vision Photography）」</span>を探求している。</p>
                  <p className="font-jp">個人セッション、展示、ワークショップ、企業研修、講演、共同研究などを通して、写真を見ることそのものが、自分を理解する体験となる場を、国内外でひらいている。</p>
                  <p className="font-jp">静かな対話と、被写体への深いまなざし。<br/>一枚の写真が、誰かの人生に小さな光を残せたら——そう願いながら。</p>
                </>
              }
              en={
                <>
                  <p>From Ōita, Japan.</p>
                  <p>Began photographing at nineteen. Exhibited internationally in Monaco and France. In 2016, received the Art Creation Award at the Monaco–Japan Art Festival; the work was permanently archived by the UNESCO-affiliated International Association of Art, Monaco Committee.</p>
                  <p>Approaches photography not as record, but as <span className="text-foreground">a medium for dialogue with the inner self</span>, exploring <span className="text-foreground">Inner Vision Photography (Shinshō Shashin)</span> — a practice of rendering emotion, memory and the unspoken visible.</p>
                  <p>Through personal sessions, exhibitions, workshops, corporate programs, lectures and collaborative research, opens quiet spaces where looking at a photograph becomes a way of understanding oneself.</p>
                  <p>A quiet dialogue, and a steady gaze toward the subject. In the hope that a single photograph might leave a small light in someone's life.</p>
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
            <img src={hero} alt="写真家・研究者 朱樹音々（Nene Akagi）のポートレート / Portrait of photographer and researcher Nene Akagi" loading="lazy" width={1280} height={1600} className="absolute inset-0 w-full h-full object-cover" />
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
