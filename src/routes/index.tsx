import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/nene-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AKAGI NENE | 朱樹音々 — 心象写真 / Photographer & Researcher" },
      { name: "description", content: "写真家・研究家 朱樹音々 (Akagi Nene) 公式サイト。写真を通して内面を可視化する表現「心象写真」を提唱。展示・ワークショップ・講演・共同研究のご依頼を承ります。" },
      { property: "og:title", content: "AKAGI NENE — 心象写真 Phototherapy Photographer" },
      { property: "og:description", content: "心の奥にある景色を、一枚の写真へ。" },
    ],
  }),
  component: () => <SiteLayout><Home /></SiteLayout>,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-5rem)] grid md:grid-cols-12">
        <div className="md:col-span-7 relative order-2 md:order-1 flex items-center px-6 sm:px-10 lg:px-20 py-20 md:py-0">
          <div className="max-w-xl">
            <p className="font-sans text-[11px] text-ember reveal">PHOTOGRAPHER ・ RESEARCHER</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mt-8 reveal reveal-2">
              心の景色を、<br/>
              <span className="italic font-light">一枚の光へ。</span>
            </h1>
            <div className="hairline w-12 my-10 reveal reveal-3" />
            <p className="font-jp text-[15px] leading-loose text-foreground/75 max-w-md reveal reveal-3">
              写真家・研究家　朱樹音々（Akagi Nene）。<br/>
              写真を通して内面を可視化する表現手法
              <span className="text-foreground"> 「心象写真」</span>を提唱しています。
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 reveal reveal-4">
              <Link to="/project" className="group inline-flex items-center gap-3 border-b border-foreground pb-1 font-sans text-[11px]">
                ABOUT THE PROJECT
                <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
              </Link>
              <Link to="/contact" className="font-sans text-[11px] text-muted-foreground hover:text-ember transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
          <div className="hidden xl:block absolute left-6 bottom-12 vrl font-sans text-[10px] text-muted-foreground">
            AKAGI NENE ・ 朱樹音々 ・ TOKYO / KYOTO
          </div>
        </div>
        <div className="md:col-span-5 relative order-1 md:order-2 min-h-[55vh] md:min-h-full bg-sumi">
          <img
            src={hero}
            alt="朱樹音々 ポートレート"
            width={1280}
            height={1600}
            className="absolute inset-0 w-full h-full object-cover fade-in"
          />
        </div>
      </section>

      {/* QUOTE */}
      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="hairline w-16 mx-auto mb-12" />
        <blockquote className="font-display italic text-2xl md:text-3xl leading-relaxed text-foreground/85">
          「写真は、外を写すと同時に<br className="hidden sm:inline"/>
          内側の沈黙を映し出す。」
        </blockquote>
        <p className="font-sans text-[10px] text-muted-foreground mt-10">— AKAGI NENE</p>
      </section>
    </>
  );
}
