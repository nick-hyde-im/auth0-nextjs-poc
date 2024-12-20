import { SiteDirectory } from '@auth0-nextjs-example/service-components';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8 mb-8 text-gray-800">
        Next.js Auth0 SDK - Proof of Concept
      </h1>
      <SiteDirectory />
    </div>
  );
}
