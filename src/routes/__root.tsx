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
      { title: "Nene Akagi | Inner Vision Photography" },
      { name: "description", content: "朱樹音々（Nene Akagi）の公式サイト。写真を通して内面の感情や記憶を可視化する「Inner Vision Photography（心象写真）」の作品・研究・展示・活動を掲載しています。" },
      { name: "keywords", content: "Nene Akagi, 朱樹音々, Inner Vision Photography, 心象写真, phototherapy, fine art photography, Japanese photographer, conceptual photography, visual art, nonverbal communication, art and psychology" },
      { name: "author", content: "Nene Akagi" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nene Akagi | Inner Vision Photography" },
      { property: "og:title", content: "Nene Akagi | Inner Vision Photography" },
      { property: "og:description", content: "言葉になる前の感情を、写真として可視化する。" },
      { property: "og:locale", content: "ja_JP" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nene Akagi | Inner Vision Photography" },
      { name: "twitter:description", content: "言葉になる前の感情を、写真として可視化する。" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
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
