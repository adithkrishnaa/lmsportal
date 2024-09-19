import { useState } from "react";
import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaAngleRight, FaArrowRight } from "react-icons/fa6";
import module1 from "../assets/Image/module1.png";
import module2 from "../assets/Image/module2.png";
import module3 from "../assets/Image/module3.png";
import module4 from "../assets/Image/module4.png";

const CoursesModule = () => {
  // State to track the selected module and modal visibility
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      id: 1,
      name: "Module #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module1,
      detailedDescription:
        "This is the detailed description for Module #1. You will learn about various topics including advanced AI technologies...",
    },
    {
      id: 2,
      name: "Module #2",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module2,
      detailedDescription:
        "In Module #2, you will dive deeper into machine learning concepts, exploring supervised and unsupervised learning techniques...",
    },
    {
      id: 3,
      name: "Module #3",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module3,
      detailedDescription:
        "Module #3 focuses on data science methodologies, statistical analysis, and how to apply them to real-world problems...",
    },
    {
      id: 4,
      name: "Module #4",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module4,
      detailedDescription:
        "This module will cover AI ethics and the societal impact of AI technologies, along with their advantages and risks...",
    },
    {
      id: 5,
      name: "Module #5",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module3,
      detailedDescription:
        "This module will cover AI ethics and the societal impact of AI technologies, along with their advantages and risks...",
    },
    {
      id: 6,
      name: "Module #6",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module1,
      detailedDescription:
        "This module will cover AI ethics and the societal impact of AI technologies, along with their advantages and risks...",
    },
  ];

  // Function to open the modal with the selected module's details
  const openModule = (module) => {
    setSelectedModule(module);
  };

  // Function to close the modal
  const closeModule = () => {
    setSelectedModule(null);
  };

  return (
    <>
      <Navbar />
      <Aicalender />
      <div>
        <div className="mt-16 space-y-4 px-20">
          <div className="flex my-auto space-x-2">
            <h2 className="font-inter text-3xl font-bold">Courses </h2>
            <FaAngleRight className="mt-2" size={25} />
            <h2 className="font-inter text-3xl font-bold">
              Generative AI Course
            </h2>
          </div>

          <p className="font-inter text-sm font-normal text-secondary">
            Start your journey today and gain the cutting-edge skills driving
            innovation across industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-4 mt-6 gap-4 gap-y-10 px-20">
          {modules.map((module) => (
            <div
              key={module.id}
              className="border-2 rounded-xl drop-shadow-xl cursor-pointer"
              onClick={() => openModule(module)}>
              <img
                src={module.image}
                className="rounded-t-xl"
                alt={module.name}
              />
              <div className="p-2 space-y-2 px-3 py-4">
                <h3 className="font-inter text-xl font-semibold">
                  {module.name}
                </h3>
                <p className="font-inter text-secondary text-sm">
                  {module.description}
                </p>
                <div className="pt-8 my-auto">
                  <button className="flex p-2 bg-black mx-auto px-16 text-white rounded-lg font-inter">
                    Start Module <FaArrowRight className="my-auto ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected module */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-60">
          <div className="bg-white w-1/2 p-6 rounded-2xl relative">
            {/* Close Button */}
            <button
              onClick={closeModule}
              className="absolute top-4 right-4 text-xl font-bold text-gray-600">
              &times;
            </button>

            <img
              src={selectedModule.image}
              className="w-full rounded-lg mb-4"
              alt={selectedModule.name}
            />

            <h2 className="font-inter text-3xl font-bold mb-4">
              {selectedModule.name}
            </h2>
            <p className="font-inter text-secondary text-lg mb-4">
              {selectedModule.detailedDescription}
            </p>

            <button
              className="flex p-2 bg-black text-white rounded-lg font-inter mx-auto"
              onClick={closeModule}>
              Close <FaArrowRight className="my-auto ml-2" />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CoursesModule;
