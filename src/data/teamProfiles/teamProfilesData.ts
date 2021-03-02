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
    faveDef: '',
  },
  {
    name: 'Graig Peterson',
    role: 'Founder',
    photo: graigProfile,
    faveDef: 'the recommendation of seeing others as dogs',
  },
  {
    name: 'Drew Ross',
    role: 'Frontend Engineer',
    photo: drewProfile,
    faveDef:
      "A word from Kevin Malone's vocabulary from The Office - i.e. 'howdah you play this game?",
  },
  {
    name: 'Kyla Oyamot',
    role: 'UX/UI Engineer',
    photo: kylaProfile,
    faveDef:
      "turning your life into a musical because you're out of realistic options",
  },
  {
    name: 'Lucas Greenwell',
    role: 'Product Manager',
    photo: lucasProfile,
    faveDef: 'Exhaustion from dancing to Gaelic music too long',
  },
  {
    name: 'Trevor Martin',
    role: 'Backend Engineer',
    photo: trevorProfile,
    faveDef: 'A type of cat',
  },
  {
    name: 'Harper Atlas',
    role: 'UX Designer',
    photo: harperProfile,
    faveDef:
      'A game in which sewer people compete to make their pet rat go to sleep the fastest',
  },
];
