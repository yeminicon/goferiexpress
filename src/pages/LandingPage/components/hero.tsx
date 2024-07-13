import { Button, Image, Input, Modal, useDisclosure } from "@nextui-org/react";
import React from "react";
import hero from "@/assets/qne3ki1o.png";
import { PiMessengerLogo, PiPhone } from "react-icons/pi";
import ChatModal from "./modal/chat";

type Props = {};

const HeroSection = (props: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="w-[90%] mx-auto my-40">
      <div className="flex md:flex-row flex-col my-20 sm:w-[100%] md:max-w-[1100px] mx-auto ">
        <div className="w-[100%] mx-auto md:mx-0 md:w-50% max-w-[700px]">
          <div className="rounded-lg ">
            <img src={hero} width="700px" height="700px" className="ml-0" />
          </div>
        </div>

        <div className="w-50% rounded-lg flex flex-col justify-between max-w-[500px] ml-20">
          <div className="mt-[0px] ">
            <h1 className="font-bold md:text-[2.5rem] text-[1.5rem] mb-3">Welcome to Goferiexpress</h1>
            <p className="text-[1.25rem] mt-3">
              Amidst the bustling world of transactions, entrust your projects to reliable
              professionals who understand your needs. Join our community of trustworthy individuals
              committed to delivering exceptional service.{" "}
            </p>
          </div>
          <Button
            variant="bordered"
            onPress={onOpen}
            startContent={<PiMessengerLogo />}
            className="w-[200px] md:mt-0 mt-10 shadow-lg"
          >
            <p className="font-bold text-[0.85rem]">Talk to us</p>
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ChatModal />
      </Modal>
    </div>
  );
};

export default HeroSection;
