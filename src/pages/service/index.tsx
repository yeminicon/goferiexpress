import React from "react";
import { Button, Image } from "@nextui-org/react";
import Navbar from "../LandingPage/components/navbar";
import Footer from "@/components/Footer";
import BannerSAection from "../LandingPage/components/banner";
import Banner from "@/assets/groupOfWorkers.jpg";
import Transport from "@/assets/d25kp1ml.png";

const ServicePage: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className="w-[1200px] mx-auto my-20">
        <Image src={Banner} className="w-[1100px] mx-auto" />
      </div>

      <BannerSAection />

      <div className="mx-auto w-[1100px] my-20">
        <div>
          <h1 className="text-[2rem] font-bold my-20">Gofer Logistics </h1>

          <div className="flex flex-col md:flex-row">
            <Image src={Transport} className="w-[500px]" />

            <div className="w-[500px] ml-16 flex flex-col justify-between">
              <div>
                <h1 className="font-bold text-[2rem] ">Our Logistics Trends</h1>
                <p className="text-[1rem] font-medium box-border box-content">
                  Collaborating with the best team in the realm of global logistics, we dominate the
                  world of express trading. We offer some of the most innovative trends in the field
                  of global marketing. Our proficient team ensures a user-friendly experience,
                  delivering excellence consistently.
                </p>
              </div>

              <Button className="w-[150px] text-[#075c86ec] border-[#075c86ec]" variant="bordered">
                Coming soon !
              </Button>
            </div>
          </div>

          {/* <p></p> */}

          {/* <Button variant="bordered">Learn more</Button> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
