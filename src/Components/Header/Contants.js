import {
  BASE_URI,
  PATH_CONSTANTS
} from '../../Configurations/Contants';

export const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Dashboard',
    href: `/${BASE_URI}/${PATH_CONSTANTS.DASHBOARD}/${PATH_CONSTANTS.USER}`
  },
  { name: 'Help', href: '/' },
  { name: 'About', href: '/' }
];
