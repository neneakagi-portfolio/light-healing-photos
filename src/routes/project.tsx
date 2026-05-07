import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { T } from "@/components/LanguageProvider";
import projectImg from "@/assets/nene-project.jpg";
import p2 from "@/assets/nene-p2.jpg";

export const Route = createFileRoute("/project")({
  head: () => ({
    meta: [
      { title: "Project — 心象写真 / NENE AKAGI" },
      { name: "description", content: "心象写真とは何か。朱樹音々が提唱する、写真を通して内面を可視化する表現手法と、その実践プログラム。" },
      { property: "og:title", content: "Project — Shinshō Shashin / NENE AKAGI" },
      { property: "og:description", content: "Drawing the inner contour through photography." },
      { property: "og:image", content: projectImg },
    ],
  }),
  component: () => <SiteLayout><Project /></SiteLayout>,
});

const programs = [
  { t: "Personal Session", jp: "個人セッション", tag: "INDIVIDUAL",
    ja: "対話と撮影を通して、自分の内面に静かに向き合う90分のセッション。経営者・表現者・自己探求中の方へ。",
    en: "A 90-minute session of dialogue and photographing — for executives, artists, and those in inner exploration." },
  { t: "Corporate Program", jp: "企業研修・人事プログラム", tag: "CORPORATE",
    ja: "管理職・人事担当者向け。組織内の対話力、自己認知、創造性を高めるための心象写真ワーク。日英対応。",
    en: "For managers and HR teams. Shinshō Shashin work to deepen dialogue, self-awareness and creativity. Available in EN/JA." },
  { t: "Workshop", jp: "ワークショップ", tag: "GROUP",
    ja: "少人数制。撮る・選ぶ・語るという三つの行為を通じて、自身の内側にある景色を編集する体験講座。",
    en: "Small-group workshop. Through shooting, selecting and speaking, participants edit the landscapes inside themselves." },
  { t: "Lecture", jp: "講演 / Talk", tag: "TALK",
    ja: "美術館、大学、企業、海外フェスティバルなどでの講演・トーク。日本語・英語に対応。",
    en: "Talks at museums, universities, companies and international festivals. English and Japanese." },
  { t: "Collaborative Research", jp: "共同研究", tag: "RESEARCH",
    ja: "心理学・教育・組織開発の研究機関との共同研究、寄稿、執筆。学際的な視点から心象写真を深めます。",
    en: "Collaborative research with institutions in psychology, education and organizational development." },
  { t: "Patreon Community", jp: "継続支援コミュニティ", tag: "SUPPORT",
    ja: "Patreonでは未公開作品、思考メモ、月例オンラインサロンなどを配信。長くゆっくり対話できる場です。",
    en: "Unreleased works, notes and a monthly online salon on Patreon — a space for slow, long dialogue." },
];

function Project() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[60vh] md:h-[70vh] bg-sumi">
          <img src={projectImg} alt="Shinshō Shashin" loading="lazy" width={1600} height={1280} className="absolute inset-0 w-full h-full object-cover" />
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
                ja={<>「心象写真」とは、外界を記録するためではなく、撮る人と撮られる人の<span className="text-foreground">内面に潜む景色</span>を可視化するために行う写真の実践です。シャッターを切るその一瞬に、言葉にならない感情、忘れていた記憶、まだ名前のない願いが現れます。</>}
                en={<>Shinshō Shashin is a photographic practice not for recording the outer world, but for making visible the <span className="text-foreground">inner landscape</span> of both the one photographing and the one photographed. In that single shutter, unspeakable emotions, forgotten memories and unnamed wishes appear.</>}
              />
            </p>
            <p className="text-[16px] leading-loose text-foreground/85 max-w-3xl mt-6">
              <T
                ja={<>朱樹音々は、心理学と写真表現を横断する研究と実践を重ねながら、この手法を個人セッション・企業研修・ワークショップ・大学講義などへと展開しています。</>}
                en={<>Nene Akagi develops this practice across personal sessions, corporate programs, workshops and university lectures, weaving together research in psychology and photographic expression.</>}
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

      <section className="grid md:grid-cols-2 border-t border-border">
        <div className="relative aspect-[4/3] md:aspect-auto bg-sumi">
          <img src={p2} alt="Session" loading="lazy" width={1280} height={1600} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="bg-secondary/40 px-6 lg:px-16 py-20 flex items-center">
          <div className="max-w-md">
            <p className="font-sans text-[11px] text-ember">FOR ORGANIZATIONS</p>
            <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight">
              <T
                ja={<>組織のための<br/>心象写真プログラム</>}
                en={<>Shinshō Shashin<br/>for organizations</>}
              />
            </h2>
            <p className="text-sm leading-loose text-foreground/85 mt-8">
              <T
                ja={<>管理職・人事・経営層を対象に、自己認知と創造性を引き出す研修を設計します。半日プログラムから複数日プログラム、海外拠点向けの英語実施まで対応可能です。</>}
                en={<>Programs designed for executives, HR and leadership teams to deepen self-awareness and creativity. Half-day to multi-day formats, with English delivery available for international offices.</>}
              />
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-10 font-sans text-[11px] border-b border-foreground pb-1 group"
            >
              REQUEST A PROPOSAL
              <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
