import darwinProfile from '../../assets/darwin-profile.png';
import drewProfile from '../../assets/drew-profile.png';
import graigProfile from '../../assets/graig-profile.png';
import harperProfile from '../../assets/harper.png';
import kylaProfile from '../../assets/kyla.png';
import lucasProfile from '../../assets/lucas-profile.png';
import trevorProfile from '../../assets/trevor.png';
import { TeamProfileItem } from './teamProfilesTypes';

export const teamProfiles: TeamProfileItem[] = [
  {
    name: 'Darwin Johnson',
    role: 'Founder',
    photo: darwinProfile,
  },
  {
    name: 'Graig Peterson',
    role: 'Founder',
    photo: graigProfile,
  },
  {
    name: 'Drew Ross',
    role: 'Frontend Engineer',
    photo: drewProfile,
  },
  {
    name: 'Kyla Oyamot',
    role: 'UX/UI Engineer',
    photo: kylaProfile,
  },
  {
    name: 'Lucas Greenwell',
    role: 'Product Manager',
    photo: lucasProfile,
  },
  {
    name: 'Trevor Martin',
    role: 'Backend Engineer',
    photo: trevorProfile,
  },
  {
    name: 'Harper Atlas',
    role: 'UX Designer',
    photo: harperProfile,
  },
];
