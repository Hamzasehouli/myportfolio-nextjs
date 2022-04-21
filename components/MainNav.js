import Class from "./MainNav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import BaseButton from "./BseButton";
const MainNav = function (props) {
  const router = useRouter();
  return (
    <nav className={Class.nav}>
      <p>LOGO</p>
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
          <BaseButton type="button" mode="button" state="ghost">
            Resume
          </BaseButton>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
