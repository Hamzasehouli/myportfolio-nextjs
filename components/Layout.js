import MainNav from "./MainNav";
// import { Fragment } from "react";
import BaseSection from "./BaseSection";
const Layout = function (props) {
  return (
    <div>
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
            <a href="#">
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
            <a href="#">
              <svg className="icon">
                <use href="/sprite.svg#icon-docker"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/sprite.svg#icon-codepen"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/sprite.svg#linkedin"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/sprite.svg#icon-medium"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon">
                <use href="/sprite.svg#icon-youtube"></use>
              </svg>
            </a>
          </li>
        </ul>
      </main>
      <footer>
        <BaseSection>footer</BaseSection>
      </footer>
    </div>
  );
};

export default Layout;
