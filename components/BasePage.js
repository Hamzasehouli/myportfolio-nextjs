import Classes from "./BasePage.module.css";
import Transition from "./Transition";
const BasePage = function (props) {
  return (
    <Transition>
      <h1 className={Classes.title}>{props.title}</h1>
      <section className={Classes.description}>{props.children}</section>
    </Transition>
  );
};

export default BasePage;
