import React from 'react';
import { PhotoItem } from '../../../../data/photos/photosTypes';
import PhotoCard from './PhotoCard';

const RenderPhotoBar = (props: RenderPhotoBarProps): React.ReactElement => {
  return (
    <div className="photo-bar">
      <h2>How to play </h2>
      <div className="photo-bar-gallery">
        {props.list.map((item, i) => (
          <PhotoCard {...item} key={i} />
        ))}
      </div>
    </div>
  );
};

interface RenderPhotoBarProps {
  list: PhotoItem[];
}

export default RenderPhotoBar;
