import drewProfile from '../../assets/drew-profile.png';
import graigProfile from '../../assets/graig-profile.png';
import harperProfile from '../../assets/harper.jpeg';
import kylaProfile from '../../assets/kyla.jpeg';
import lucasProfile from '../../assets/lucas-profile.png';
import trevorProfile from '../../assets/trevor.png';
import { TeamProfileItem } from './teamProfilesTypes';

export const teamProfiles: TeamProfileItem[] = [
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
