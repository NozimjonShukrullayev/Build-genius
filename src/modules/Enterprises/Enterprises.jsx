import { Container } from "../../components/Container/Container";
import serviceImg from "../../../src/assets/gold.65c168a0380a930adc5f (1).png";
import serviceImg2 from "../../../src/assets/notebook.486f543adeb3860db378 (1).png";
import serviceImg3 from "../../../src/assets/car.7a9117dbe6e748aa2f12 (1).png";
import serviceImg4 from "../../../src/assets/settings.c04baf6a149ca893f9bb (1).png";
import { useTranslation } from "react-i18next";
import "./style.scss";

export const Enterprises = () => {
  const { t } = useTranslation();

  return (
    <section className="service">
      <Container>
        <h1 className="service-title"> {t("title")}</h1>
        <div className="service-box">
          <div className="service-content">
            <p className="service-text">{t("text")}</p>
            <img className="service-img" src={serviceImg} alt="" />
          </div>
          <div className="service-content">
            <p className="service-text">{t("text2")}</p>
            <img className="service-img" src={serviceImg2} alt="" />
          </div>
          <div className="service-content">
            <p className="service-text">{t("text3")}</p>
            <img className="service-img" src={serviceImg3} alt="" />
          </div>
          <div className="service-content">
            <p className="service-text">{t("text4")}</p>
            <img className="service-img" src={serviceImg4} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};
