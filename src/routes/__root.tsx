import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { LanguageProvider } from "@/components/LanguageProvider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <p className="font-jp mt-4 text-sm text-muted-foreground tracking-widest">迷い込んだ景色</p>
        <div className="mt-8">
          <Link to="/" className="inline-flex items-center justify-center border border-foreground px-6 py-3 text-xs tracking-[0.3em] hover:bg-foreground hover:text-background transition-colors">
            RETURN HOME
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Something quietly went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 border border-foreground px-6 py-3 text-xs tracking-[0.3em] hover:bg-foreground hover:text-background transition-colors">
          TRY AGAIN
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "朱樹音々 | Nene Akagi | Photographer・Researcher・Founder of Inner Vision Photography" },
      { name: "description", content: "写真家・研究者 朱樹音々（Nene Akagi）公式サイト。Inner Vision Photography（心象写真）の研究・展示・講演・プロジェクト・学会発表・最新情報を掲載。" },
      { name: "keywords", content: "朱樹音々, Nene Akagi, 朱樹音々 写真家, Inner Vision Photography, 心象写真, phototherapy, fine art photography, Japanese photographer, conceptual photography, visual art, nonverbal communication, art and psychology" },
      { name: "author", content: "Nene Akagi" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nene Akagi | Inner Vision Photography" },
      { property: "og:title", content: "朱樹音々 | Nene Akagi | Photographer・Researcher・Founder of Inner Vision Photography" },
      { property: "og:description", content: "写真家・研究者 朱樹音々（Nene Akagi）公式サイト。Inner Vision Photography（心象写真）の研究・展示・講演・プロジェクト・学会発表・最新情報。" },
      { property: "og:locale", content: "ja_JP" },
      { property: "og:locale:alternate", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "朱樹音々 | Nene Akagi | Inner Vision Photography" },
      { name: "twitter:description", content: "言葉になる前の感情を、写真として可視化する。" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Noto+Serif+JP:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Nene Akagi",
          alternateName: ["朱樹音々", "あかぎ ねね"],
          url: "https://neneakagi.com",
          jobTitle: ["Photographer", "Researcher", "Founder of Inner Vision Photography"],
          nationality: "Japanese",
          sameAs: [
            "https://www.instagram.com/neneakagi/",
            "https://www.facebook.com/profile.php?id=61589334376047",
            "https://note.com/neneakagi",
            "https://www.patreon.com/c/NeneAkagi",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Nene Akagi | Inner Vision Photography",
          alternateName: "朱樹音々 公式サイト",
          url: "https://neneakagi.com",
          inLanguage: ["ja-JP", "en"],
          author: { "@type": "Person", name: "Nene Akagi" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Outlet />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
