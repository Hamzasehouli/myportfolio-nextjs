import Link from "next/Link";
import Class from "./BaseButton.module.css";
const BaseButton = function (props) {
  if (props.mode === "button") {
    return (
      <button
        onClick={props.onClick}
        className={Class[props.state]}
        type={props.type}
      >
        {props.children}
      </button>
    );
  } else if (props.mode === "anchor") {
    return (
      <Link href={props.to}>
        <a className={Class[props.state]}>{props.children}</a>
      </Link>
    );
  }
};

export default BaseButton;
