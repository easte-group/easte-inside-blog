import { Member } from '@src/types';

export const members: Member[] = [
  {
    id: 'easte',
    nickname: 'easte',
    avatarSrc: '/avatars/easte.png',
    sources: ['https://qiita.com/organizations/easte/activities.atom'],
    twitterUsername: 'easte_group',
    websiteUrl: 'https://www.easte.jp',
  },
  {
    id: 'kocho',
    nickname: 'こちょ',
    avatarSrc: '/avatars/kocho.png',
    sources: ['https://qiita.com/kocho5252/feed'],
    twitterUsername: 'k0cho5252',
    githubUsername: 'kocho5252',
    websiteUrl: 'https://kocho5252.github.io',
  },
  {
    id: 'koneko',
    nickname: 'koneko',
    avatarSrc: '/avatars/koneko.png',
    sources: ['https://qiita.com/saenaikoneko/feed'],
    githubUsername: 'saenaikoneko',
    websiteUrl: 'https://saenaikoneko.github.io',
  },
].sort((a, b) => (a.nickname < b.nickname ? -1 : 1));
