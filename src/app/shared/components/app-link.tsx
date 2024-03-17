import Link from 'next/link';
import { ReactNode } from 'react';
import { UrlObject } from 'url';

export function AppLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string | UrlObject;
}) {
  return <Link href={href}>{children}</Link>;
}
