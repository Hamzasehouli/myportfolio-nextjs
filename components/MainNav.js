import Class from "./MainNav.module.css";
import Link from "next/link";
import BaseButton from "./BaseButton";
import Image from "next/image";
const MainNav = function (props) {
  return (
    <nav className={Class.nav}>
      <Link href="/" passHref>
        <a>
          <Image
            alt="Hamza Sehouli portfolio logo"
            width={70}
            height={70}
            className="logo"
            src="/Logo.svg"
          />
        </a>
      </Link>
      <ul className={Class.list}>
        <li>
          <BaseButton mode="anchor" state="ghost" to="/about">
            About
          </BaseButton>
        </li>
        <li>
          <BaseButton mode="anchor" state="ghost" to="/work">
            Work
          </BaseButton>
        </li>
        <li>
          <BaseButton mode="anchor" state="ghost" to="/contact">
            Contact
          </BaseButton>
        </li>
        <li>
          <BaseButton to="/cv-hamza-sehouli.pdf" mode="standard" state="flat">
            Resume
          </BaseButton>
        </li>
      </ul>
      <div className={Class.hamburger}>
        <span className={Class["hamburger_unity"]}></span>
      </div>
    </nav>
  );
};

export default MainNav;
