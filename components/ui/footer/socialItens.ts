import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitch,
  FaYoutube,
} from 'react-icons/fa';

interface SocialItemProps {
  Icon: React.ComponentType<{ className?: string }>;
  name: string;
  userInSocialMedia: string;
  url: string;
}

export const socialItems: SocialItemProps[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/fidelitygames/',
    userInSocialMedia: '@fidelityjogos2024',
    Icon: FaInstagram,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61566370001495',
    userInSocialMedia: 'Fidelity Jogos',
    Icon: FaFacebook,
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/fidelityjogos',
    userInSocialMedia: '/fidelityjogos',
    Icon: FaDiscord,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@canaldofidelity',
    userInSocialMedia: '@canaldofidelity',
    Icon: FaYoutube,
  },
  {
    name: 'Twitch',
    url: 'https://www.twitch.tv/canaldofidelity',
    userInSocialMedia: '/canaldofidelity',
    Icon: FaTwitch,
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@fidelityjogos_',
    userInSocialMedia: '@fidelityjogos_',
    Icon: FaTiktok,
  },
];
