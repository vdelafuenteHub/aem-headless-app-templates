import { LinkProps } from '@/ui/components/molecules/Link/types';
import { LinkProps as NextLinkProps } from 'next/link';

export type InternalLinkProps = NextLinkProps & LinkProps;
