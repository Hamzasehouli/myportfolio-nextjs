import MainNav from "./MainNav";
// import { Fragment } from "react";
const Layout = function (props) {
  return (
    <div>
      <header>
        <MainNav />
      </header>
      <main>{props.children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
