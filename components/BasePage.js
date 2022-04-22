import Classes from "./BasePage.module.css";
const BasePage = function (props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </>
  );
};

export default BasePage;
