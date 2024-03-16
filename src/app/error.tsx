'use client';

import { ERRORS } from './errors';

//всі errors мають бути з юзкліент

export default function HomePageError({ error }: { error: Error }) {
  if (error.message === ERRORS.NOT_FOUND) {
    return <div>Articles not found</div>;
  }
  return <div>Something went wrong</div>;
}
