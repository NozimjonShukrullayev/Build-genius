import { Container } from "../../components/Container/Container";
import projectImg from "../../../src/assets/projects.53437eda10adf8ee97f3.webp";
import projectImg2 from "../../../src/assets/project.90d0ad1f2b01cab38a88.webp";
import projectImg3 from "../../../src/assets/prezident.39ffbd8cd3007f491559.webp";
import projectImg4 from "../../../src/assets/school.40d7b4718a3ea2005b09.webp";
import projectImg5 from "../../../src/assets/image.55d1ad86051dd5af382b.webp";
import projectImg6 from "../../../src/assets/image1.59ddf8dcd5ee2719efdc (1).webp";
import { useTranslation } from "react-i18next";
import "./style.scss";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="projects">
      <Container>
        <a className="anchor" id="projects"></a>
        <h2 className="projects-title"> {t("ourProjects")}</h2>
        <ul className="projects-ul">
          <li className="projects-list">
            <img className="projects-img" src={projectImg} alt="" />
            <div className="projects-box">
              <h3 className="projects-ul-title">Magic City</h3>
              <p className="projects-text">{t("ProjectsText")}</p>
            </div>
          </li>

          <li className="projects-list">
            <img className="projects-img" src={projectImg2} alt="" />
            <div className="projects-box">
              <h3 className="projects-ul-title">Gardens Residence</h3>
              <br />
              <p className="projects-text">{t("ProjectsText2")}</p>
            </div>
          </li>

          <li className="projects-list">
            <img className="projects-img" src={projectImg3} alt="" />
            <div className="projects-box">
              <h3 className="projects-ul-title">Fonon</h3>
              <p className="projects-text">{t("ProjectsText3")}</p>
            </div>
          </li>

          <li className="projects-list">
            <img className="projects-img" src={projectImg4} alt="" />
            <div className="projects-box">
              <h3 className="projects-ul-title">Invento</h3>
              <p className="projects-text">{t("ProjectsText4")}</p>
            </div>
          </li>

          <li className="projects-list">
            <img className="projects-img" src={projectImg5} alt="" />
            <div className="projects-box">
              <h3 className="projects-ul-title">Presidential School</h3>
              <p className="projects-text">{t("ProjectsText5")}</p>
            </div>
          </li>

          <li className="projects-list">
            <img className="projects-img" src={projectImg6} alt="" />
            <div className="projects-box">
              <h3 className="projects-ul-title">Boulevard</h3>
              <p className="projects-text">{t("ProjectsText6")}</p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};
