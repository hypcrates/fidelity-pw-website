import { Platform } from '../_type/platformInfluencer';

export interface Partners {
  name: string;
  photo: string;
  platform: Platform;
  social: {
    platform: string;
    url: string;
  }[];
}
