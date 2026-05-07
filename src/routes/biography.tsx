import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/biography")({
  head: () => ({
    meta: [
      { title: "Biography — 朱樹音々 / NENE AKAGI" },
      { name: "description", content: "写真家・研究家 朱樹音々の経歴、展示歴、受賞歴、出版・寄稿情報。" },
      { property: "og:title", content: "Biography — NENE AKAGI" },
      { property: "og:description", content: "心象写真を提唱する写真家・研究家の歩み。" },
    ],
  }),
  component: () => <SiteLayout><Biography /></SiteLayout>,
});

const timeline = [
  { y: "1985", t: "東京都生まれ" },
  { y: "2008", t: "早稲田大学 文学部 心理学コース 卒業" },
  { y: "2011", t: "東京藝術大学大学院 美術研究科 写真領域 修了" },
  { y: "2013", t: "個展『内景／Inner Landscape』(東京 / TOTEM POLE PHOTO GALLERY)" },
  { y: "2016", t: "「心象写真」概念を発表 / ワークショップ活動を本格的に開始" },
  { y: "2019", t: "京都に拠点を移し、研究活動を始める" },
  { y: "2021", t: "共同研究『写真表現と自己理解』(京都大学 こころの未来研究センター)" },
  { y: "2023", t: "著書『心象写真 ── 内側を撮る、ということ』(青幻舎) 刊行" },
  { y: "2024", t: "個展『沈黙の輪郭』(東京・KYOTOGRAPHIE 関連展示)" },
  { y: "2025", t: "海外展示 / 企業研修プログラム本格始動" },
];

const exhibitions = [
  "2024　『沈黙の輪郭』東京 / G/P gallery",
  "2023　『Inner Landscape Vol.III』Singapore / Objectifs",
  "2022　『記憶の余白』KYOTOGRAPHIE 関連展",
  "2020　Group『Photography & Mind』東京都写真美術館（参加）",
  "2018　『Quiet Witness』京都 / Kahitsukan",
];

const press = [
  "IMA Magazine Vol.42 — 特集寄稿「心象写真とは何か」",
  "BRUTUS『写真のはなし』ロングインタビュー",
  "Casa BRUTUS / 美術手帖 / WIRED Japan 寄稿",
  "NHK 教育番組『こころの時代』出演 (2024)",
];

function Biography() {
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-24">
        <p className="font-sans text-[11px] text-ember">BIOGRAPHY</p>
        <h1 className="font-display text-5xl md:text-6xl mt-6 leading-[1.1]">
          歩み<span className="font-jp text-2xl text-muted-foreground ml-6 align-middle">— Biography</span>
        </h1>
        <p className="mt-10 max-w-2xl font-jp text-[15px] leading-loose text-foreground/85">
          写真を通して内面を可視化する表現手法「心象写真」を提唱。<br/>
          アートと心理の領域を横断し、自己理解や創造性向上につながる体験を提供しています。
        </p>
      </section>

      <section className="max-w-[1100px] mx-auto px-6 pb-24">
        <p className="font-sans text-[11px] text-ember">CHRONOLOGY</p>
        <div className="hairline w-12 my-8" />
        <ul className="divide-y divide-border">
          {timeline.map(e => (
            <li key={e.y} className="grid grid-cols-12 gap-4 py-5">
              <span className="col-span-3 sm:col-span-2 font-display text-lg text-ember">{e.y}</span>
              <span className="col-span-9 sm:col-span-10 font-jp text-[15px] leading-loose">{e.t}</span>
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
              {exhibitions.map(e => (
                <li key={e} className="font-jp text-sm leading-loose border-b border-border pb-4">{e}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-sans text-[11px] text-ember">PRESS & PUBLICATIONS</p>
            <div className="hairline w-12 my-8" />
            <ul className="space-y-5">
              {press.map(p => (
                <li key={p} className="font-jp text-sm leading-loose border-b border-border pb-4">{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
