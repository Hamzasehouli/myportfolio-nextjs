import Class from "./MainNav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const MainNav = function (props) {
  const router = useRouter();
  return (
    <nav className={Class.nav}>
      <p>LOGO</p>
      <ul className={Class.list}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/work">Contact</Link>
        </li>
        <button>Resume</button>
      </ul>
    </nav>
  );
};

export default MainNav;
