import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const AuthBanner = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div className="w-full px-5 py-2.5 bg-gray-800 flex justify-between items-center">
      <div>
        {isLoading && <div className="text-gray-500">Loading...</div>}
        {error && <div className="text-red-500">{error.message}</div>}
        {user && <div className="text-green-500">Welcome {user.name}!</div>}
        {!user && <div className="text-gray-500">Not logged in</div>}
      </div>
      <div>
        {!user && (
          <a href="/api/auth/login" className="text-blue-500 hover:bg-blue-700 hover:text-white px-3 py-1 rounded">
            Login
          </a>
        )}
        {user && (
          <a href="/api/auth/logout" className="text-blue-500 hover:bg-blue-700 hover:text-white px-3 py-1 rounded ml-4">
            Logout
          </a>
        )}
      </div>
    </div>
  );
}

export default AuthBanner;