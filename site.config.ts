export const config = {
  siteMeta: {
    title: "easte inside blog",
    teamName: 'easte, group.',
    description: 'easte inside blogは、任意団体easteが技術的知見や団体内カルチャーを紹介するブログです。',
    path: '/',
    ogImage: 'og.png',
  },
  siteRoot: process.env.NODE_ENV === 'production' ? 'https://inside.easte.jp' : 'http://localhost:3000',
  headerLinks: [] as { href: string; title: string }[],
};
