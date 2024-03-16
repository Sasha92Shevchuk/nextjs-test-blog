//серверні компоненти можуть бути асинхронними

import { getAllArticles } from './(server)/api';
import { ROUTING } from './routing';
import { AppLink } from './shared/components/app-link';

export default async function Home() {
  const allArticles = await getAllArticles();

  return (
    <>
      <h1 className="text-4xl font-bold">Next app blog</h1>
      <ul>
        {allArticles.map((article) => (
          <li key={article.name}>
            <AppLink href={ROUTING.article(article.name)}>
              {article.header}
            </AppLink>
          </li>
        ))}
      </ul>
    </>
  );
}
