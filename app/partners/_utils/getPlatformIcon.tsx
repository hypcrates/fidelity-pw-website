import {
    FaTwitch,
    FaYoutube,
    FaInstagram,
    FaDiscord,
    FaFacebook,
    FaTiktok,
  } from 'react-icons/fa';
  
  export const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'twitch':
        return <FaTwitch />;
      case 'youtube':
        return <FaYoutube />;
      case 'instagram':
        return <FaInstagram />;
      case 'facebook':
        return <FaFacebook />;
      case 'discord':
        return <FaDiscord />;
      case 'tiktok':
        return <FaTiktok />;
      default:
        return null;
    }
  };
  