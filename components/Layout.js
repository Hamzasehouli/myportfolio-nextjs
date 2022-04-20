import MainNav from "./MainNav";
// import { Fragment } from "react";
const Layout = function (props) {
  return (
    <div>
      <MainNav />
      {props.children}
    </div>
  );
};

export default Layout;
