import Link from "next/Link";
import Class from "./BaseButton.module.css";
const BaseButton = function (props) {
  if (props.mode === "button") {
    return (
      <button className={Class["ghost"]} type={props.type}>
        {props.children}
      </button>
    );
  } else if (props.mode === "anchor") {
    return (
      <Link href={props.to}>
        <a className={Class["ghost"]}>{props.children}</a>
      </Link>
    );
  }
};

export default BaseButton;
