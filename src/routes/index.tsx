import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { T } from "@/components/LanguageProvider";
import { news } from "@/data/news";
import hero from "@/assets/nene-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nene Akagi | Inner Vision Photography" },
      { name: "description", content: "朱樹音々（Nene Akagi）の公式サイト。写真を通して内面の感情や記憶を可視化する「Inner Vision Photography（心象写真）」の作品・研究・展示・活動を掲載しています。" },
      { property: "og:title", content: "Nene Akagi | Inner Vision Photography" },
      { property: "og:description", content: "言葉になる前の感情を、写真として可視化する。" },
      { property: "og:image", content: hero },
      { property: "og:image:alt", content: "Nene Akagi — Inner Vision Photography portrait" },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: () => <SiteLayout><Home /></SiteLayout>,
});

function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)] grid md:grid-cols-12">
        <div className="md:col-span-7 relative order-2 md:order-1 flex items-center px-6 sm:px-10 lg:px-20 py-20 md:py-0">
          <div className="max-w-xl">
            <p className="font-sans text-[11px] text-ember reveal">PHOTOGRAPHER ・ RESEARCHER</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mt-8 reveal reveal-2">
              <T
                ja={<>心の景色を、<br/><span className="italic font-light">一枚の光へ。</span></>}
                en={<>The inner<br/><span className="italic font-light">landscape, in light.</span></>}
              />
            </h1>
            <div className="hairline w-12 my-10 reveal reveal-3" />
            <p className="font-jp text-[15px] leading-loose text-foreground/75 max-w-md reveal reveal-3 space-y-4">
              <T
                ja={
                  <>
                    <span className="block">写真家・研究者　朱樹音々（Nene Akagi）</span>
                    <span className="block mt-4">26年にわたり写真表現を続けながら、<span className="text-foreground">「心象写真（Inner Vision Photography）」</span>という独自のアプローチを提唱。</span>
                    <span className="block mt-4">言葉になる前の感情、記憶、感覚。人の内側に存在する“まだ輪郭を持たない景色”を、写真という行為を通して可視化しています。</span>
                    <span className="block mt-4">アート、心理、非言語コミュニケーションの交差点から、新しい自己理解のあり方を探求しています。</span>
                  </>
                }
                en={
                  <>
                    <span className="block">Nene Akagi — photographer and researcher.</span>
                    <span className="block mt-4">For 26 years she has continued her practice in photography, proposing her own approach: <span className="text-foreground">Inner Vision Photography (Shinshō Shashin)</span>.</span>
                    <span className="block mt-4">Emotions, memories and sensations that precede language — the "landscapes that do not yet have an outline" — are made visible through the act of photography.</span>
                    <span className="block mt-4">From the intersection of art, psychology and non-verbal communication, she explores new ways of self-understanding.</span>
                  </>
                }
              />
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
            NENE AKAGI ・ 朱樹音々 ・ TOKYO / KYOTO
          </div>
        </div>
        <div className="md:col-span-5 relative order-1 md:order-2 min-h-[55vh] md:min-h-full bg-sumi">
          <img
            src={hero}
            alt="写真家・研究者 朱樹音々（Nene Akagi）のポートレート / Portrait of photographer and researcher Nene Akagi"
            width={1280}
            height={1600}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover fade-in"
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="hairline w-16 mx-auto mb-12" />
        <blockquote className="font-display italic text-2xl md:text-3xl leading-relaxed text-foreground/85">
          <T
            ja={<>「写真は、外を写すと同時に<br className="hidden sm:inline"/>内側の沈黙を映し出す。」</>}
            en={<>“A photograph captures the world,<br className="hidden sm:inline"/>and the silence within us.”</>}
          />
        </blockquote>
        <p className="font-sans text-[10px] text-muted-foreground mt-10">— NENE AKAGI</p>
      </section>

      {news.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 lg:px-12 pt-28 md:pt-32">
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <p className="font-sans text-[11px] text-ember tracking-[0.3em]">NEWS</p>
              <h2 className="font-display text-2xl md:text-3xl mt-3">
                <T ja={<>お知らせ</>} en={<>News</>} />
              </h2>
            </div>
            <Link to="/news" className="font-sans text-[11px] text-muted-foreground hover:text-ember transition-colors">
              <T ja="すべて見る →" en="VIEW ALL →" />
            </Link>
          </div>
          <ol className="divide-y divide-border/60 border-t border-border/60">
            {news.slice(0, 3).map((n, i) => (
              <li key={i} className="py-6 grid md:grid-cols-12 gap-3 md:gap-6">
                <time className="md:col-span-3 font-sans text-[11px] tracking-[0.2em] text-muted-foreground">
                  {n.date}
                </time>
                <div className="md:col-span-9">
                  <Link to="/news" className="font-jp text-[14px] leading-relaxed text-foreground/85 hover:text-ember transition-colors">
                    <T ja={n.title.ja} en={n.title.en} />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}
    </>
  );
}
