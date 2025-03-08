import { useTranslation } from "react-i18next";
import { Container } from "../../components/Container/Container";
import CountUp, { useCountUp } from "react-countup";
import "./style.scss";

export const Page = () => {
  const { t } = useTranslation();
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <section className="page">
      <Container>
        <a className="anchor" id="page"></a>
        <h2 className="page-title"> {t("ourCompany")}</h2>
        <ul className="page-ul">
          <li className="page-list">
            <h3 className="page-box">
              <span className="page-number">
                {" "}
                <CountUp start={0} end={120} duration={3} enableScrollSpy />
              </span>{" "}
              +
            </h3>
            <p className="page-text">{t("employees")}</p>
          </li>

          <li className="page-list">
            <h3 className="page-box">
              <span className="page-number">
                {" "}
                <CountUp start={0} end={43} duration={3} enableScrollSpy />
              </span>{" "}
              +
            </h3>
            <p className="page-text">{t("objects")}</p>
          </li>

          <li className="page-list">
            <h3 className="page-box">
              <span className="page-number">
                {" "}
                <CountUp start={0} end={250} duration={3} enableScrollSpy />
              </span>{" "}
              +
            </h3>
            <p className="page-text">{t("special")}</p>
          </li>

          <li className="page-list">
            <h3 className="page-box">
              <span className="page-number">
                {" "}
                <CountUp start={0} end={2} duration={10} enableScrollSpy />
              </span>{" "}
              +
            </h3>
            <p className="page-text">{t("market")}</p>
          </li>
        </ul>
      </Container>
    </section>
  );
};
