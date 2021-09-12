import Layout from "../components/layout";
import { useRouter } from "next/router";
import Head from "next/head";
import settings from "../data/settings.json";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router.asPath;
  const { title } = settings.app;

  const concatTitle = title[path] + "Blake Madigan";

  return (
    <>
      <Head>
        <title>{concatTitle}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
