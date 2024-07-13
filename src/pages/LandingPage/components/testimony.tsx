import React from "react";
import { Avatar } from "@nextui-org/react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Akinyele Adeyemi",
    message:
      "The best feeling you can ever get by using Goferiexpress a website that feels closer to the heart than any app. I love this",
    worAt: "CEO Banny organics",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    name: "Akinyele Adeyemi",
    message:
      "The best feeling you can ever get by using Goferiexpress a website that feels closer to the heart than any app. I love this",
    worAt: "CEO Banny organics",
    img: "https://i.pravatar.cc/150?u=a04258114e29026302d",
  },
  {
    name: "Akinyele Adeyemi",
    message:
      "The best feeling you can ever get by using Goferiexpress a website that feels closer to the heart than any app. I love this",
    worAt: "CEO Banny organics",
    img: "https://i.pravatar.cc/150?u=a04258114e29026708c",
  },
  {
    name: "Akinyele Adeyemi 2",
    message:
      "The best feeling you can ever get by using Goferiexpress a website that feels closer to the heart than any app. I love this",
    worAt: "CEO Banny organics",
    img: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    name: "Akinyele Adeyemi 5",
    message:
      "The best feeling you can ever get by using Goferiexpress a website that feels closer to the heart than any app. I love this",
    worAt: "CEO Banny organics",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
];

const TestimonySection = () => {
  return (
    <>
      <div className="md:w-[1200px] w-[90%] my-[200px] mx-auto">
        <div className="mx-auto w-[300px] font-bold">
          <h1 className="font-bold text-[2rem] text-center ">Testimonial Page</h1>
        </div>

        <div className="flex  overflow-x-scroll scrollbar-hide my-24">
          <motion.div
            className="flex"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] md:min-w-[350px] h-[200px] flex flex-col justify-between rounded-lg border box-border shadow-lg mx-5 p-5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-[0.85rem] font-medium text-[#000000]">{testimonial.message}</p>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center">
                    <Avatar className="mt-[-10px] mr-2" src={testimonial.img} />
                    <h1 className="text-[0.75rem] font-bold">{testimonial.name}</h1>
                  </div>
                  <p className="text-[0.75rem] font-light">{testimonial.worAt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TestimonySection;
