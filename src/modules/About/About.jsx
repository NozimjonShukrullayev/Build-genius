import { useTranslation } from "react-i18next";
import aboutImg from "../../../src/assets/construction.74a5b49f569267df13c8.jpg";
import aboutImg2 from "../../../src/assets/news.91d41923640e2fa9a037.jpg";
import aboutImg3 from "../../../src/assets/news2.a6503f342d0d2e748340.jpg";
import aboutImg4 from "../../../src/assets/news3.44f09827240dc2fb8309.jpg";
import { Container } from "../../components/Container/Container";
import "./style.scss";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <Container>
        <a className="anchor" id="about"></a>

        <h2 className="about-title"> {t("Allnews")}</h2>
        <ul className="about-ul ">
          <li className="about-list">
            <img className="about-img" src={aboutImg} alt="" width={240} />
            <div className="about-wrapper">
              <button className="about-btn">{t("BtnText")}</button>
              <h2 className="about-wrapper-title">{t("NewsTitle")}</h2>
              <p className="about-text">{t("NewsText")}</p>
            </div>
          </li>

          <li className="about-list">
            <img className="about-img" src={aboutImg2} alt="" width={240} />
            <div className="about-wrapper">
              <button className="about-btn">{t("BtnText")}</button>
              <h2 className="about-wrapper-title">{t("NewsTitle2")}</h2>
              <p className="about-text">{t("NewsText2")}</p>
            </div>
          </li>

          <li className="about-list">
            <img className="about-img" src={aboutImg3} alt="" width={240} />
            <div className="about-wrapper">
              <button className="about-btn">{t("BtnText")}</button>
              <h2 className="about-wrapper-title">{t("NewsTitle3")}</h2>
              <p className="about-text">{t("NewsText3")}</p>
            </div>
          </li>

          <li className="about-list">
            <img className="about-img" src={aboutImg4} alt="" width={240} />
            <div className="about-wrapper">
              <button className="about-btn">{t("BtnText")}</button>
              <h2 className="about-wrapper-title">{t("NewsTitle4")}</h2>
              <p className="about-text">{t("NewsText4")}</p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};
