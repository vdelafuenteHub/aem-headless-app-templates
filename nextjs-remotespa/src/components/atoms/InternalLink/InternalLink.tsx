import { Link } from '@/ui/components/molecules/Link';
import { classNames as cn } from '@/ui/utils';
import NextLink from 'next/link';

import { InternalLinkProps } from './types';

const InternalLink = ({
  className,
  href,
  as,
  passHref,
  prefetch,
  replace,
  scroll,
  shallow,
  locale,
  ...restProps
}: InternalLinkProps) => (
  <NextLink
    href={href}
    as={as}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    passHref
    prefetch={prefetch}
    locale={locale}
  >
    <Link
      className={cn('internal-link', className)}
      href={href}
      {...restProps}
    />
  </NextLink>
);

export default InternalLink;
