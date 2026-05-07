import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import p1 from "@/assets/nene-p1.jpg";
import p2 from "@/assets/nene-p2.jpg";
import p3 from "@/assets/nene-p3.jpg";
import p4 from "@/assets/nene-p4.jpg";
import hero from "@/assets/nene-hero.jpg";
import proj from "@/assets/nene-project.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — 作品 / AKAGI NENE" },
      { name: "description", content: "朱樹音々の代表作品集。心象写真シリーズ、肖像、風景、抽象。" },
      { property: "og:title", content: "Portfolio — AKAGI NENE" },
      { property: "og:description", content: "心象写真の作品集。" },
      { property: "og:image", content: hero },
    ],
  }),
  component: () => <SiteLayout><Portfolio /></SiteLayout>,
});

const works = [
  { img: hero, t: "Quiet Witness", jp: "静かな目撃者", y: "2024", w: 1280, h: 1600, span: "lg:col-span-7 lg:row-span-2", ratio: "aspect-[4/5]" },
  { img: p1,   t: "Veil",            jp: "帷",         y: "2023", w: 1280, h: 1600, span: "lg:col-span-5", ratio: "aspect-[4/5]" },
  { img: p3,   t: "Ember",           jp: "残り火",     y: "2024", w: 1280, h: 1600, span: "lg:col-span-5", ratio: "aspect-[4/5]" },
  { img: p4,   t: "Inner Landscape", jp: "内景",       y: "2022", w: 1600, h: 1280, span: "lg:col-span-7", ratio: "aspect-[5/4]" },
  { img: p2,   t: "Held",            jp: "うつわ",     y: "2023", w: 1280, h: 1600, span: "lg:col-span-5", ratio: "aspect-[4/5]" },
  { img: proj, t: "Threshold",       jp: "境界",       y: "2025", w: 1600, h: 1280, span: "lg:col-span-7", ratio: "aspect-[5/4]" },
];

function Portfolio() {
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-16">
        <p className="font-sans text-[11px] text-ember">PORTFOLIO</p>
        <h1 className="font-display text-5xl md:text-6xl mt-6 leading-[1.1]">
          Works<span className="font-jp text-2xl text-muted-foreground ml-6 align-middle">— 作品集</span>
        </h1>
        <p className="mt-8 max-w-xl font-jp text-[15px] leading-loose text-muted-foreground">
          心象写真として撮影された、選ばれた作品たち。<br/>
          それぞれが、誰かの内側にある景色の断片です。
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-32">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          {works.map(w => (
            <figure key={w.t} className={`group ${w.span}`}>
              <div className={`relative ${w.ratio} bg-sumi overflow-hidden`}>
                <img
                  src={w.img}
                  alt={w.t}
                  loading="lazy"
                  width={w.w}
                  height={w.h}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <div>
                  <p className="font-display text-lg">{w.t}</p>
                  <p className="font-jp text-[11px] tracking-[0.3em] text-muted-foreground mt-0.5">{w.jp}</p>
                </div>
                <p className="font-sans text-[10px] text-ember">{w.y}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
