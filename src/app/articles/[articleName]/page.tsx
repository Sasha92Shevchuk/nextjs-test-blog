export default function ArticlePage(props: Params) {
  const { params } = props;
  const { articleName } = params;

  return <div>This is article: {articleName}</div>;
}


// export default function ArticlePage({ params }: Params) {
//   const { articleName } = params;

//   return <div>This is article: {articleName}</div>;
// }