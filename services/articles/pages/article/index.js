import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const Article = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Article Page</h1>
      <p>This is the article page.</p>
      <p>User: {user ? user.name : 'Unknown'}</p>
    </div>
  );
};

export default Article;