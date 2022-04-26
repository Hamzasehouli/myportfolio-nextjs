import Classes from "./Footer.module.css";
import BaseSection from "./BaseSection";

const Footer = function () {
  return (
    <footer className={Classes.footer}>
      <BaseSection>
        <ul className="icons-footer">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Hamzasehouli"
            >
              <svg className="icon-footer">
                <use href="/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="icon-footer">
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
              <svg className="icon-footer">
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
              <svg className="icon-footer">
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
              <svg className="icon-footer">
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
              <svg className="icon-footer">
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
              <svg className="icon-footer">
                <use href="/sprite.svg#icon-youtube"></use>
              </svg>
            </a>
          </li>
        </ul>
        <p>Designed & developed by Hamza Sehouli</p>
      </BaseSection>
    </footer>
  );
};
export default Footer;
