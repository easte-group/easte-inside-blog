import { Member } from '@src/types';

export const members: Member[] = [
  {
    id: 'koneko',
    nickname: 'koneko',
    avatarSrc: '/avatars/koneko.png',
    sources: ['https://qiita.com/saenaikoneko/feed'],
    githubUsername: 'saenaikoneko',
    websiteUrl: 'https://saenaikoneko.github.io',
  },
  {
    id: 'kocho',
    nickname: 'こちょ',
    avatarSrc: '/avatars/kocho.png',
    sources: ['https://qiita.com/kocho5252/feed'],
    twitterUsername: 'k0cho5252',
    githubUsername: 'kocho5252',
  },
].sort((a, b) => (a.nickname < b.nickname ? -1 : 1));
