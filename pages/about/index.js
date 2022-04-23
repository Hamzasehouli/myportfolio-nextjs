import BasePage from "../../components/BasePage";
import BaseButton from "../../components/BaseButton";
import { useState } from "react";
import { TECHNOS as technos } from "../../data/techsList";
import { MyStory } from "../../data/myStory";
const About = function () {
  const [list, setList] = useState(technos);
  const [suite, setSuite] = useState(false);
  const [active, setActive] = useState("all");
  let markup = list.map((t) => (
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
      <p className={!suite ? "suite" : ""}>{MyStory}</p>
      <BaseButton
        onClick={() => setSuite(!suite)}
        mode="button"
        type="button"
        state="antighost"
      >
        {suite ? "Collapse" : "Read more . . ."}
      </BaseButton>
      <p>Here are a few technologies I’ve been working with recently:</p>
      <ul className="menu">
        <li>
          <button
            className={active === "all" && "active"}
            onClick={() => {
              setList(technos);
              setActive("all");
            }}
            type="button"
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setList(technos.filter((t) => t.category === "frontend"));
              setActive("frontend");
            }}
            className={active === "frontend" && "active"}
            type="button"
          >
            Frontend
          </button>
        </li>
        <li>
          <button
            className={active === "backend" && "active"}
            onClick={() => {
              setList(technos.filter((t) => t.category === "backend"));
              setActive("backend");
            }}
            type="button"
          >
            Backend
          </button>
        </li>
        <li>
          <button
            className={active === "devops" && "active"}
            onClick={() => {
              setList(technos.filter((t) => t.category === "devops"));
              setActive("devops");
            }}
            type="button"
          >
            DevOps
          </button>
        </li>
        <li>
          <button
            className={active === "uiux" && "active"}
            onClick={() => {
              setList(technos.filter((t) => t.category === "uiux"));
              setActive("uiux");
            }}
            type="button"
          >
            Ui/UX
          </button>
        </li>
        <li>
          <button
            className={active === "database" && "active"}
            onClick={() => {
              setList(technos.filter((t) => t.category === "database"));
              setActive("database");
            }}
            type="button"
          >
            Database{" "}
          </button>
        </li>
        <li>
          <button
            className={active === "mobile" && "active"}
            onClick={() => {
              setList(technos.filter((t) => t.category === "mobile"));
              setActive("mobile");
            }}
            type="button"
          >
            Mobile
          </button>
        </li>
        <li>
          <button
            className={active === "others" && "active"}
            onClick={() => {
              setList(technos.filter((t) => t.category === "others"));
              setActive("others");
            }}
            type="button"
          >
            Others
          </button>
        </li>
      </ul>
      <div>
        <ul className="techs">{markup}</ul>
      </div>
    </BasePage>
  );
};

export default About;
