import React from "react";
import styles from "./SolutionsCarousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  TechSupport,
  BackupSupport,
  EmailProtectionService,
  VOIPService,
} from "../../../../../assets";
import Slider from "react-slick";

const SolutionsCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const slides = [
    {
      image: TechSupport,
      text: "IT Consulting",
      link: "/services/itConsulting",
      width: 280,
    },
    {
      image: BackupSupport,
      text: "Backup Support",
      link: "/services/backupSupport",
      width: 280,
    },
    {
      image: VOIPService,
      text: "VOIP Service",
      link: "/services/voIP",
      width: 280,
    },
    {
      image: EmailProtectionService,
      text: "Email or Spam Protection",
      link: "/services/emailSpamProtection",
      width: 280,
    },
  ];

  return (
    <div className=" p-2 rounded m-4">
      <h4 className="text-white text-center pb-4">Solutions we offer you</h4>
      <Slider {...settings}>
        {slides?.map((slide: any, index: number) => (
          <div className="d-flex p-3">
            <div
              className={`container rounded pt-4 ${styles.servicesProvided}`}
            >
              <div className="row">
                <div key={index} className="col-lg-3 col-md-3 col-sm-6 col-xs-">
                  <div className="d-flex ps-5">
                    <a
                      className={`${styles.servicesProvided}`}
                      href={slide.link}
                    >
                      <img
                        src={slide.image}
                        width={slide.width}
                        style={{
                          height: "20vh",
                        }}
                        alt={`Image ${index + 1}`}
                        className="d-flex rounded"
                      />
                      <p className="d-flex justify-content-center fw-bold pt-2 text-white">
                        {slide.text}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SolutionsCarousel;
