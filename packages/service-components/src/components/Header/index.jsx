import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const Header = () => {
  const { user, error, isLoading } = useUser();

  return (
    <header className="w-full px-5 py-2.5 bg-gray-800 flex justify-between items-center">
      <div>
        <a href="/auth" className="text-blue-500 hover:underline">Home</a>
      </div>
      <div>
        {isLoading && <div className="text-gray-500">Loading...</div>}
        {error && <div className="text-red-500">{error.message}</div>}
        {user && <div className="text-white">Welcome {user.name}!</div>}
        {(!user && !isLoading) && <div className="text-gray-500">Not logged in</div>}
      </div>
      <div>
        {(!user && !isLoading) && (
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
    </header>
  );
}

export default Header;