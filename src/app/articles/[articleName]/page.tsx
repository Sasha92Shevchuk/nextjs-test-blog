import { getArticleByName } from '@/app/(server)/api';

export default async function ArticlePage(props: Params) {
  const { params } = props;
  const { articleName } = params;
  const article = await getArticleByName(articleName);
  return (
    <>
      <h1>{article.header}</h1>
      {article.text.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </>
  );
}

// export default function ArticlePage({ params }: Params) {
//   const { articleName } = params;

//   return <div>This is article: {articleName}</div>;
// }
