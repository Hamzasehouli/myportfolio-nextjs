import MainNav from "./MainNav";
// import { Fragment } from "react";
import BaseSection from "./BaseSection";
const Layout = function (props) {
  return (
    <div>
      <header>
        <BaseSection>
          <MainNav />
        </BaseSection>
      </header>
      <main>
        <BaseSection>
          <div className="base-main">{props.children}</div>
        </BaseSection>
      </main>
      <footer>
        <BaseSection>footer</BaseSection>
      </footer>
    </div>
  );
};

export default Layout;
