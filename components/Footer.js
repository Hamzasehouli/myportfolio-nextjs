import Classes from "./Footer.module.css";
import BaseSection from "./BaseSection";

const Footer = function () {
  return (
    <footer className={Classes.footer}>
      <BaseSection>
        <p>Designed & developed by Hamza Sehouli</p>
      </BaseSection>
    </footer>
  );
};
export default Footer;
