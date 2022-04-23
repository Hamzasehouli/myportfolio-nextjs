import Class from "./MainNav.module.css";
import Link from "next/Link";
import { useRouter } from "next/router";
import BaseButton from "./BaseButton";
import Image from "next/image";
const MainNav = function (props) {
  const router = useRouter();
  return (
    <nav className={Class.nav}>
      <Link href="/">
        <Image
          alt="Hamza Sehouli portfolio logo"
          width={70}
          height={70}
          className="logo"
          src="/Logo.svg"
        />
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
          <BaseButton to="/cv-hamza.sehouli.pdf" mode="anchor" state="flat">
            Resume
          </BaseButton>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
