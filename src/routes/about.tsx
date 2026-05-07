import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — 森ひかり / Hikari Mori" },
      { name: "description", content: "フォトセラピー写真家・研究家、森ひかりのプロフィールと哲学。" },
      { property: "og:title", content: "About — Hikari Mori" },
      { property: "og:description", content: "写真と心理学の境界で、まなざしの実践を続けるフォトセラピストの軌跡。" },
    ],
  }),
  component: () => <SiteLayout><About /></SiteLayout>,
});

function About() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 order-2 md:order-1">
          <p className="font-jp text-xs tracking-[0.4em] text-clay">ABOUT</p>
          <h1 className="font-display text-6xl md:text-7xl mt-6 leading-none">森<br/>ひかり</h1>
          <p className="font-jp text-xs tracking-[0.4em] text-muted-foreground mt-4">HIKARI MORI</p>
          <div className="hairline w-16 my-10" />
          <div className="space-y-6 text-base leading-loose font-jp">
            <p>
              1986年、京都生まれ。<br/>
              フォトセラピー写真家・研究家。
            </p>
            <p>
              大学で臨床心理学を学んだのち、写真表現に出会う。
              「撮ること」「撮られること」「見つめ直すこと」の三つの行為が、
              人の内側で起こるささやかな変容を促すことに気づき、
              2014年よりフォトセラピーの実践と研究を始める。
            </p>
            <p>
              個人セッション、ワークショップ、企業向けプログラム、大学での講義など、
              写真を通して人と心が出会う場づくりを続けている。
            </p>
          </div>
        </div>
        <div className="md:col-span-7 order-1 md:order-2 relative aspect-[4/5]">
          <img src={hero} alt="森ひかり" width={1536} height={1920} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { y: "2009", t: "京都大学 文学部 心理学専攻 卒業" },
            { y: "2012", t: "Royal College of Art (London) 写真修士課程修了" },
            { y: "2014", t: "Hikari Mori Studio 設立 / フォトセラピー実践開始" },
            { y: "2018", t: "京都芸術大学 心理表現研究室 客員研究員" },
            { y: "2021", t: "著書『光のまなざし』(青土社) 出版" },
            { y: "2024", t: "個展『記憶の窓』(銀座ニコンサロン)" },
          ].map(e => (
            <div key={e.y} className="border-t border-border pt-4">
              <div className="font-display text-3xl text-clay">{e.y}</div>
              <p className="font-jp text-sm mt-2 leading-relaxed">{e.t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-24 mt-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-jp text-xs tracking-[0.4em] text-clay">PHILOSOPHY</p>
          <h2 className="font-display text-4xl md:text-5xl mt-6 leading-snug">
            私は写真家ではなく、<br/>
            <em>まなざしの庭師</em>でありたい。
          </h2>
          <p className="font-jp mt-10 text-base leading-loose text-foreground/80">
            一枚の写真には、撮った人の沈黙と、撮られた人の呼吸が宿ります。
            その間にある「見つめる時間」こそが、私が大切にしているフォトセラピーの本質です。
          </p>
        </div>
      </section>
    </>
  );
}
