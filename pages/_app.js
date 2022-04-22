import "../styles/globals.css";
import Layout from "../components/Layout";
import { useLayoutEffect, useState } from "react";
import Image from "next/image";
function MyApp({ Component, pageProps }) {
  const [start, setStart] = useState(
    <div className="splash">
      <Image width={100} height={100} src="/Logo.svg" />
    </div>
  );

  setTimeout(() => {
    setStart(
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }, 3000);
  // useLayoutEffect(() => {}, [start]);

  return start;
}

export default MyApp;
