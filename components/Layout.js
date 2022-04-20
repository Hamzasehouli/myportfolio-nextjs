import MainNav from "./MainNav";
const Layout = function (props) {
  return (
    <div>
      <MainNav />
      {props.children}
    </div>
  );
};

export default Layout;
