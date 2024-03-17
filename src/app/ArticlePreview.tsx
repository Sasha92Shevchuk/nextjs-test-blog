'use client';

import { useEffect, useState } from 'react';
import { AppLink } from './shared/components/app-link';
import { ROUTING } from './routing';

type ArticlePreviewProps = {
  name: string;
  text: string;
};

const getLikeKey = (articleName: string) =>
  `nextjs_test_blog_like_${articleName}`;

export default function ArticlePreview({ name, text }: ArticlePreviewProps) {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    const likeKey = getLikeKey(name);
    const likeValue = localStorage.getItem(likeKey);
    setLiked(likeValue === 'like');
  }, [name]);

  const like = () => {
    const likeKey = getLikeKey(name);
    localStorage.setItem(likeKey, 'like');
    setLiked(true);
  };

  return (
    <>
      <AppLink href={ROUTING.article(name)}>{text}</AppLink>
      <button onClick={like} className="bg-green-600" type="button">
        {liked ? 'liked' : 'like'}
      </button>
    </>
  );
}
