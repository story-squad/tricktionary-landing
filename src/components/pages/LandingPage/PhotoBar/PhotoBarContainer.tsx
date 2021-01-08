import React from 'react';
import { photos } from '../../../../data';
import RenderPhotoBar from './RenderPhotoBar';

const PhotoBarContainer = (): React.ReactElement => {
  return <RenderPhotoBar list={photos} />;
};

export default PhotoBarContainer;
