import { classNames as cn } from '@/ui/utils';
import NextImage from 'next/image';

import { ImageProps } from './types';

const Image = ({
  className,
  alt,
  title = alt,
  width,
  height,
  ...restProps
}: ImageProps) => (
  <NextImage
    className={cn('image', className)}
    alt={alt}
    title={title}
    width={width}
    height={height}
    fill={!width || !height}
    sizes={
      !width || !height
        ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        : ''
    }
    {...restProps}
  />
);

export default Image;
