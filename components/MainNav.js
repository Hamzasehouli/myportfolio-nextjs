import Class from "./MainNav.module.css";
import Link from "next/link";
import BaseButton from "./BaseButton";
import Image from "next/image";
import { useCallback, useRef } from "react";
const MainNav = function (props) {
  const inputHidden = useRef(null);
  const toggleTheCheckedInput = useCallback(() => {
    inputHidden.current.checked = false;
  });
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
      <input
        ref={inputHidden}
        id="hidden"
        className={Class["input-hidden"]}
        type="checkbox"
      />
      <label htmlFor="hidden" className={Class.hamburger}>
        <span className={Class["hamburger_unity"]}></span>
      </label>
      <div onClick={toggleTheCheckedInput} className={Class.blur}></div>
      <ul className={Class["list-responsive"]}>
        <li onClick={toggleTheCheckedInput}>
          <BaseButton mode="anchor" state="ghost" to="/about">
            About
          </BaseButton>
        </li>
        <li onClick={toggleTheCheckedInput}>
          <BaseButton mode="anchor" state="ghost" to="/work">
            Work
          </BaseButton>
        </li>
        <li onClick={toggleTheCheckedInput}>
          <BaseButton mode="anchor" state="ghost" to="/contact">
            Contact
          </BaseButton>
        </li>
        <li>
          <BaseButton to="/cv-hamza-sehouli.pdf" mode="standard" state="ghost">
            Resume
          </BaseButton>
        </li>
        <li onClick={toggleTheCheckedInput}>
          <Link href="/" passHref>
            <a>
              <Image
                alt="Hamza Sehouli portfolio logo"
                width={70}
                height={70}
                className="logo-responsive"
                src="/Logo.svg"
              />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
