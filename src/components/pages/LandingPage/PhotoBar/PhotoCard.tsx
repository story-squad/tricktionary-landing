import React from 'react';
import { PhotoItem } from '../../../../data/photos/photosTypes';

const PhotoCard = (props: PhotoItem): React.ReactElement => {
  return (
    <div className="photo-card">
      <img src={props.image} alt={props.alt} />
      <p>{props.caption}</p>
    </div>
  );
};

export default PhotoCard;
