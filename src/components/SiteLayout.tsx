import { Link, useLocation } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { T, LangToggle } from "@/components/LanguageProvider";

const nav = [
  { to: "/", label: { ja: "TOP", en: "TOP" } },
  { to: "/about", label: { ja: "ABOUT", en: "ABOUT" } },
  { to: "/biography", label: { ja: "BIOGRAPHY", en: "BIOGRAPHY" } },
  { to: "/project", label: { ja: "PROJECT", en: "PROJECT" } },
  { to: "/portfolio", label: { ja: "PORTFOLIO", en: "PORTFOLIO" } },
  { to: "/contact", label: { ja: "CONTACT", en: "CONTACT" } },
] as const;

const PATREON_URL = "https://www.patreon.com/c/NeneAkagi";
const INSTAGRAM_URL = "https://www.instagram.com/neneakagi/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61589334376047";
const NOTE_URL = "https://note.com/neneakagi";
const EMAIL_ADDR = "neneakagi@gmail.com";

export function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="fixed top-0 inset-x-0 z-40 bg-background/85 backdrop-blur-sm border-b border-border/60">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="group flex items-baseline gap-3">
            <span className="font-display text-xl md:text-2xl tracking-[0.15em]">NENE AKAGI</span>
            <span className="hidden sm:inline font-jp text-[10px] tracking-[0.4em] text-muted-foreground">朱樹音々</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map(n => {
              const active = pathname === n.to;
              return (
                <Link key={n.to} to={n.to} className="font-sans text-[11px] relative py-1">
                  <span className={active ? "text-foreground" : "text-foreground/55 hover:text-foreground transition-colors duration-500"}>
                    <T ja={n.label.ja} en={n.label.en} />
                  </span>
                  {active && <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-foreground" />}
                </Link>
              );
            })}
            <a
              href={PATREON_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="font-sans text-[11px] border border-foreground/70 px-4 py-2 hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              PATREON
            </a>
            <LangToggle className="ml-2" />
          </nav>
          <div className="flex items-center gap-4 lg:hidden">
            <LangToggle />
            <button
              onClick={() => setOpen(!open)}
              className="font-sans text-[11px] tracking-[0.3em]"
              aria-label="menu"
            >
              {open ? <T ja="閉じる" en="CLOSE" /> : <T ja="メニュー" en="MENU" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border/60 bg-background">
            <div className="px-6 py-8 flex flex-col gap-5">
              {nav.map(n => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="font-sans text-sm tracking-[0.3em] text-foreground/80"
                >
                  <T ja={n.label.ja} en={n.label.en} />
                </Link>
              ))}
              <a
                href={PATREON_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="font-sans text-sm tracking-[0.3em] border border-foreground/70 px-4 py-3 inline-block w-fit mt-2"
              >
                PATREON →
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16 md:pt-20">{children}</main>

      <footer className="border-t border-border/60 mt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display text-2xl tracking-[0.15em]">NENE AKAGI</div>
            <p className="font-jp text-[11px] tracking-[0.4em] text-muted-foreground mt-2">朱樹音々 ・ PHOTOGRAPHER & RESEARCHER</p>
            <p className="font-jp text-sm text-muted-foreground mt-6 leading-loose max-w-md">
              <T
                ja={<>心象写真 ── 写真を通して、内面を可視化する。アートと心理の境界で、まなざしの実践を続けています。</>}
                en={<>Shinshō Shashin — visualizing the inner landscape through photography. A quiet practice at the intersection of art and psychology.</>}
              />
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="font-sans text-[10px] text-muted-foreground mb-4">CONTACT</p>
            <p className="text-sm">studio@akaginene.com</p>
            <p className="text-sm mt-2 text-muted-foreground">Tokyo / Kyoto, Japan</p>
          </div>
          <div className="md:col-span-4">
            <p className="font-sans text-[10px] text-muted-foreground mb-4">FOLLOW & SUPPORT</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href="#" className="hover:text-ember transition-colors">Instagram</a>
              <a href="#" className="hover:text-ember transition-colors">Note</a>
              <a href="#" className="hover:text-ember transition-colors">X / Twitter</a>
              <a href={PATREON_URL} target="_blank" rel="noreferrer noopener" className="hover:text-ember transition-colors">Patreon</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/60 py-6 text-center text-[10px] font-sans text-muted-foreground">
          © {new Date().getFullYear()} NENE AKAGI — ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
}
