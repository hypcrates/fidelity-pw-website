import {
  GiBattleGear,
  GiCrystalBars,
  GiElfHelmet,
  GiRuneStone,
  GiWizardFace,
} from 'react-icons/gi';
import { FaDesktop } from 'react-icons/fa6';
import { InfoItem } from '../_interface/infoItem';

export const infoItems: InfoItem[] = [
  {
    image: '/assets/images/arena.png',
    icon: GiBattleGear,
    title: 'Arena de batalha',
    description:
      'Focado em competitivo, desfrute do novo sistema da Arena Guan Yu aleatória, nos modos 1v1, 3v3 e 6v6. É hora do show!',
  },
  {
    image: '/assets/images/classes.png',
    icon: GiElfHelmet,
    title: 'Raças',
    description:
      'O Fidelity possui 6 raças e 14 classes disponíveis. São elas: Guerreiro, Mago, Atiradora, Bárbaro, Feiticeira, Sacerdote, Arqueiro, Paladino, Espiritualista, Mercenário, Místico, Arcano, Retalhador e Tormentador.',
  },
  {
    image: '/assets/images/client.png',
    icon: FaDesktop,
    title: 'Client Otimizado',
    description:
      'Pensando na melhor fluidez do jogo, nosso cliente funciona de uma forma responsiva para garantir maior desempenho e FPS para os jogadores.',
  },
  {
    image: '/assets/images/daimons.png',
    icon: GiWizardFace,
    title: 'Daimons',
    description:
      'Além das 4 daimons tradicionais, o Fidelity também tem as poderosas Estio e Geada para maior equilíbrio no PVP e no PVE',
  },
  {
    image: '/assets/images/refino.png',
    icon: GiCrystalBars,
    title: 'Refino Máximo',
    description: 'O refino máximo do servidor é até o +12',
  },
  {
    image: '/assets/images/runas.png',
    icon: GiRuneStone,
    title: 'Sistema de Runas',
    description:
      'Progressão é o nosso dilema! As poderosas Runas chegaram no fidelity, atualmente até o nível 8 - escolha a combinação de runa que mais combina com o seu estilo de jogo.',
  },
];
