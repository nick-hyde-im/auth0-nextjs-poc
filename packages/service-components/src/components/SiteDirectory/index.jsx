import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const SiteDirectory = () => {
  const { user, error, isLoading } = useUser();

  return (
    <>
      {!isLoading && !user && (
        <p className="mb-4 text-center">
          Click the login button in the banner to log in via Auth0.
          <br />
          Many of the endpoints below will not be accessible until you are authenticated.
        </p>
      )}
      <table className="table-auto w-full text-left border-collapse border border-gray-200">
        <tbody>
          {[
            { href: "/protected-ssr-page", description: "A protected server side rendered page." },
            { href: "/protected-csr-page", description: "A protected client side rendered page." },
            { href: "/protected-form", description: "A form example that posts to a protected bff endpoint." },
            { href: "/protected-static-js", description: "A page that loads a custom static JavaScript file." },
            { href: "/api/articles/example-get-endpoint", description: "A public bff get endpoint." },
            { href: "/api/articles/protected-get-endpoint", description: "A protected bff get endpoint. This will fail as it's not going via the auth proxy and doesn't include an Authorization header." },
            { href: "/api/auth/api/articles/protected-get-endpoint", description: "A protected bff endpoint example - via an auth proxy endpoint." },
            { href: "/api/articles/optional-jwt-check-get-endpoint", description: "An endpoint that optionally checks for an Authorization header. If present the token will be authenticated, and a auth object that contains the user data from the token is added to the express request. As this doesn't go via the auth proxy endpoint, the user is null as there was no Authorization header." },
            { href: "/api/auth/api/articles/optional-jwt-check-get-endpoint", description: "Same as above. As this does go via the auth proxy endpoint, the user is returned in the response as there was an Authorization header." },
            { href: "/api/auth/me", description: "Auth0 user profile information." },
          ].map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              <td className="border border-gray-200 p-2">
                <a href={row.href} className="text-blue-500 hover:underline">{row.href}</a>
              </td>
              <td className="border border-gray-200 text-black p-2">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SiteDirectory;