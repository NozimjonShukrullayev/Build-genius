import { useTranslation } from "react-i18next";
import pht from "../../../src/assets/city1.51e44d49b1c61434ca07 (1).jpeg";
import { Container } from "../../components/Container/Container";
import "./style.scss";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <a className="anchor" id="home"></a>

      <div className="hero-box">
        <img className="hero-img" src={pht} alt="" />
      </div>
      <Container>
        <div className="hero-wrapper">
          <h1 className="hero-title">
            ATAEV <br /> BAHODIR BUILD
          </h1>
          <p className="hero-text"> {t("allelement")}</p>
          <div className="hero-btn-box">
            <a href="#projects">
              <button className="hero-btn">{t("btnProject")}</button>
            </a>

            <a href="tel:+998935155040">
              <button className="hero-btn">{t("contactBtn")}</button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
