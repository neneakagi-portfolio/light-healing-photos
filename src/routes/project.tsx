import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { T } from "@/components/LanguageProvider";
import projectImg from "@/assets/nene-project.jpg";


export const Route = createFileRoute("/project")({
  head: () => ({
    meta: [
      { title: "Project — 心象写真 Inner Vision Photography | Nene Akagi" },
      { name: "description", content: "朱樹音々（Nene Akagi）が提唱する Inner Vision Photography（心象写真）。写真を通して内面を可視化する表現手法と実践プログラム。" },
      { property: "og:title", content: "Project — 心象写真 Inner Vision Photography | Nene Akagi" },
      { property: "og:description", content: "Drawing the inner contour through photography — the Inner Vision Photography practice by Nene Akagi." },
      { property: "og:url", content: "https://neneakagi.com/project" },
      { property: "og:image", content: `https://neneakagi.com${projectImg}` },
      { name: "twitter:image", content: `https://neneakagi.com${projectImg}` },
    ],
    links: [{ rel: "canonical", href: "https://neneakagi.com/project" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://neneakagi.com/" },
          { "@type": "ListItem", position: 2, name: "Project", item: "https://neneakagi.com/project" },
        ],
      }),
    }],
  }),
  component: () => <SiteLayout><Project /></SiteLayout>,
});

const programs = [
  { t: "Personal Session", jp: "個人セッション", tag: "INDIVIDUAL",
    ja: "対話と撮影を通して、自分の内面に静かに向き合うための個人セッション。経営者・表現者・自己探求中の方へ。",
    en: "A personal session of dialogue and photographing to quietly face one's inner self — for executives, artists, and those in inner exploration." },
  { t: "Corporate Program", jp: "企業プログラム", tag: "CORPORATE",
    ja: "写真と対話を通して、自己認知や感覚共有について探求する実践プログラムを構想しています。",
    en: "An evolving practice program exploring self-awareness and the sharing of sensation through photography and dialogue." },
  { t: "Workshop", jp: "ワークショップ", tag: "GROUP",
    ja: "少人数制。撮る・選ぶ・語るという行為を通じて、自分の内側にある景色を観察する体験型ワークショップ。",
    en: "Small-group workshop. Through shooting, selecting and speaking, participants observe the landscapes within themselves." },
  { t: "Lecture", jp: "講演 / Talk", tag: "TALK",
    ja: "美術館、イベント、対話の場などで、写真・感覚・非言語表現についての講演やトークを行っています。",
    en: "Talks at museums, events and spaces for dialogue, on photography, sensation and nonverbal expression." },
  { t: "Collaborative Research", jp: "探求と実践", tag: "RESEARCH",
    ja: "写真による感覚表現や非言語コミュニケーションについて、実践と観察を続けています。",
    en: "An ongoing practice and observation of sensorial expression and nonverbal communication through photography." },
  { t: "Patreon Community", jp: "コミュニティ", tag: "SUPPORT",
    ja: "Patreonでは、未公開作品や制作背景、思考プロセスなどを共有しています。作品と言葉を通して、静かにつながるためのコミュニティです。",
    en: "On Patreon I share unreleased works, the background of my process, and notes from my thinking — a quiet community connected through images and words." },
];

function Project() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[60vh] md:h-[70vh] bg-sumi">
          <img src={projectImg} alt="Inner Vision Photography（心象写真）プロジェクトのビジュアル / Visual for the Inner Vision Photography project by Nene Akagi" loading="lazy" width={1600} height={1280} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="max-w-[1100px] mx-auto px-6 -mt-20 relative">
          <div className="bg-background pt-12 pr-0 md:pr-20">
            <p className="font-sans text-[11px] text-ember">PROJECT</p>
            <h1 className="font-display text-4xl md:text-6xl mt-4 leading-[1.1]">
              <T
                ja={<>心象写真<br/><em className="italic font-light">— Shinshō Shashin</em></>}
                en={<>Shinshō<br/><em className="italic font-light">Shashin</em></>}
              />
            </h1>
            <div className="hairline w-12 my-10" />
            <p className="text-[16px] leading-loose text-foreground/85 max-w-3xl">
              <T
                ja={<>「心象写真」とは、外界を記録するためではなく、<br/>撮る人の<span className="text-foreground">内面に潜む景色</span>を可視化するための、写真の実践。</>}
                en={<>Shinshō Shashin — a photographic practice not for recording the outer world, but for making visible the <span className="text-foreground">inner landscape</span> of the one who photographs.</>}
              />
            </p>
            <p className="text-[16px] leading-loose text-foreground/85 max-w-3xl mt-6">
              <T
                ja={<>シャッターを切るその一瞬に、<br/>言葉にならない感情、忘れていた記憶、<br/>まだ名前のない感覚が現れます。</>}
                en={<>In that single shutter, unspeakable emotions, forgotten memories, and sensations still without a name appear.</>}
              />
            </p>
            <p className="text-[16px] leading-loose text-foreground/85 max-w-3xl mt-6">
              <T
                ja={<>心理と写真表現の関係性を探求しながら、<br/>個人セッション、ワークショップ、展示などを通して、<br/>心象写真の実践を続けています。</>}
                en={<>Exploring the relationship between psychology and photographic expression, I continue the practice of Shinshō Shashin through personal sessions, workshops and exhibitions.</>}
              />
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-24">
        <p className="font-sans text-[11px] text-ember">PROGRAMS</p>
        <h2 className="font-display text-3xl md:text-4xl mt-4"><T ja="活動内容" en="What I offer" /></h2>
        <div className="hairline w-12 my-10" />

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {programs.map(p => (
            <div key={p.t} className="bg-background p-8 md:p-10 flex flex-col">
              <p className="font-sans text-[10px] text-ember">{p.tag}</p>
              <h3 className="font-display text-2xl mt-4">{p.t}</h3>
              <p className="font-jp text-[11px] tracking-[0.3em] text-muted-foreground mt-1">{p.jp}</p>
              <p className="text-sm text-foreground/80 mt-6 leading-loose"><T ja={p.ja} en={p.en} /></p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="max-w-[820px] mx-auto px-6 lg:px-12 py-28 md:py-36 text-center">
          <p className="font-sans text-[11px] text-ember tracking-[0.3em]">FOR ORGANIZATIONS</p>
          <h2 className="font-display text-3xl md:text-4xl mt-6 leading-tight">
            <T
              ja={<>組織のための<br/>心象写真プログラム</>}
              en={<>Shinshō Shashin<br/>for organizations</>}
            />
          </h2>
          <div className="hairline w-12 my-10 mx-auto" />
          <p className="text-[15px] leading-loose text-foreground/85">
            <T
              ja={<>写真と対話を通して、<br/>自己認知や感覚共有について<br/>探求する実践プログラムを構想しています。</>}
              en={<>An evolving practice program exploring<br/>self-awareness and the sharing of sensation<br/>through photography and dialogue.</>}
            />
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-12 font-sans text-[11px] border-b border-foreground pb-1 group"
          >
            REQUEST A PROPOSAL
            <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
