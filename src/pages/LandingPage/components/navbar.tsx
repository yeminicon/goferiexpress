import React, { useState } from "react";
import { Button, Image } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/goferLogo.png"


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-1 box-border shadow-md sticky top-0 p-4 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold text-black">
          {/* <p className="font-bold">Logo</p> */}
          <Image src={logo} className="w-[100px] h-[50px]" />
        </div>
        
        <div className="hidden w-[60%] justify-between md:flex md:flex-row md:items-center md:space-x-8">
        <ul className="flex space-x-4 w-[450px] justify-between">
        <li className="text-black font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="text-black font-bold">
          <Link to="/service">Service</Link>
        </li>
        <li className="text-black font-bold">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="text-black font-bold">
          <Link to="/">FAQ</Link>
        </li>
        <li className="text-black font-bold">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
          <Button  variant="bordered">
            <Link to="/hire">
            <p className="font-bold text-[0.75rem]">Hire an expert</p>
            </Link>
            
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black font-bold focus:outline-none">
            ☰
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white shadow-md"
          >
            <ul className="flex flex-col items-center space-y-4 p-4">
              <li className="text-black font-bold">Home</li>
              <li className="text-black font-bold">About</li>
              <li className="text-black font-bold">Contact</li>
              <Button variant="bordered">
                <p className="font-bold text-[0.75rem]">Join the waiting list</p>
              </Button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
