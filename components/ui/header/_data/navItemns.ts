export interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

export const NavItems: NavItem[] = [
  { label: 'Início', href: '/' },
  {
    label: 'Servidor',
    href: '#',
    subItems: [
      { label: 'Sobre o Servidor', href: '/about-server' },
      { label: 'Utilitários', href: '/utilities' },
      { label: 'Regras', href: '/rules' },
    ],
  },
  {
    label: 'Conteúdo',
    href: '#',
    subItems: [
      { label: 'Notícias', href: '/news' },
      { label: 'Guias', href: '/guides' },
      { label: 'Informações', href: '/informations' },
    ],
  },
  {
    label: 'Comunidade',
    href: '#',
    subItems: [
      { label: 'Parceiros', href: '/partners' },
    ],
  },
];
