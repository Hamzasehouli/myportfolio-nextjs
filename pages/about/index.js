import BasePage from "../../components/BasePage";
import BaseButton from "../../components/BaseButton";
import { useState } from "react";
const technos = [
  { id: " t1", title: "HTML", link: "https://", category: "frontend" },
  { id: " t2", title: "CSS", link: "https://", category: "frontend" },
  {
    id: " t3",
    title: "SASS",
    link: "https://sass-lang.com/",
    category: "frontend",
  },
  {
    id: " t4",
    title: "Vue.js (3+)",
    link: "https://vuejs.org/",
    category: "frontend",
  },
  {
    id: " t5",
    title: "React",
    link: "https://reactjs.org/",
    category: "frontend",
  },
  {
    id: " t6",
    title: "Node.js (express.js)",
    link: "https://expressjs.com/",
    category: "backend",
  },
  {
    id: " t7",
    title: "PHP",
    link: "https://www.php.net/",
    category: "backend",
  },
  {
    id: " t8",
    title: "Laravel",
    link: "https://laravel.com/",
    category: "backend",
  },
  {
    id: " t9",
    title: "Nuxt.js",
    link: "https://nuxtjs.org/",
    category: "others",
  },
  {
    id: "t10",
    title: "Next.js",
    link: "https://nextjs.org/",
    category: "others",
  },
  {
    id: "t11",
    title: "Github",
    link: "https://github.com/",
    category: "others",
  },
  {
    id: "t12",
    title: "Docker",
    link: "https://www.docker.com/",
    category: "devOps",
  },
  {
    id: "t13",
    title: "Figma",
    link: "https://www.figma.com/",
    category: "uiux",
  },
  {
    id: "t14",
    title: "AdobeXD",
    link: "https://www.adobe.com/products/xd.html",
    category: "uiux",
  },
  {
    id: "t15",
    title: "MongoDB (mongoose)",
    link: "https://www.mongodb.com/",
    category: "database",
  },
  {
    id: "t16",
    title: "MYSQL",
    link: "https://www.mysql.com/",
    category: "database",
  },
];
const About = function () {
  let markup = technos.map((t) => (
    <li key={t.id}>
      <a target="_blank" className="links" href={t.link}>
        {t.title}
      </a>
    </li>
  ));

  return (
    <BasePage title="About me">
      <p>
        I'm a Fullstack web and mobile developer Based in Tangier, Morocco. I
        like to code things from scratch and enjoy bringing ideas into real
        world projects.
        <br />
        My main focus these last months is building accessible UI/UXfriendly and
        devOps driven mobile apps with{" "}
        <a className="links" target={"_blank"} href="https://reactnative.dev">
          react-native
        </a>{" "}
        and{" "}
        <a className="links" target={"_blank"} href="https://laravel.com">
          laravel
        </a>
        .
      </p>
      <p className="suite">
        In 2016, I was attempting to get an online appointment with the german
        consulat in Rabat to apply for stduent visa. Back then every thing was
        smooth excpet taht appointment, after just couple of seconds all the
        available appointmend listed on the consulat website g'one', this
        problem had last roughly a month without success. In the same period, I
        was self-teaching myself HTML on the famous french platform
        OPENCLASSROM, it offered a free HTML course.
        <br />
        The knowledge that I had gained during my learnig journey, helped my to
        figure out on my own how to prefill the required fileds in advance and
        remove the annoying captcha. Since then my passion for web development
        has borned and I dopted as my hobby until 2019 when I decided to make
        the web and mobile development as a professional carrer.
      </p>
      <BaseButton mode="button" type="button" state="antighost">
        Read more . . .
      </BaseButton>
      <p>Here are a few technologies I’ve been working with recently:</p>
      <ul className="menu">
        <li>
          <button
            onClick={() => setList("all")}
            className="active"
            type="button"
          >
            All
          </button>
        </li>
        <li>
          <button type="button">Frontend</button>
        </li>
        <li>
          <button type="button">Backend</button>
        </li>
        <li>
          <button type="button">DevOps</button>
        </li>
        <li>
          <button type="button">Others</button>
        </li>
      </ul>
      <div>
        <ul className="techs">{markup}</ul>
      </div>
    </BasePage>
  );
};

export default About;
