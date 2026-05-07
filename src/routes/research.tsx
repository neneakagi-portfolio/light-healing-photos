import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — 研究と寄稿 / Hikari Mori" },
      { name: "description", content: "フォトセラピーに関する研究論文、寄稿、講演の記録。" },
      { property: "og:title", content: "Research — Hikari Mori" },
      { property: "og:description", content: "写真と心理表現の交差点で続けられている実践研究。" },
    ],
  }),
  component: () => <SiteLayout><Research /></SiteLayout>,
});

const papers = [
  { y: "2024", t: "「まなざしの相互性 — フォトセラピーにおける撮影者と被写体の心理的距離」", j: "心理表現研究 vol.18" },
  { y: "2023", t: "「アルバム再編集ワークショップが高齢者のwell-beingに与える影響」", j: "日本芸術療法学会誌" },
  { y: "2022", t: "Photographic Re-narration: A Therapeutic Frame", j: "International Journal of Arts in Psychotherapy" },
  { y: "2020", t: "「沈黙の被写体 — 撮らない選択をめぐって」", j: "美術手帖 連載" },
];

const talks = [
  { y: "2025", t: "TEDx Kyoto 「写真は何を癒すのか」" },
  { y: "2024", t: "京都芸術大学 公開講座 / 全6回" },
  { y: "2023", t: "Tokyo Photo Festival パネルディスカッション登壇" },
];

function Research() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-16">
        <p className="font-jp text-xs tracking-[0.4em] text-clay">RESEARCH</p>
        <h1 className="font-display text-6xl md:text-7xl mt-6 leading-none">研究と<br/>寄稿</h1>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="font-display text-3xl mb-10">論文 / Publications</h2>
        <ul className="divide-y divide-border">
          {papers.map(p => (
            <li key={p.t} className="grid md:grid-cols-12 gap-4 py-8 group">
              <div className="md:col-span-2 font-display text-2xl text-clay">{p.y}</div>
              <div className="md:col-span-7">
                <p className="font-jp text-base leading-relaxed group-hover:text-clay transition-colors">{p.t}</p>
              </div>
              <div className="md:col-span-3 text-sm text-muted-foreground italic font-display">{p.j}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl mb-10">講演 / Talks</h2>
          <ul className="space-y-6">
            {talks.map(t => (
              <li key={t.t} className="flex gap-8 items-baseline">
                <span className="font-display text-clay text-xl w-20 flex-shrink-0">{t.y}</span>
                <span className="font-jp">{t.t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="font-jp text-xs tracking-[0.4em] text-clay">BOOK</p>
        <h2 className="font-display text-5xl mt-6 italic">『光のまなざし』</h2>
        <p className="font-jp text-xs tracking-[0.3em] text-muted-foreground mt-4">青土社 / 2021</p>
        <p className="font-jp mt-10 leading-loose text-foreground/80">
          フォトセラピーの十年間の実践を、エッセイと写真で綴った一冊。
          写真と心の関係を、静かな言葉で問いかけます。
        </p>
      </section>
    </>
  );
}
