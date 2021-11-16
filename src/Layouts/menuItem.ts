import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'Dashboard',
    icon: { name: 'home-outline' },
    link: { href: '/dashboard' },
  },
  {
    title: 'Groups',
    icon: { name: 'people-outline' },
    children: [
      {
        title: 'List Groups',
        link: { href: '/group' },
      },
      {
        title: 'Add A New Group',
        link: { href: '/group/create' },
      },
    ],
  },
  {
    title: 'Friends',
    icon: { name: 'person-add-outline' },
    children: [
      {
        title: 'List Friends',
        link: { href: '/friend' },
      },
      {
        title: 'Invite Friends',
        link: { href: '/friend/invite' },
      },
    ],
  },
  {
    title: 'Expenses',
    icon: { name: 'clipboard-outline' },
    children: [
      {
        title: 'List Expenses',
        link: { href: '/expense' },
      },
      {
        title: 'Add an Expense',
        link: { href: '/expense/create' },
      },
    ],
  },
  {
    title: 'Logout',
    icon: { name: 'lock-outline' },
    link: { href: '#' },
  },
];

export default items;
