import { ImageProps as NextImageProps } from 'next/image';

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> &
  NextImageProps;
