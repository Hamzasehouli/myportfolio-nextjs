import Class from "./BaseSection.module.css";
const BaseSection = function (props) {
  return <div className={Class.page}>{props.children}</div>;
};

export default BaseSection;
