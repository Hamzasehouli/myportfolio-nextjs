import Classes from "./BasePage.module.css";
const BasePage = function (props) {
  return (
    <>
      <h1 className={Classes.title}>{props.title}</h1>
      <p className={Classes.description}>{props.description}</p>
    </>
  );
};

export default BasePage;
