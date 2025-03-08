import { Container } from "../../components/Container/Container";
import meetingImg from "../../assets/bg-company.jpg";
import { useTranslation } from "react-i18next";
import "./style.scss";

export const Meeting = () => {
  const { t } = useTranslation();

  return (
    <section className="meeting">
      <Container>
        <h3 className="meeting-name">{t("AboutName")}</h3>
        <div className="meeting-box">
          <p className="meeting-text">{t("ImgText")}</p>
          <img className="meeting-img" src={meetingImg} alt="" />
        </div>
      </Container>
    </section>
  );
};
