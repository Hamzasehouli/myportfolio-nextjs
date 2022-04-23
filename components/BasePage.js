import Classes from "./BasePage.module.css";
import Transition from "./Transition";
const BasePage = function (props) {
  return (
    <Transition>
      <h1 className={Classes.title}>{props.title}</h1>
      <p className={Classes.description}>{props.children}</p>
    </Transition>
  );
};

export default BasePage;
