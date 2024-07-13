import React from "react";
import { Input, Button, Textarea } from "@nextui-org/react";
import Navbar from "../LandingPage/components/navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-[400px] mx-auto max-w-[100%] md:w-[1100px]">
        <div>
          <div>
            <h1>Contact Us</h1>
            <form>
              <Input fullWidth placeholder="Enter your name" className="mb-4" />
              <Input fullWidth label="Email" placeholder="Enter your email" className="mb-4" />
              <Textarea placeholder="Your message" rows={4} cols={4} />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    

      <Footer />
    </div>
  );
};

export default ContactPage;
