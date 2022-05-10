import Head from "next/head";
const Home = function () {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hamza Sehouli, fullstack web and mobile developer based in Tangier morocco"
        />
      </Head>
      <section className="hero">
        <h1 className="name">Hamza Sehouli</h1>
        <h2 className="identity">Fullstack web and mobile developer</h2>
        <figure className="description">
          Who turns ideas into reality with web and mobile technologies.
        </figure>
        <ul className="icons-responsive">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Hamzasehouli"
            >
              <svg className="icon-responsive">
                <use href="/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/Hamzasehouli"
            >
              <svg className="icon-responsive">
                <use href="/sprite.svg#icon-twitter"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://hub.docker.com/u/hamzasehouli"
            >
              <svg className="icon-responsive">
                <use href="/sprite.svg#icon-docker"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://codepen.io/sh-hamza"
            >
              <svg className="icon-responsive">
                <use href="/sprite.svg#icon-codepen"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/hamzasehouli/"
            >
              <svg className="icon-responsive">
                <use href="/sprite.svg#linkedin"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://medium.com/@sehouli.hamza"
            >
              <svg className="icon-responsive">
                <use href="/sprite.svg#icon-medium"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/users/18792668/hamza-sehouli"
            >
              <svg className="icon-responsive">
                <use href="/sprite.svg#icon-stackoverflow"></use>
              </svg>
            </a>
          </li>
        </ul>
        {/* <BaseButton mode="button" type="button" state="empty">
          Read my wrtings
        </BaseButton> */}
      </section>
    </>
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
