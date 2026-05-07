import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import w1 from "@/assets/works1.jpg";
import w2 from "@/assets/works2.jpg";
import w3 from "@/assets/works3.jpg";
import light from "@/assets/light.jpg";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Works — 作品集 / Hikari Mori" },
      { name: "description", content: "森ひかりのフォトセラピー作品・シリーズ集。" },
      { property: "og:title", content: "Works — Hikari Mori" },
      { property: "og:description", content: "光と記憶、まなざしのあいだに生まれた写真作品。" },
    ],
  }),
  component: () => <SiteLayout><Works /></SiteLayout>,
});

const series = [
  { img: w1, t: "Memory Cards", jp: "記憶のカード", y: "2022", d: "祖母の遺したアルバムを編み直す、記録と記憶のあいだの試み。" },
  { img: w2, t: "Window Light", jp: "窓辺の光", y: "2023", d: "京都の町家で出会った人々の、午後の沈黙のポートレート集。" },
  { img: w3, t: "Field Notes", jp: "野の手帖", y: "2024", d: "セッションの記録、押し花、走り書き — 治癒の余白を綴じた日誌。" },
  { img: light, t: "Curtain Studies", jp: "カーテン習作", y: "2021", d: "光そのものを被写体とした、抽象的なセラピーピースのシリーズ。" },
];

function Works() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20">
        <p className="font-jp text-xs tracking-[0.4em] text-clay">WORKS</p>
        <h1 className="font-display text-6xl md:text-7xl mt-6 leading-none">作品集</h1>
        <p className="mt-8 max-w-xl font-jp text-sm leading-loose text-muted-foreground">
          光と記憶、まなざしのあいだに生まれた写真たち。
          シリーズごとに、異なる呼吸を持っています。
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32 space-y-32">
        {series.map((s, i) => (
          <article key={s.t} className={`grid md:grid-cols-12 gap-10 items-end ${i % 2 ? "md:[direction:rtl]" : ""}`}>
            <div className="md:col-span-8 [direction:ltr]">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={s.img} alt={s.t} loading="lazy" width={1024} height={1280} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105" />
              </div>
            </div>
            <div className="md:col-span-4 [direction:ltr]">
              <p className="font-display text-clay text-lg">{s.y}</p>
              <h2 className="font-display text-4xl mt-2">{s.t}</h2>
              <p className="font-jp text-xs tracking-[0.3em] text-muted-foreground mt-2">{s.jp}</p>
              <div className="hairline w-12 my-6" />
              <p className="font-jp text-sm leading-loose text-foreground/80">{s.d}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
