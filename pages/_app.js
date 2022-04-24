import "../styles/globals.css";
import "../styles/about.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import Image from "next/image";
function MyApp({ Component, pageProps }) {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);

  if (splash) {
    return (
      <div className="splash">
        <Image alt="" width={100} height={100} src="/Logo.svg" />
      </div>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
