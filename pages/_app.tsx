import Layout from "@/components/Layout";
import Head from "next/head";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@200;600&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,200;1,300;1,400&family=Roboto+Condensed:wght@300;700&family=Roboto:wght@300&display=swap" />
      </Head>
      <main className="main">
        <hr className="hr_main"/>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default App;
