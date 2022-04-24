import MainNav from "./MainNav";
import Footer from "./Footer";
import BaseSection from "./BaseSection";
import { useRouter } from "next/router";
import Head from "next/head";
const Layout = function (props) {
  const router = useRouter();
  let footer = router.pathname !== "/" ? <Footer></Footer> : "";
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/Logo.svg" />
        <meta
          name="description"
          content="Hamza Sehouli, fullstack web and mobile developer based in Tangier morocco"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, sass, node.js, next.js, react-native, react.js, laravel, PHP,vue.js, next.js docker,express.js, mongo, mongoose"
        />
        <meta name="author" content="Hamza Sehouli" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hamza Sehouli</title>
      </Head>
      <header>
        <BaseSection>
          <MainNav />
        </BaseSection>
      </header>
      <main>
        <BaseSection>
          <div className="base-main">{props.children}</div>
        </BaseSection>
        <ul className="icons">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Hamzasehouli"
            >
              <svg className="icon">
                <use href="/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/sprite.svg#icon-twitter"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://hub.docker.com/u/hamzasehouli"
            >
              <svg className="icon">
                <use href="/sprite.svg#icon-docker"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://codepen.io/sh-hamza"
            >
              <svg className="icon">
                <use href="/sprite.svg#icon-codepen"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/hamzasehouli/"
            >
              <svg className="icon">
                <use href="/sprite.svg#linkedin"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://medium.com/@sehouli.hamza"
            >
              <svg className="icon">
                <use href="/sprite.svg#icon-medium"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UC6ROqFB77uZr14lwMm0CmAw"
            >
              <svg className="icon">
                <use href="/sprite.svg#icon-youtube"></use>
              </svg>
            </a>
          </li>
        </ul>
      </main>
      {footer}
    </>
  );
};

export default Layout;
