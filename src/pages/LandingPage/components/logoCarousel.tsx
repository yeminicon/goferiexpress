
import one from "../../../assets/image 279.svg";
import two from "../../../assets/image 280.svg";
import three from "../../../assets/image 281.svg";
import four from "../../../assets/image 279.svg";
import five from "../../../assets/image 280.svg";
import six from "../../../assets/image 281.svg";
import seven from "../../../assets/image 280.svg";
import { MdEngineering } from "react-icons/md";
import { GiDoctorFace } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import React from "react";
import { Image } from "@nextui-org/react";

function LogoCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    draggable: false,
    pauseOnHover: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const images = [one, two, three, four, five, six, seven];

  return (
    <div className=" my-5 h-20 bg-[#075c86ec]">
      <Slider {...settings}>
        {images.map((src: any, index: any) => (
          <div key={index} className="mx-20">
            <Image className="w-[80px]  h-[80px] "src={src} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LogoCarousel;
