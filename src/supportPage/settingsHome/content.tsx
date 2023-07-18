import IconChecked from '../../../src/components/icons/checked';
import IconEducation from '../../../src/components/icons/education';
import IconInvitation from '../../../src/components/icons/invitation';
import IconNotification from '../../../src/components/icons/notification';
import IconPoints from '../../../src/components/icons/points';
import IconPreference from '../../../src/components/icons/preference';
import IconPrivacy from '../../../src/components/icons/privacy';
import IconProfile from '../../../src/components/icons/profile';
import IconSecurity from '../../../src/components/icons/security';
import IconTelemarketing from '../../../src/components/icons/telemarketing';

export const itemsMenuSettingsHome = [
  {
    name: 'Dados Pessoais',
    subMenu: [
      {
        name: 'Meus Dados',
        href: '',
        icon: <IconProfile />,
      },
      {
        name: 'Meus Pontos',
        href: '',
        icon: <IconPoints />,
        isPremium: true,
      },
      {
        name: 'Convidar amigo',
        href: '',
        icon: <IconInvitation />,
      },
      {
        name: 'Meu Plano',
        href: '',
        icon: <IconChecked />,
      },
    ],
  },
  {
    name: 'Configuração',
    subMenu: [
      {
        name: 'Preferências',
        href: '',
        icon: <IconPreference />,
      },
      {
        name: 'Notificações',
        href: '',
        icon: <IconNotification />,
        isPremium: true,
      },
      {
        name: 'Privacidade',
        href: '',
        icon: <IconPrivacy />,
      },
      {
        name: 'Segurança',
        href: '',
        icon: <IconSecurity />,
      },
    ],
  },
  {
    name: 'Aprenda',
    subMenu: [
      {
        name: 'Passo a Passo',
        href: '',
        icon: <IconChecked />,
      },
    ],
  },
  {
    name: 'Ajuda',
    subMenu: [
      {
        name: 'Chat virtual',
        href: '',
        icon: <IconEducation />,
      },
      {
        name: 'Falar com Atendente',
        href: '',
        icon: <IconTelemarketing />,
      },
    ],
  },
];