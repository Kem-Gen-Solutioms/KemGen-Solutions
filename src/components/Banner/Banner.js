import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Banner.module.css";

const images = [
  {
    src: require("../../assets/livethreat.jpg"),
    alt: "Threat_Map",
    text: "Want to know the Targeted states?, Check our live threat Map",
    buttonLabel: "VIEW LIVE THREAT MAP",
    buttonLink: "https://threatmap-chi.vercel.app/"
  },
  {
    src: require("../../assets/10.jpeg"),
    alt: "Image 2",
    text: "HIPAA-Compliant Security for Medical Practices",
    buttonLabel: "LEARN MORE",
    buttonLink: "/hipaa-compliance",
  },
  {
    src: require("../../assets/om0.jpeg"),
    alt: "Image 2",
    text: "top Ransomware Before It Stops Your Practice",
    buttonLabel: "GET PROTECTED",
    buttonLink: "/pricing",
  },
  {
    src: require("../../assets/6.jpg"),
    alt: "Image 2",
    text: "Find Vulnerabilities Before Hackers Do",
    buttonLabel: "SCHEDULE TEST",
    buttonLink: "/ContactUs",
  },
];

const PreviousArrow = ({ onClick }) => (
  <div className={styles.prevArrow} onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} size="2x" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className={styles.nextArrow} onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} size="2x" />
  </div>
);

const Banner = () => {
  const navigate = useNavigate();

  const handleButtonClick = (link) => {
    navigate(link);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: () => {},
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className={styles.bannerContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image.src} alt={image.alt} className={styles.slideImage} />
            <div className={styles.overlay}>
              <p className={styles.text}>{image.text}</p>
              <button
                className={`btn custom_btn ${styles.btn}`}
                onClick={() => handleButtonClick(image.buttonLink)}
              >
                {image.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
