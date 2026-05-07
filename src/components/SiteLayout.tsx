import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home", jp: "扉" },
  { to: "/about", label: "About", jp: "私について" },
  { to: "/works", label: "Works", jp: "作品" },
  { to: "/research", label: "Research", jp: "研究" },
  { to: "/contact", label: "Contact", jp: "お問い合わせ" },
] as const;

export function SiteLayout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="group">
            <div className="font-display text-2xl tracking-wide leading-none">Hikari Mori</div>
            <div className="font-jp text-[10px] tracking-[0.4em] text-muted-foreground mt-1">フォトセラピー</div>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            {nav.map(n => (
              <Link
                key={n.to}
                to={n.to}
                className="group relative text-sm tracking-widest uppercase font-sans"
              >
                <span className={pathname === n.to ? "text-clay" : "text-foreground/80 group-hover:text-clay transition-colors"}>
                  {n.label}
                </span>
                <span className={`absolute -bottom-1 left-0 h-px bg-clay transition-all duration-500 ${pathname === n.to ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden text-sm tracking-widest" aria-label="menu">
            {open ? "閉" : "menu"}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/60 bg-background">
            <div className="px-6 py-6 flex flex-col gap-4">
              {nav.map(n => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="flex items-baseline justify-between">
                  <span className="font-display text-xl">{n.label}</span>
                  <span className="font-jp text-xs text-muted-foreground">{n.jp}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <footer className="border-t border-border/60 mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-3 gap-12">
          <div>
            <div className="font-display text-3xl">Hikari Mori</div>
            <p className="font-jp text-xs tracking-[0.3em] text-muted-foreground mt-2">PHOTO THERAPY STUDIO</p>
            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
              写真を通して、心の奥にある光を見つめ直す。<br/>
              一枚の記憶が、あなたを癒す旅のはじまり。
            </p>
          </div>
          <div>
            <p className="font-jp text-xs tracking-[0.3em] text-muted-foreground mb-4">CONTACT</p>
            <p className="text-sm">studio@hikari-mori.jp</p>
            <p className="text-sm mt-1">京都市左京区 銀閣寺前 3-12</p>
          </div>
          <div>
            <p className="font-jp text-xs tracking-[0.3em] text-muted-foreground mb-4">FOLLOW</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-clay transition-colors">Instagram</a>
              <a href="#" className="hover:text-clay transition-colors">Note</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground tracking-widest">
          © 2026 Hikari Mori — All photographs are sacred memories.
        </div>
      </footer>
    </div>
  );
}
