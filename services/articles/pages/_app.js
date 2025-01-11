import "@/styles/globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Layout } from '@auth0-nextjs-example/service-components';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout title={pageProps?.title || Component.title}>{page}</Layout>);

  return (
    <UserProvider>
      {getLayout(<Component {...pageProps} />)}
    </UserProvider>
  );
}
