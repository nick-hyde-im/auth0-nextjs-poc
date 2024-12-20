import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';

const Protected = () => {
  const { user } = useUser();

  // Use state to store the data from the fetch request
  const [data, setData] = useState(null);

  useEffect(() => {
    // Make a fetch request to localhost:3000/api/articles/protected-route
    fetch('/api/auth/api/articles/protected-route')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Protected Page</h1>
      <p>This is the protected page.</p>
      {user && (
        <p>
          User: {user.name} <br />
          Email: {user.email} <br />
          Picture: <Image src={user.picture} alt={user.name} width={50} height={50} priority />
        </p>
      )}
      {data && <p>{data.message}</p>}
    </div>
  );
};

export default Protected;