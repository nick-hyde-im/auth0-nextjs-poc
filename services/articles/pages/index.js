import { SiteDirectory } from '@auth0-nextjs-example/service-components';

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8 mb-8 text-gray-800">
        Next.js Auth0 SDK - Proof of Concept
      </h1>
      <p>
        This is a proof of concept for using the Next.js SDK for Auth0. The
        purpose of this project is to demonstrate how to use the Next.js SDK for
        Auth0 to create a simple application that allows users to signup, login and logout.
        It also showcases how pages and components can be protected using the SDK, and how
        a bff (backend for frontend) can handle authorization and access user information.
      </p>
      <br />
      <p>
        Link to GitHub repository:
        {' '}
        <a href="https://github.com/nick-hyde-im/auth0-nextjs-poc/tree/main" className='text-blue-500 hover:text-blue-700 underline' target='_blank' >
          auth0-nextjs-poc
        </a>
      </p>
      <br />
      <SiteDirectory />
    </div>
  );
};

Home.title = 'Home';

export default Home;
