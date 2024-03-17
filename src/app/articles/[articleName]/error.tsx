'use client';

import { AppLink } from '@/app/shared/components/app-link';

export default function ArticleError() {
  return (
    <>
      <div>No articles for you</div>
      <AppLink href="/">Go Home</AppLink>
    </>
  );
}
