import Link from "next/Link";
const BaseButton = function (props) {
  if (props.buttonType === "button") {
    return <button type={props.type}>{props.children}</button>;
  } else if (props.buttonType === "anchor") {
    return <Link href={props.to}>{props.children}</Link>;
  }
};

export default BaseButton;
