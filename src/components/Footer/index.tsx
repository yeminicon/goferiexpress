import { Image } from "@nextui-org/react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import navbarLogo from "@/assets/goferLogo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pb-5 flex md:w-[1100px]  w-[350px] md:p-0 ml-12 md:mx-auto flex-col pt-4">
      <div className="mt-5 md:p-1 p-0  bg-[#ffffff] w-full h-[100%] ">
        <div className="flex flex-col md:flex-row justify-between w-[100%] mx-auto">
          <div>
            <Image className="bg-[#0e2993] w-[150px] md:w-[100px]"  src={navbarLogo} />
            <p className="text-[1rem] mt-2">Welcome to skills market</p>
          </div>
          <div>
            <ul>
              <li className="font-black my-3 ">Company</li>
              <li className="font-medium text-[1rem] text-left text-[#9095AO]">About Us</li>
              <li className="font-medium text-[1rem] text-left text-[#9095AO]">Stores</li>
              <li className="font-medium text-[1rem] text-left text-[#9095AO]">Categories</li>
              <li className="font-medium text-[1rem] text-left text-[#9095AO]">Contact</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-black my-3">Legal</li>
              <li className="font-medium text-[1rem] text-left text-[#9095AO]">Legal Notice</li>
              <li className="font-medium text-[1rem] text-left text-[#9095AO]">Privacy Policy</li>
              <li className="font-medium text-[1rem] text-left text-[#9095AO]">Terms of Use</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-black my-3">Follow us</li>
              <li className="flex flex-row">
                <FaFacebook className="mx-1" />
                <FaTwitter className="mx-1" />
                <FaInstagram className="mx-1" />
                <FaLinkedin className="mx-1" />
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-9" />
        <div className=" w-full flex h-[80px] bg-gray.100 m-auto">
          <p className="mt-3 w-full text-center">
            &copy; {currentYear} Goferiexpressng. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
