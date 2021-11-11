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
        link: { href: '#' },
      },
    ],
  },
  {
    title: 'Friends',
    icon: { name: 'person-add-outline' },
    children: [
      {
        title: 'View Friends',
        link: { href: '#' },
      },
      {
        title: 'Add A New Friend',
        link: { href: '#' },
      },
      {
        title: 'Invite Friends',
        link: { href: '#' },
      },
    ],
  },
  {
    title: 'Expenses',
    icon: { name: 'clipboard-outline' },
    children: [
      {
        title: 'View Expenses',
        link: { href: '#' },
      },
      {
        title: 'Add Expense',
        link: { href: '#' },
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
