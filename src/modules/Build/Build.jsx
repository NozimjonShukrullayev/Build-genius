import { Link } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { useTranslation } from "react-i18next";
import { MainContext } from "../MainContext/MainContext";
import { useContext } from "react";
import "./style.scss";

export const Build = () => {
  const { t } = useTranslation();

  const { toggleTheme } = useContext(MainContext);

  return (
    <section className="build">
      <Container>
        <div className="build-box">
          <p className="build-subname">ATAEV BAHODIR BUILD</p>
          <h2 className="build-title">ATAEV BAHODIR BUILD</h2>
          <p className="build-text">{t("BuildText")}</p>
          <Link to={"/meeting"}>
            {" "}
            <button className="build-btn" onClick={toggleTheme}>
              {t("BtnText")}
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
