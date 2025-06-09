import { classNames as cn } from '@/ui/utils';
import { isValidElement } from 'react';
import { LoaderProps } from './types';

import styles from './Loader.module.css';

const Loader = ({
  className,
  component: Cmp = 'div',
  ...restProps
}: LoaderProps) => {
  if (!isValidElement(<Cmp />)) {
    throw new Error('Attention Loader needs a valid component property');
  }

  return (
    <Cmp
      className={cn('loader', styles.root, className)}
      role="status"
      aria-label="Loading"
      {...restProps}
    />
  );
};

export default Loader;
