import MainNav from "./MainNav";
import Footer from "./Footer";
import BaseSection from "./BaseSection";
import { useRouter } from "next/router";

const Layout = function (props) {
  const router = useRouter();
  let footer = router.pathname !== "/" ? <Footer></Footer> : "";
  return (
    <>
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
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/Hamzasehouli"
            >
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
              href="https://stackoverflow.com/users/18792668/hamza-sehouli"
            >
              <svg className="icon">
                <use href="/sprite.svg#icon-stackoverflow"></use>
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
