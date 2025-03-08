import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "../../components/Container/Container";
import sliderImg from "../../../src/assets/house1.6506c5f9ebc7179c4e1b (1).jpg";
import sliderImg2 from "../../../src/assets/house2.496bd7ea5a38fd64835b (1).jpg";
import sliderImg3 from "../../../src/assets/house3.84b231f0b8621e4984d8.jpg";
import sliderImg4 from "../../../src/assets/house4.5271b2a77e32b5cd8eb7.jpg";
import sliderImg5 from "../../../src/assets/house5.de4d959177742b856d4d.jpg";
import sliderImg6 from "../../../src/assets/house6.0f044c074c3e400f1049.jpg";
import { useTranslation } from "react-i18next";
import "./style.scss";

export const Dream = () => {
  let sliderRef = useRef(null);

  const { t } = useTranslation();

  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  var settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="dream">
      <Container>
        <h2 className="dream-title"> {t("homes")}</h2>
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          <div className="dream-card">
            <img className="dream-img" src={sliderImg} alt="" />
          </div>
          <div className="dream-card">
            <img className="dream-img" src={sliderImg2} alt="" />
          </div>
          <div className="dream-card">
            <img className="dream-img" src={sliderImg3} alt="" />
          </div>
          <div className="dream-card">
            <img className="dream-img" src={sliderImg4} alt="" />
          </div>
          <div className="dream-card">
            <img className="dream-img" src={sliderImg5} alt="" />
          </div>
          <div className="dream-card">
            <img className="dream-img" src={sliderImg6} alt="" />
          </div>
        </Slider>
      </Container>
    </section>
  );
};
