import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero.jpg";
import light from "@/assets/light.jpg";
import works2 from "@/assets/works2.jpg";

export const Route = createFileRoute("/")({
  component: () => <SiteLayout><Home /></SiteLayout>,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] grid md:grid-cols-12 gap-0 items-stretch overflow-hidden">
        <div className="md:col-span-7 relative flex items-center px-6 lg:px-16 py-20">
          <div className="max-w-xl">
            <p className="font-jp text-xs tracking-[0.5em] text-clay reveal">PHOTO ・ THERAPY ・ STUDIO</p>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[1.05] mt-8 reveal reveal-2">
              光を、<br/>
              <em className="text-clay">記憶</em>に<br/>
              還す。
            </h1>
            <p className="mt-10 text-base text-foreground/80 leading-loose font-jp reveal reveal-3 max-w-md">
              フォトセラピーは、写真を通して自分自身と静かに対話する時間。<br/>
              一枚の光が、あなたの心の奥に眠る記憶をやさしく照らします。
            </p>
            <div className="mt-12 flex items-center gap-8 reveal reveal-3">
              <Link to="/contact" className="group inline-flex items-center gap-3 border-b border-foreground pb-2 text-sm tracking-[0.3em]">
                SESSION を予約
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
              <Link to="/about" className="text-sm tracking-[0.3em] text-muted-foreground hover:text-clay transition-colors">
                ABOUT
              </Link>
            </div>
          </div>
          <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 vrl text-[10px] tracking-[0.4em] text-muted-foreground">
            森 ひかり ・ HIKARI MORI ・ 2014—2026
          </div>
        </div>
        <div className="md:col-span-5 relative min-h-[50vh] md:min-h-full">
          <img src={hero} alt="森ひかり ポートレート" width={1536} height={1920} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/30" />
        </div>
      </section>

      {/* QUOTE */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="hairline w-24 mx-auto mb-12" />
        <blockquote className="font-display italic text-3xl md:text-4xl leading-relaxed text-foreground/90">
          “写真は鏡ではなく、<br/>心が呼吸するための窓である。”
        </blockquote>
        <p className="font-jp text-xs tracking-[0.4em] text-muted-foreground mt-10">— Hikari Mori</p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <p className="font-jp text-xs tracking-[0.4em] text-clay">PRACTICE</p>
          <h2 className="font-display text-5xl mt-4 leading-tight">三つの<br/>セラピーの形</h2>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed font-jp">
            写真と向き合う時間は、自分自身と向き合う時間。
            目的に合わせて、三つの方法をご用意しています。
          </p>
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Portrait", jp: "セルフ・ポートレート", d: "あなたの今を、私のまなざしで一枚に。撮影と対話の90分。" },
            { n: "02", t: "Memory", jp: "記憶の再編集", d: "アルバムを開きながら、過去と現在を結び直すワークショップ。" },
            { n: "03", t: "Workshop", jp: "光のワークショップ", d: "少人数制。写真を撮る・選ぶ・語ることで心を整える講座。" },
          ].map((s, i) => (
            <div key={s.n} className="group relative p-6 border border-border bg-card hover:bg-secondary transition-colors">
              <div className="font-display text-5xl text-clay/60">{s.n}</div>
              <h3 className="font-display text-2xl mt-6">{s.t}</h3>
              <p className="font-jp text-xs tracking-widest text-muted-foreground mt-1">{s.jp}</p>
              <p className="text-sm text-foreground/80 mt-4 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH STRIP */}
      <section className="relative my-24 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <img src={light} alt="差し込む光" loading="lazy" width={1536} height={1024} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="bg-secondary/50 px-6 lg:px-16 py-20 flex items-center">
            <div className="max-w-md">
              <p className="font-jp text-xs tracking-[0.4em] text-clay">RESEARCH</p>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">写真と<br/>こころの研究</h2>
              <p className="mt-6 text-sm leading-loose font-jp text-foreground/80">
                京都芸術大学・心理表現研究室にて、フォトセラピーの実践研究を続けています。
                論文・寄稿・講演など、これまでの軌跡をご覧ください。
              </p>
              <Link to="/research" className="inline-flex items-center gap-3 mt-10 text-sm tracking-[0.3em] border-b border-foreground pb-2 group">
                READ MORE <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 relative aspect-[4/5]">
          <img src={works2} alt="セッションの様子" loading="lazy" width={1024} height={1280} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="md:col-span-7">
          <p className="font-jp text-xs tracking-[0.4em] text-clay">VOICES</p>
          <blockquote className="font-display italic text-2xl md:text-3xl mt-6 leading-relaxed">
            “シャッターを切る音が、自分の呼吸と重なる瞬間がありました。
            涙の理由がわからないまま、それでもとても安らかでした。”
          </blockquote>
          <p className="font-jp text-xs tracking-[0.3em] text-muted-foreground mt-6">— K.S さん / 40代 / Memory Session 参加</p>
        </div>
      </section>
    </>
  );
}
