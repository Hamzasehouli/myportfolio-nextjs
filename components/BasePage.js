import Classes from "./BasePage.module.css";
const BasePage = function (props) {
  return (
    <>
      <h1 className={Classes.title}>{props.title}</h1>
      <p className={Classes.description}>{props.children}</p>
    </>
  );
};

export default BasePage;
