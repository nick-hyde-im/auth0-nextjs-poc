import "@/styles/globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Layout } from '@auth0-nextjs-example/service-components';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
