import finalePage from '../../assets/finale-page.png';
import submitDef from '../../assets/submit-def.png';
import { PhotoItem } from './photosTypes';

export const photos: PhotoItem[] = [
  {
    caption: 'Submit your trick definition to fool others into voting for it',
    image: submitDef,
    alt: 'Submit your trickiest definition to fool the other players',
  },
  {
    caption: 'The player who gets the most points wins',
    image: finalePage,
    alt: 'Crown the player who gathered the most points',
  },
];
