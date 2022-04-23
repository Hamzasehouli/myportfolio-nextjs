import Classes from "./Transition.module.css";
const Transition = function (props) {
  return <div className={Classes.transition}>{props.children}</div>;
};
export default Transition;
