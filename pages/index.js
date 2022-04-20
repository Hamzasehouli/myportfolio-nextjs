import ProductsList from "../components/ProductsList";
// import { products } from "../data/data";

const products = [
  { id: "m1", title: "title1", imageUlr: "image" },
  { id: "m2", title: "title2", imageUlr: "image" },
  { id: "m3", title: "title3", imageUlr: "image" },
];

const Home = function (props) {
  console.log(props.products);
  return <ProductsList data={props.products} />;
};

export async function getServerSideProps(context) {
  return {
    props: {
      products,
    },
  };
}
// export async function getStaticProps() {
//   return {
//     props: {
//       products,
//     },
//   };
// }

export default Home;
