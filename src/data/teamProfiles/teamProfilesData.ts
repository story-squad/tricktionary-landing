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
    faveDef:
      "Kakorrhaphobia does NOT mean: The irrational fear of Walt Disney's psychoanalytic dream journal RED BOOK",
  },
  {
    name: 'Graig Peterson',
    role: 'Founder',
    photo: graigProfile,
    faveDef:
      'Furfural does NOT mean: the recommendation of seeing others as dogs',
  },
  {
    name: 'Drew Ross',
    role: 'Frontend Engineer',
    photo: drewProfile,
    faveDef:
      "Howdah does NOT mean: A word from Kevin Malone's vocabulary from The Office - i.e. 'howdah you play this game?",
  },
  {
    name: 'Kyla Oyamot',
    role: 'UX/UI Engineer',
    photo: kylaProfile,
    faveDef:
      "Gardyloo does NOT mean: turning your life into a musical because you're out of realistic options",
  },
  {
    name: 'Lucas Greenwell',
    role: 'Product Manager',
    photo: lucasProfile,
    faveDef:
      'Jentacular does NOT mean: Exhaustion from dancing to Gaelic music too long',
  },
  {
    name: 'Trevor Martin',
    role: 'Backend Engineer',
    photo: trevorProfile,
    faveDef: 'Flipple does NOT mean: A type of cat',
  },
  {
    name: 'Harper Atlas',
    role: 'UX Designer',
    photo: harperProfile,
    faveDef:
      'Glossanthrax does NOT mean: A game in which sewer people compete to make their pet rat go to sleep the fastest',
  },
];
