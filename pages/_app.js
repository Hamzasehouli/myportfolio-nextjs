import "../styles/globals.css";
import "../styles/about.css";
import "../styles/work.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  // const [splash, setSplash] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSplash(false);
  //   }, 3000);
  // }, []);

  // if (splash) {
  //   return (
  //     <div className="splash">
  //       <Image alt="" width={100} height={100} src="/Logo.svg" />
  //     </div>
  //   );
  // }

  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/Logo.svg" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, sass, node.js, next.js, react-native, react.js, laravel, PHP,vue.js, next.js docker,express.js, mongo, mongoose"
        />
        <meta name="author" content="Hamza Sehouli" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="google-site-verification"
          content="jQruFFKYGt6dLfyNVD91t53-oEvS1R3DMIiQCMAxxJk"
        />
        <title>Hamza Sehouli</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
