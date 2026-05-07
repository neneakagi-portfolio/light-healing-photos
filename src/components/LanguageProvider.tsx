import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "ja" | "en";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const Ctx = createContext<LangCtx>({ lang: "ja", setLang: () => {}, toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ja");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "ja" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  return (
    <Ctx.Provider value={{ lang, setLang, toggle: () => setLang(lang === "ja" ? "en" : "ja") }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLang = () => useContext(Ctx);

export function T({ ja, en }: { ja: ReactNode; en: ReactNode }) {
  const { lang } = useLang();
  return <>{lang === "ja" ? ja : en}</>;
}

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex items-center gap-1 font-sans text-[11px] ${className}`}>
      <button
        onClick={() => setLang("ja")}
        className={lang === "ja" ? "text-foreground" : "text-foreground/40 hover:text-foreground transition-colors"}
        aria-label="日本語"
      >JA</button>
      <span className="text-foreground/30">/</span>
      <button
        onClick={() => setLang("en")}
        className={lang === "en" ? "text-foreground" : "text-foreground/40 hover:text-foreground transition-colors"}
        aria-label="English"
      >EN</button>
    </div>
  );
}
