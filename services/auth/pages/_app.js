import "@/styles/globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { AuthBanner } from '@auth0-nextjs-example/service-components';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <AuthBanner />
      <Component {...pageProps} />
    </UserProvider>
  );
}
