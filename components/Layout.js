import MainNav from "./MainNav";
const Layout = function (props) {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <body>{props.children}</body>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
