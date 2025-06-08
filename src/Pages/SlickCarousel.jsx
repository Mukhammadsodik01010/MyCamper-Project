import React from "react";
import Slider from "react-slick";
import { BgDivsOne, BgDivsThree, BgDivsTwo } from "../Styles/Carusel";

const MainCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <BgDivsOne>
          
        </BgDivsOne>
        <BgDivsTwo>
          
        </BgDivsTwo>
        <BgDivsThree>
          
        </BgDivsThree>
      </Slider>
    </div>
  );
}

export default MainCarousel;
