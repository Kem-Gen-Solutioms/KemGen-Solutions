import React, { useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "slick-carousel/slick/slick.css";        
import "slick-carousel/slick/slick-theme.css"; 
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Banner.module.css';

const images = [

  { 
    src: require('../../assets/10.jpeg'), 
    alt: "HIPAA Compliance",
    text: "HIPAA-Compliant Security for Medical Practices",
    buttonLabel: "LEARN MORE",
    buttonLink: "/hipaa-compliance"
  },

  {
    src: require("../../assets/om0.jpeg"),
    alt: "Ransomware Protection",
    text: "Stop Ransomware Before It Stops Your Practice",
    buttonLabel: "GET PROTECTED",
    buttonLink: "/pricing",
  },
  {
    src: require("../../assets/6.jpg"),
    alt: "Penetration Testing",
    text: "Find Vulnerabilities Before Hackers Do",
    buttonLabel: "SCHEDULE TEST",
    buttonLink: "/ContactUs",
  },
  {
    src: require("../../assets/livethreat.jpg"),
    alt: "Live USA Threat Map",
    text: "Want to know the Targeted states?, Check our live threat Map",
    buttonLabel: "VIEW LIVE THREAT MAP",
    buttonLink: "https://threatmap-chi.vercel.app/"
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    beforeChange: (_current, next) => setCurrentSlide(next),
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className={styles.imgbox}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className={styles.slideImage} />
          </div>
        ))}
      </Slider>
      <div className={`${styles.center} ${styles.textContainer}`}>
        <p data-aos='fade-down' className={styles.text}>{images[currentSlide].text}</p>
        <a 
          data-aos='fade-up' 
          href={images[currentSlide].buttonLink} 
          className={`btn custom_btn ${styles.btn}`}
        >
          {images[currentSlide].buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default Banner;
