import Link from "next/Link";
import Classes from "./BaseButton.module.css";
const BaseButton = function (props) {
  if (props.buttonType === "button") {
    return (
      <button className={Classes[props.state]} type={props.type}>
        {props.children}
      </button>
    );
  } else if (props.buttonType === "anchor") {
    return (
      <Link className={Classes[props.state]} href={props.to}>
        {props.children}
      </Link>
    );
  }
};

export default BaseButton;
