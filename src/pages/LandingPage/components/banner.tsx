// import React from "react";
// import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// import LogoCarousel from "./logoCarousel";
import { MdCategory, MdScreenSearchDesktop } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
// import { Image } from "@nextui-org/react";

const listOfOffers = [
  {
    name: "Select Category",
    content:
      "To receive an accurate recommendation, please review the list of prospective candidates.",
    img: <MdCategory size="4rem" />,
  },
  {
    name: "Screen Prospective Gofer",
    content:
      "Engage in a brief conversation to validate their suitability and ensure adherence to work ethics.",
    img: <MdScreenSearchDesktop size="4rem" />,
  },
  {
    name: "Make Payment",
    content: "Finance your project through our trusted financing partners.",
    img: <RiSecurePaymentFill size="4rem" />,
  },
];

const BannerSAection = () => {
  return (
    <div className="my-10 w-[400px] max-w-[100%] md:w-[1100px] mx-auto">
      {/* <LogoCarousel /> */}

      <h1 className="mx-auto text-center text-[#075c86ec] font-bold text-[1.25rem] md:text-[2.5rem] ">
        We make the connect easy & stress free.
      </h1>
      <p className="text-center text-[#000] text-[0.75rem] md:text-[1.25rem] font-medium my-3">
        With the right professionals things can happen. 3 easy steps
      </p>

      <div className="w-[400px] md:w-[1100px] mx-auto max-w-[100%] flex flex-col md:flex-row mt-16">
        {listOfOffers.map((offer) => (
          <div className="w-[330px] h-[300px] flex flex-col justify-between  box-border shadow-lg mx-5 p-4 rounded-lg">
            <div>
              <h1 className="text-[1.25rem] font-bold text-[#075c86ec]">{offer.name}</h1>
              <p className="text-[#000] text-[1.1rem] font-medium my-3">{offer.content}</p>
            </div>
            <div className="mx-auto "> {offer.img} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSAection;
