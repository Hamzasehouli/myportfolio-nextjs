import BasePage from "../../components/BasePage";
import Link from "next/link";
import { portfolio } from "../../data/portfolio";

const Work = function () {
  const Markup = portfolio.map((w) => {
    return (
      <Link passHref href={`/work/${w.title.toLocaleLowerCase()}`}>
        <li className="work-item" key={w.id}>
          <h2>{w.title}</h2>
        </li>
      </Link>
    );
  });
  return (
    <BasePage title="My achievments">
      <ul className="work-list">{Markup}</ul>
    </BasePage>
  );
};

export default Work;
