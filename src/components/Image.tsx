import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ImageProps {
  src: string;
  alt?: string;
  fluid?: boolean;
  rounded?: boolean;
  thumbnail?: boolean;
}

const Image: React.FC<ImageProps> = ({ src, alt = '', fluid, rounded, thumbnail }) => {
  let classes = '';
  if (fluid) classes += ' img-fluid';
  if (rounded) classes += ' rounded';
  if (thumbnail) classes += ' img-thumbnail';
  return <img src={src} alt={alt} className={classes.trim()} />;
};

export default Image;
