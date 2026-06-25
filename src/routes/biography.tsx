import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { T } from "@/components/LanguageProvider";

export const Route = createFileRoute("/biography")({
  head: () => ({
    meta: [
      { title: "Biography — 朱樹音々 / NENE AKAGI" },
      { name: "description", content: "写真家・研究家 朱樹音々の経歴。" },
      { property: "og:title", content: "Biography — NENE AKAGI" },
      { property: "og:description", content: "Career of Nene Akagi." },
    ],
  }),
  component: () => <SiteLayout><Biography /></SiteLayout>,
});

const timeline = [
  { y: "2004.6",  ja: "Oita Today グループ展 図録掲載", en: "Oita Today group exhibition — included in catalogue" },
  { y: "2005.10", ja: "第7回 大分県民芸術文化祭「〜あの日の記憶を辿って〜」企画個展", en: "7th Oita Prefectural Arts & Culture Festival — solo exhibition “Tracing the Memory of That Day”" },
  { y: "2005.10", ja: "「ゆっくり Step and Breath autumn」グループ展", en: "Group exhibition “Yukkuri — Step and Breath, Autumn”" },
  { y: "2006.8",  ja: "「ダツラ24」個展", en: "Solo exhibition “Datura 24”" },
  { y: "2015.4",  ja: "美術書籍『百兵衛』掲載", en: "Featured in art book “Hyakubei”" },
  { y: "2015.7",  ja: "マドレーヌ寺院「恒久平和展」展示", en: "“Permanent Peace Exhibition”, La Madeleine, Paris" },
  { y: "2015.11", ja: "World Women's Photo Exhibition「包まれた別府」", en: "World Women's Photo Exhibition — “Beppu, Enveloped”" },
  { y: "2016.2",  ja: "〜モナコ日本国交樹立10周年記念事業〜 第10回モナコ・日本芸術祭2016 展示／「芸術創造賞」受賞", en: "10th Monaco–Japan Art Festival 2016 (commemorating 10 years of diplomatic relations) — Art Creation Award" },
  { y: "2016.3",  ja: "Art Maison Selection「ある視点」〜多層な日本美術を検証する〜 企画展", en: "Art Maison Selection — “A Point of View: Examining the Many Layers of Japanese Art”" },
  { y: "2016.7",  ja: "第1回アートインターナショナルプロジェクト出展 テーマ:ポストヒューマン「人類進化」", en: "1st Art International Project — theme: Post-Human “Human Evolution”" },
  { y: "2016.7",  ja: "ユネスコ公認国際美術連盟モナコ公国委員会に永久収蔵", en: "Permanently archived by the UNESCO-affiliated International Association of Art, Monaco Committee" },
  { y: "2016.11", ja: "Design Festa Vol.44 写真展示「Being Human Being」", en: "Design Festa Vol.44 — photography exhibition “Being Human Being”" },
  { y: "2016.12", ja: "バジェ・デ・ロス・スエニョス財団により、スペインの彫刻村にて名前を刻印される", en: "Name inscribed at the Spanish sculpture village by the Valle de los Sueños Foundation" },
  { y: "2017.2",  ja: "第11回 モナコ・日本芸術祭「造形芸術文化賞」受賞", en: "11th Monaco–Japan Art Festival — Plastic Arts & Culture Award" },
  { y: "2017.4",  ja: "ART MAISON INTERNATIONAL Vol.21 掲載", en: "Featured in ART MAISON INTERNATIONAL Vol.21" },
  { y: "2017.10", ja: "A.M.S.C 芸術家会員", en: "A.M.S.C Artist Member" },
  { y: "2026.1–2",ja: "Fine Art Photography Exhibition Vol.9 横浜赤レンガ倉庫 出展（日本文藝主催）", en: "Fine Art Photography Exhibition Vol.9, Yokohama Red Brick Warehouse (organized by Nihon Bungei)" },
  { y: "2026", ja: "第122回日本精神神経学会学術総会にて、精神科医・三木一平先生の教育講演に心象写真の作品が紹介される", en: "The 122nd Annual Meeting of the Japanese Society of Psychiatry and Neurology — photographic works introduced during an educational lecture by psychiatrist Dr. Kazuhei Miki" },
  { y: "2026", ja: "第3回日本外来精神医学会学術総会 ポスター発表に参加。心象写真を非言語的な自己理解・感情認知へのアプローチとして研究発表", en: "The 3rd Annual Meeting of the Japanese Society of Outpatient Psychiatry — participated in the poster session presenting research on Inner Vision Photography as a non-verbal approach to self-understanding and emotional awareness" },
];

function Biography() {
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-24">
        <p className="font-sans text-[11px] text-ember">BIOGRAPHY</p>
        <h1 className="font-display text-5xl md:text-6xl mt-6 leading-[1.1]">
          <T
            ja={<>歩み<span className="font-jp text-2xl text-muted-foreground ml-6 align-middle">— Biography</span></>}
            en={<>Biography</>}
          />
        </h1>
        <p className="mt-10 max-w-2xl text-[15px] leading-loose text-foreground/85">
          <T
            ja={<>写真を通して内面を可視化する表現手法「心象写真」を提唱。<br/>アートと心理の領域を横断し、自己理解や創造性向上につながる体験を提供しています。</>}
            en={<>Founder of Shinshō Shashin — a method that makes the inner world visible through photography.<br/>Working between art and psychology, supporting self-understanding and creative growth.</>}
          />
        </p>
      </section>

      <section className="max-w-[1100px] mx-auto px-6 pb-32">
        <p className="font-sans text-[11px] text-ember">CHRONOLOGY</p>
        <div className="hairline w-12 my-8" />
        <ul className="divide-y divide-border">
          {timeline.map((e, i) => (
            <li key={i} className="grid grid-cols-12 gap-4 py-5">
              <span className="col-span-3 sm:col-span-2 font-display text-base text-ember">{e.y}</span>
              <span className="col-span-9 sm:col-span-10 text-[15px] leading-loose"><T ja={e.ja} en={e.en} /></span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
