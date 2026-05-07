import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { T } from "@/components/LanguageProvider";

export const Route = createFileRoute("/biography")({
  head: () => ({
    meta: [
      { title: "Biography — 朱樹音々 / NENE AKAGI" },
      { name: "description", content: "写真家・研究家 朱樹音々の経歴、展示歴、受賞歴、出版・寄稿情報。" },
      { property: "og:title", content: "Biography — NENE AKAGI" },
      { property: "og:description", content: "Career and selected works of Nene Akagi." },
    ],
  }),
  component: () => <SiteLayout><Biography /></SiteLayout>,
});

const timeline = [
  { y: "1985", ja: "東京都生まれ", en: "Born in Tokyo, Japan" },
  { y: "2008", ja: "早稲田大学 文学部 心理学コース 卒業", en: "BA in Psychology, Waseda University" },
  { y: "2011", ja: "東京藝術大学大学院 美術研究科 写真領域 修了", en: "MFA in Photography, Tokyo University of the Arts" },
  { y: "2013", ja: "個展『内景／Inner Landscape』(東京 / TOTEM POLE PHOTO GALLERY)", en: "Solo exhibition “Inner Landscape” (TOTEM POLE PHOTO GALLERY, Tokyo)" },
  { y: "2016", ja: "「心象写真」概念を発表 / ワークショップ活動を本格的に開始", en: "Introduced the concept of “Shinshō Shashin”; began full workshop practice" },
  { y: "2019", ja: "京都に拠点を移し、研究活動を始める", en: "Relocated to Kyoto; began research practice" },
  { y: "2021", ja: "共同研究『写真表現と自己理解』(京都大学 こころの未来研究センター)", en: "Joint research with Kokoro Research Center, Kyoto University" },
  { y: "2023", ja: "著書『心象写真 ── 内側を撮る、ということ』(青幻舎) 刊行", en: "Published book “Shinshō Shashin: Photographing the Interior” (Seigensha)" },
  { y: "2024", ja: "個展『沈黙の輪郭』(東京・KYOTOGRAPHIE 関連展示)", en: "Solo exhibition “Outline of Silence” (Tokyo / KYOTOGRAPHIE satellite)" },
  { y: "2025", ja: "海外展示 / 企業研修プログラム本格始動", en: "International exhibitions; corporate programs launched" },
];

const exhibitions = [
  { ja: "2024　『沈黙の輪郭』東京 / G/P gallery", en: "2024  “Outline of Silence”, G/P gallery, Tokyo" },
  { ja: "2023　『Inner Landscape Vol.III』Singapore / Objectifs", en: "2023  “Inner Landscape Vol.III”, Objectifs, Singapore" },
  { ja: "2022　『記憶の余白』KYOTOGRAPHIE 関連展", en: "2022  “Margins of Memory”, KYOTOGRAPHIE satellite" },
  { ja: "2020　Group『Photography & Mind』東京都写真美術館（参加）", en: "2020  Group: “Photography & Mind”, Tokyo Photographic Art Museum" },
  { ja: "2018　『Quiet Witness』京都 / Kahitsukan", en: "2018  “Quiet Witness”, Kahitsukan, Kyoto" },
];

const press = [
  { ja: "IMA Magazine Vol.42 — 特集寄稿「心象写真とは何か」", en: "IMA Magazine Vol.42 — Feature essay: “What is Shinshō Shashin?”" },
  { ja: "BRUTUS『写真のはなし』ロングインタビュー", en: "BRUTUS “Talks on Photography” — long interview" },
  { ja: "Casa BRUTUS / 美術手帖 / WIRED Japan 寄稿", en: "Contributions to Casa BRUTUS, Bijutsu Techo, WIRED Japan" },
  { ja: "NHK 教育番組『こころの時代』出演 (2024)", en: "Featured on NHK “Kokoro no Jidai” (2024)" },
];

function Biography() {
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-24">
        <p className="font-sans text-[11px] text-ember">BIOGRAPHY</p>
        <h1 className="font-display text-5xl md:text-6xl mt-6 leading-[1.1]">
          <T
            ja={<>歩み<span className="font-jp text-2xl text-muted-foreground ml-6 align-middle">— Biography</span></>}
            en={<>Biography</>}
          />
        </h1>
        <p className="mt-10 max-w-2xl text-[15px] leading-loose text-foreground/85">
          <T
            ja={<>写真を通して内面を可視化する表現手法「心象写真」を提唱。<br/>アートと心理の領域を横断し、自己理解や創造性向上につながる体験を提供しています。</>}
            en={<>Founder of Shinshō Shashin — a method that makes the inner world visible through photography.<br/>Working between art and psychology, supporting self-understanding and creative growth.</>}
          />
        </p>
      </section>

      <section className="max-w-[1100px] mx-auto px-6 pb-24">
        <p className="font-sans text-[11px] text-ember">CHRONOLOGY</p>
        <div className="hairline w-12 my-8" />
        <ul className="divide-y divide-border">
          {timeline.map(e => (
            <li key={e.y} className="grid grid-cols-12 gap-4 py-5">
              <span className="col-span-3 sm:col-span-2 font-display text-lg text-ember">{e.y}</span>
              <span className="col-span-9 sm:col-span-10 text-[15px] leading-loose"><T ja={e.ja} en={e.en} /></span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="font-sans text-[11px] text-ember">SELECTED EXHIBITIONS</p>
            <div className="hairline w-12 my-8" />
            <ul className="space-y-5">
              {exhibitions.map((e, i) => (
                <li key={i} className="text-sm leading-loose border-b border-border pb-4"><T ja={e.ja} en={e.en} /></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-sans text-[11px] text-ember">PRESS & PUBLICATIONS</p>
            <div className="hairline w-12 my-8" />
            <ul className="space-y-5">
              {press.map((p, i) => (
                <li key={i} className="text-sm leading-loose border-b border-border pb-4"><T ja={p.ja} en={p.en} /></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
