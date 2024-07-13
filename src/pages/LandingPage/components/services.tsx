import { Image, Button } from "@nextui-org/react";
import React from "react";
import hero from "@/assets/handshake.svg";
import multitask from "@/assets/multitask.png";
import social from "@/assets/office.png";
type Props = {};

const Services = (props: Props) => {
  return (
    <div className="w-[90%] mt-40 mx-auto">
      <div className="mx-auto w-[160px] font-bold">
        <h1 className="font-bold text-2xl">Our Services</h1>
      </div>
      <hr className="mx-auto w-[120px]" />

      <div className="flex md:flex-row flex-col my-20 sm:w-[100%] md:max-w-[1100px] mx-auto ">
        <div className="w-[90%] mx-auto md:mx-0 md:w-50% max-w-[700px]">
          <div className="rounded-lg ">
            <img
              src={hero}
              className="ml-0 w-[500px] md:w-[600px] h-[500px] mx-auto md:mx-o md:h-[600px]"
            />
          </div>
        </div>
        <div className="w-50% rounded-lg flex flex-col justify-between max-w-[500px] h-[500px] ml-10">
          <div className="mt-[50px]">
            <h1 className="font-bold text-[2rem] mb-3">Experience Excellence in Service</h1>
            <p className="text-[1.25rem] mt-3">
              Discover our team's commitment to exceptional service. Comprising skilled
              professionals from diverse backgrounds, we bring extensive hands-on experience to
              every project. Let us ease your burden by connecting you with a curated list of eager
              professionals ready to assist you.
            </p>
          </div>
          <Button variant="bordered" className="w-[200px] shadow-lg">
            <p className="font-bold text-[0.85rem]">Learn more</p>
          </Button>
        </div>
      </div>

      <div className="flex md:flex-row flex-col my-[200px] sm:w-[100%] md:max-w-[1100px] mx-auto">
        <div className="w-50% rounded-lg flex flex-col justify-between max-w-[500px] ml-10">
          <div className="mt-[50px]">
            <h1 className="font-bold text-[1.5rem] mb-3">Focus on What Matters, Trust the Pros</h1>
            <p className="text-[1.25rem] mt-3">
              Streamline your operations by entrusting tasks to our dedicated professionals. With a
              wealth of expertise and a commitment to excellence, we handle the complexities,
              allowing you to concentrate on your core priorities. Discover peace of mind with our
              reliable service.
            </p>
          </div>
          <Button variant="bordered" className="w-[200px] shadow-lg md:mt-0 mt-10">
            <p className="font-bold text-[0.85rem]">Learn more</p>
          </Button>
        </div>
        <div className="w-[100%] mx-auto md:mx-0 md:w-50% max-w-[700px] md:mt-0 mt-20">
          <div className="rounded-lg  ">
            <Image src={multitask} sizes="cover" width="700px" height="400px" className="ml-0" />
          </div>
        </div>
      </div>

      <div className="mx-auto w-[300px] font-bold">
        <h1 className="font-bold text-2xl">Relationship Management</h1>
      </div>

      <div className="flex md:flex-row flex-col my-20 sm:w-[100%] md:max-w-[1100px] mx-auto ">
        <div className="w-[100%] mx-auto md:mx-0 md:w-50% max-w-[700px]">
          <div className="rounded-lg ">
            <Image src={social} sizes="cover" width="500px" height="400px" className="ml-0" />
          </div>
        </div>
        <div className="w-50% rounded-lg flex flex-col justify-between max-w-[500px] ml-10">
          <div className="mt-[50px]">
            <h1 className="font-bold text-[1.5rem] mb-3">Relaxation Policies</h1>
            <p className="text-[1.25rem] mt-3">
              Our team offers unparalleled relaxation policies, featuring a talented group of
              professionals with extensive experience from various fields. Reduce your stress and
              connect with professionals ready to assist you.
            </p>
          </div>
          <Button variant="bordered" className="w-[200px] shadow-lg md:mt-0 mt-10 ">
            <p className="font-bold text-[0.85rem]">Work with us</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
