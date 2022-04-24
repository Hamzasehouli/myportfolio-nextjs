import BaseButton from "../components/BaseButton";
import BasePage from "../components/BasePage";
const Home = function () {
  return (
    <section className="hero">
      <h1 className="name">Hamza Sehouli</h1>
      <h2 className="identity">Fullstack web and mobile developer</h2>
      <figure className="description">
        Who turns ideas into reality with web and mobile technologies.
      </figure>
      {/* <BaseButton mode="button" type="button" state="empty">
          Read my wrtings
        </BaseButton> */}
    </section>
  );
};

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       products,
//     },
//   };
// }
// export async function getStaticProps() {
//   return {
//     props: {
//       products,
//     },
//   };
// }

export default Home;
