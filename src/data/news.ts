// ============================================================
// NEWS DATA — 更新方法 / How to update
// ============================================================
// 新しいお知らせを追加するには、下のリスト一番上に
// 新しいオブジェクトを追加してください。
// 古いものを削除したいときは、その項目を消すだけです。
//
// date    : 表示日付（"2026.06.22" など、自由な文字列でOK）
// title   : { ja, en } タイトル（日本語 / 英語）
// body    : { ja, en } 本文（改行は \n または <br/>不要、段落で分けたい場合は \n\n）
// link    : 任意。外部URLや内部リンク。省略可。
// linkLabel: 任意。リンクのラベル。省略すると "詳しく見る / READ MORE"
// ============================================================

export type NewsItem = {
  date: string;
  title: { ja: string; en: string };
  body: { ja: string; en: string };
  link?: string;
  linkLabel?: { ja: string; en: string };
};

export const news: NewsItem[] = [
  {
    date: "2026.06.22",
    title: {
      ja: "ウェブサイトを公開しました",
      en: "Website launched",
    },
    body: {
      ja: "朱樹音々の公式ウェブサイトを公開しました。心象写真の実践、作品、活動についてご紹介しています。",
      en: "The official website of Nene Akagi is now live, introducing her practice of Shinshō Shashin (Inner Vision Photography), works, and activities.",
    },
  },
];
