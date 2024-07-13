import React from "react";
import { Card, Button, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
import Navbar from "../LandingPage/components/navbar";
import Footer from "@/components/Footer";
import BannerSAection from "../LandingPage/components/banner";
import Banner from "@/assets/groupOfWorkers.jpg";
import Transport from "@/assets/d25kp1ml.png";
import WorkerWithMicroscope from "@/assets/1afwnism.png";

interface Plan {
  name: string;
  features: string[];
}

interface Category {
  title: string;
  plans: Plan[];
}

const categories: Category[] = [
  {
    title: "Category 1",
    plans: [
      { name: "Free Tier", features: ["Feature 1", "Feature 2", "Feature 3"] },
      { name: "Custom Plan", features: ["Feature 1", "Feature 2", "Feature 3"] },
      { name: "Standard", features: ["Feature 1", "Feature 2", "Feature 3"] },
      { name: "Platinum", features: ["Feature 1", "Feature 2", "Feature 3"] },
    ],
  },
  {
    title: "Category 2",
    plans: [
      { name: "Free Tier", features: ["Feature 1", "Feature 2", "Feature 3"] },
      { name: "Custom Plan", features: ["Feature 1", "Feature 2", "Feature 3"] },
      { name: "Standard", features: ["Feature 1", "Feature 2", "Feature 3"] },
      { name: "Platinum", features: ["Feature 1", "Feature 2", "Feature 3"] },
    ],
  },
];

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
      {/* <div className="container mx-auto p-4">
        {categories.map((category, index) => (
          <div key={index} className="mb-8 mt-8 h-[600px]">
            <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
              {category.plans.map((plan, index) => (
                <Card key={index} className="flex-1 md:w-1/3 p-4  h-[500px]">
                  <CardHeader>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                  </CardHeader>
                  <CardBody>
                    <ul>
                      {plan.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                  <CardFooter>
                    <Button>Choose Plan</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div> */}
      <Footer />
    </>
  );
};

export default ServicePage;
