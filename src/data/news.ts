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
    date: "2026.9.26",
    title: {
      ja: "第57回日本芸術療法学会学術大会にて口頭発表",
      en: "Oral Presentation at the 57th Annual Conference of the Japanese Society of Art Therapy",
    },
    body: {
      ja: "2026年9月26日、第57回日本芸術療法学会学術大会にて、Inner Vision Photography（心象写真）に関する口頭発表を行いました。\n\n発表タイトルは、\n\n「心象写真による自己理解とセルフコントロールを促す実践研究―スマートフォンを用いたセルフケアの可能性―」\n\nです。\n\n長年続けてきた心象写真の実践をもとに、写真表現を通した自己対話と自己理解、そして「自分で選ぶ」ことへつながるプロセスについて発表しました。",
      en: "On September 26, 2026, Nene Akagi gave an oral presentation on Inner Vision Photography (Shinshō Shashin) at the 57th Annual Conference of the Japanese Society of Art Therapy.\n\nThe presentation was titled “A Practice Study Promoting Self-Understanding and Self-Control through Shinshō Shashin (Inner Vision Photography) — The Potential of Smartphone-Based Self-Care.”\n\nBased on her long-standing practice of Inner Vision Photography, she presented a process in which photographic expression leads to self-dialogue, self-understanding, and the act of making one's own choices.",
    },
    link: "https://sjpe-at.org/taikai2026news001/",
    linkLabel: {
      ja: "第57回日本芸術療法学会学術大会 公式情報",
      en: "Official information on the 57th Annual Conference of the Japanese Society of Art Therapy",
    },
  },
  {
    date: "2026.07.10",
    title: {
      ja: "日本精神神経学会ポスターを三木メンタルクリニック院内に展示",
      en: "Research Poster Displayed at Miki Mental Clinic",
    },
    body: {
      ja: "日本精神神経学会学術総会で発表した研究ポスターを、このたび三木メンタルクリニック院内に展示していただくこととなりました。\n\n心象写真（Inner Vision Photography）の研究活動をご理解いただき、このような機会をいただけたことを心より感謝申し上げます。\n\nこの展示を通して、心象写真による自己理解やセルフマネジメントについて、多くの方に知っていただくきっかけになれば幸いです。",
      en: "I am pleased to announce that my research poster presented at the Annual Meeting of the Japanese Society of Psychiatry and Neurology is now displayed at Miki Mental Clinic in Japan.\n\nI sincerely appreciate Dr. Miki and everyone at the clinic for supporting the dissemination of Inner Vision Photography and my research activities.\n\nI hope this exhibition will encourage more discussions about self-understanding, self-management, and the future potential of Inner Vision Photography.",
    },
  },
  {
    date: "2026.06.25",
    title: {
      ja: "精神医学会にて学術発表・作品紹介",
      en: "Academic Presentations and Recognition at Psychiatry Conferences",
    },
    body: {
      ja: "このたび、2つの学術的活動をお知らせします。\n\n第122回日本精神神経学会学術総会にて、精神科医・三木和平先生の教育講演に心象写真の作品が紹介されました。\n\nまた、第3回日本外来精神医学会学術総会のポスター発表に参加し、心象写真を非言語的な自己理解・感情認知へのアプローチとして研究発表いたしました。\n\n芸術、写真、心理学、研究を結ぶ大切な一歩として、今後もこの実践を深めていきたいと考えています。",
      en: "I am pleased to share two recent academic milestones.\n\nMy photographic works were introduced during an educational lecture by psychiatrist Dr. Kazuhei Miki at the 122nd Annual Meeting of the Japanese Society of Psychiatry and Neurology.\n\nIn addition, I participated in the poster session at the 3rd Annual Meeting of the Japanese Society of Outpatient Psychiatry, presenting my ongoing research on Inner Vision Photography—an original photographic approach that explores emotions and self-understanding through non-verbal visual expression.\n\nThese opportunities represent important steps in connecting art, photography, psychology, and research, and I look forward to continuing the development of this work.",
    },
  },
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
