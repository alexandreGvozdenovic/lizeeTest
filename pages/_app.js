import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import Head from "next/head";
import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lizee</title>
      </Head>
      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
