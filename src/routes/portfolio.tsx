import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { T, useLang } from "@/components/LanguageProvider";
import hero from "@/assets/nene-hero.jpg";
import work1 from "@/assets/work1.jpg";
import work2 from "@/assets/work2.jpg";
import work3 from "@/assets/work3.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — 作品 / NENE AKAGI" },
      { name: "description", content: "朱樹音々の代表作品集。心象写真シリーズ、肖像、風景、抽象。" },
      { property: "og:title", content: "Portfolio — NENE AKAGI" },
      { property: "og:description", content: "Selected works from the Shinshō Shashin practice." },
      { property: "og:image", content: hero },
    ],
  }),
  component: () => <SiteLayout><Portfolio /></SiteLayout>,
});

const featured = [
  {
    img: work1,
    t: "Purification",
    jp: "浄化",
    cap_ja: "心に触れた静かな雨が、光の粒となって感情を洗い流していく。",
    cap_en: "A quiet rain that touches the heart becomes grains of light, washing emotions away.",
    alt: "青い光と水滴を用いた抽象的な心象写真作品「浄化」 / Inner Vision Photography work 'Purification' — abstract composition of blue light and water droplets by Nene Akagi",
  },
  {
    img: work2,
    t: "Coexistence",
    jp: "共存",
    cap_ja: "異なる存在が交差するとき、世界は新しい調和を見つけていく。",
    cap_en: "When different beings intersect, the world finds a new harmony.",
    alt: "花と電線が重なり合う幻想的な心象写真作品「共存」 / Inner Vision Photography work 'Coexistence' — surreal composition of flowers and power lines by Nene Akagi",
  },
  {
    img: work3,
    t: "Rebirth",
    jp: "再生",
    cap_ja: "立ち止まった場所から、私はもう一度、新しい光へ向かって歩き出す。",
    cap_en: "From the place where I paused, I begin to walk once more, toward a new light.",
    alt: "ミラーと青い植物を組み合わせた心象写真作品「再生」 / Inner Vision Photography work 'Rebirth' — mirror and blue plant composition by Nene Akagi",
  },
];


function Portfolio() {
  const { lang } = useLang();
  const [lightbox, setLightbox] = useState<null | { img: string; alt: string; cap: string }>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-16">
        <p className="font-sans text-[11px] text-ember">PORTFOLIO</p>
        <h1 className="font-display text-5xl md:text-6xl mt-6 leading-[1.1]">
          <T
            ja={<>Works<span className="font-jp text-2xl text-muted-foreground ml-6 align-middle">— 作品集</span></>}
            en={<>Selected Works</>}
          />
        </h1>
        <p className="mt-8 max-w-xl text-[15px] leading-loose text-muted-foreground">
          <T
            ja={<>心象写真として撮影された、選ばれた作品たち。<br/>それぞれが、誰かの内側にある景色の断片です。</>}
            en={<>Selected works made as Shinshō Shashin.<br/>Each one is a fragment of a landscape from someone's interior.</>}
          />
        </p>
      </section>

      {/* Featured 3-up */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {featured.map((w) => {
            const cap = lang === "ja" ? w.cap_ja : w.cap_en;
            return (
              <figure key={w.t} className="group">
                <button
                  type="button"
                  onClick={() => setLightbox({ img: w.img, alt: w.alt, cap })}
                  className="block w-full aspect-square overflow-hidden bg-sumi shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                  aria-label={`${w.t} を拡大表示`}
                >
                  <img
                    src={w.img}
                    alt={w.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </button>
                <figcaption className="mt-5 text-center">
                  <p className="font-display text-xl">{w.t}</p>
                  <p className="font-jp text-[12px] tracking-[0.3em] text-muted-foreground mt-1">{w.jp}</p>
                  <p className="mt-3 text-[13px] leading-loose text-muted-foreground max-w-[28ch] mx-auto">
                    {cap}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>


      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white text-sm tracking-[0.3em] font-sans"
            aria-label="閉じる"
          >
            CLOSE ×
          </button>
          <figure
            className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.img}
              alt={lightbox.alt}
              className="max-w-full max-h-[75vh] object-contain"
            />
            <figcaption className="mt-4 text-center text-white/85 text-[13px] leading-loose max-w-[40ch]">
              <span className="font-display text-base block mb-1">{lightbox.alt}</span>
              {lightbox.cap}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
