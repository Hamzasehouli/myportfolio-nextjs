import BasePage from "../../components/BasePage";
import { portfolio } from "../../data/portfolio";

const Work = function () {
  const Markup = portfolio.map((w) => {
    return (
      <li key={w.id} className="work-item">
        <h2 className="title">{w.title}</h2>
        <figure
          className="work-figure"
          style={{
            backgroundImage: `url(${w.imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            objectFit: "cover",
          }}
        >
          {/* <img src="../../public/projects/img/" */}
        </figure>
        <ul style={{ margin: "1rem 0" }}>
          {w.techs.map((t) => {
            return (
              <li
                key={t.id}
                style={{
                  backgroundColor: "var(--color-secondary-light)",
                  color: "var(--color-primary)",
                  padding: "2px 9px",
                  display: "inline-block",
                  borderRadius: "100px",
                  marginRight: "12px",
                  fontSize: "1.4rem",
                  marginBottom: "1rem",
                  textTransform: "capitalize",
                }}
              >
                {t.title}
              </li>
            );
          })}
        </ul>
        <p
          style={{
            marginBottom: "auto",
          }}
        >
          {w.description}
        </p>
        <div className="links-container">
          <a href={w.github} target={"_blank"} rel="noreferrer">
            <svg className="work-icon">
              <use href="/projects/img/sprite.svg#icon-github"></use>
            </svg>
          </a>
          <a href={w.link} target={"_blank"} rel="noreferrer">
            <svg className="work-icon">
              <use href="/sprite.svg#icon-launch"></use>
            </svg>
          </a>
        </div>
      </li>
    );
  });
  return (
    <BasePage title="My achievments">
      <ul className="work-list">{Markup}</ul>
    </BasePage>
  );
};

export default Work;
