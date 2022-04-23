import BasePage from "../../components/BasePage";
import BaseButton from "../../components/BaseButton";
import { useState } from "react";
import { TECHNOS as technos } from "../../data/techsList";
import { MyStory } from "../../data/myStory";

const About = function () {
  const [list, setList] = useState(technos);
  const [suite, setSuite] = useState(false);
  const [active, setActive] = useState("all");
  const menu = [
    {
      id: "m1",
      title: "all",
    },
    {
      id: "m2",
      title: "frontend",
    },
    {
      id: "m3",
      title: "backend",
    },
    {
      id: "m4",
      title: "database",
    },
    {
      id: "m5",
      title: "devops",
    },
    {
      id: "m6",
      title: "uiux",
    },
    {
      id: "m7",
      title: "mobile",
    },
    {
      id: "m8",
      title: "others",
    },
  ];
  let markup = list.map((t) => (
    <li key={t.id}>
      <a target="_blank" className="links" href={t.link}>
        {t.title}
      </a>
    </li>
  ));

  const menuButton = menu.map((m) => (
    <li>
      <button
        key={m.id}
        onClick={() => {
          setList(
            m.title !== "all"
              ? technos.filter((t) => t.category === m.title)
              : technos
          );
          setActive(m.title);
        }}
        className={active === m.title && "active"}
        type="button"
      >
        {m.title[0].toLocaleUpperCase() + m.title.slice(1)}
      </button>
    </li>
  ));

  return (
    <BasePage title="About me">
      <div className="myself">
        <p>
          I'm a Fullstack web and mobile developer Based in Tangier, Morocco. I
          like to code things from scratch and enjoy bringing ideas into real
          world projects.
          <br />
          My main focus these last months is building accessible UI/UXfriendly
          and devOps driven mobile apps with{" "}
          <a className="links" target={"_blank"} href="https://reactnative.dev">
            react-native
          </a>{" "}
          and{" "}
          <a className="links" target={"_blank"} href="https://laravel.com">
            laravel
          </a>
          .
        </p>

        <p className={!suite ? "suite" : ""}>{MyStory}</p>

        <div style={{ margin: "1.4rem 0" }}>
          <BaseButton
            onClick={() => setSuite(!suite)}
            mode="button"
            type="button"
            state="antighost"
          >
            {suite ? ". . . collapse" : "Read more . . ."}
          </BaseButton>
        </div>
      </div>
      <p style={{ marginTop: "5rem" }}>
        Here are a few technologies I’ve been working with recently:
      </p>
      <ul className="menu">{menuButton}</ul>
      <div>
        <ul className="techs">{markup}</ul>
      </div>
    </BasePage>
  );
};

export default About;
