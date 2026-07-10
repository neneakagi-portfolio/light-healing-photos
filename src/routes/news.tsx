import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { T } from "@/components/LanguageProvider";
import { news } from "@/data/news";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News | Nene Akagi | Inner Vision Photography" },
      { name: "description", content: "朱樹音々（Nene Akagi）からのお知らせ。展示、ワークショップ、個人セッション、学会発表、執筆などの最新情報。" },
      { property: "og:title", content: "News | Nene Akagi | Inner Vision Photography" },
      { property: "og:description", content: "展示、ワークショップ、学会発表などのお知らせ。" },
      { property: "og:url", content: "https://neneakagi.lovable.app/news" },
    ],
    links: [{ rel: "canonical", href: "https://neneakagi.lovable.app/news" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://neneakagi.lovable.app/" },
          { "@type": "ListItem", position: 2, name: "News", item: "https://neneakagi.lovable.app/news" },
        ],
      }),
    }],
  }),
  component: () => <SiteLayout><NewsPage /></SiteLayout>,
});

function NewsPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-12 py-24 md:py-32">
      <header className="mb-20">
        <p className="font-sans text-[11px] text-ember tracking-[0.3em]">NEWS</p>
        <h1 className="font-display text-4xl md:text-5xl mt-6">
          <T ja={<>お知らせ</>} en={<>News</>} />
        </h1>
        <div className="hairline w-12 mt-10" />
      </header>

      {news.length === 0 ? (
        <p className="font-jp text-sm text-muted-foreground">
          <T ja="現在お知らせはありません。" en="No news at the moment." />
        </p>
      ) : (
        <ol className="space-y-16">
          {news.map((n, i) => (
            <li key={i} className="grid md:grid-cols-12 gap-6 md:gap-10">
              <div className="md:col-span-3">
                <time className="font-sans text-[11px] tracking-[0.2em] text-muted-foreground">
                  {n.date}
                </time>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-display text-xl md:text-2xl leading-snug">
                  <T ja={n.title.ja} en={n.title.en} />
                </h2>
                <div className="font-jp text-[14px] leading-loose text-foreground/75 mt-5 whitespace-pre-line">
                  <T ja={n.body.ja} en={n.body.en} />
                </div>
                {n.link && (
                  <a
                    href={n.link}
                    target={n.link.startsWith("http") ? "_blank" : undefined}
                    rel={n.link.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="inline-flex items-center gap-2 mt-6 font-sans text-[11px] border-b border-foreground/60 pb-0.5 hover:text-ember hover:border-ember transition-colors"
                  >
                    <T
                      ja={n.linkLabel?.ja ?? "詳しく見る"}
                      en={n.linkLabel?.en ?? "READ MORE"}
                    />
                    <span>→</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
