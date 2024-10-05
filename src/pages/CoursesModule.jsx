import { useState } from "react";
import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaAngleRight, FaArrowRight } from "react-icons/fa6";
import module11 from "../assets/Image/module11.png";
import module1 from "../assets/Image/module1.png";
import module2 from "../assets/Image/module2.png";
import module3 from "../assets/Image/module3.png";
import module4 from "../assets/Image/module4.png";
import { RxCross2 } from "react-icons/rx";
import { IoMdPerson } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

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
      instructor: "Priya Chawla",
      duration: "3 hours",
      detailedDescription:
        "Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.",
    },
    {
      id: 2,
      name: "Module #2",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module2,
      instructor: "Priya Chawla",
      duration: "3 hours",
      detailedDescription:
        "Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.",
    },
    {
      id: 3,
      name: "Module #3",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module3,
      instructor: "Priya Chawla",
      duration: "3 hours",
      detailedDescription:
        "Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.",
    },
    {
      id: 4,
      name: "Module #4",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module4,
      instructor: "Priya Chawla",
      duration: "3 hours",
      detailedDescription:
        "Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.",
    },
    {
      id: 5,
      name: "Module #5",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module3,
      instructor: "Priya Chawla",
      duration: "3 hours",
      detailedDescription:
        "Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.",
    },
    {
      id: 6,
      name: "Module #6",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module1,
      instructor: "Priya Chawla",
      duration: "3 hours",
      detailedDescription:
        "Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.",
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
              className="border-2  rounded-xl drop-shadow-xl cursor-pointer"
              onClick={() => openModule(module)}>
              <img
                src={module.image}
                className="rounded-t-xl "
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
          <div className="bg-white w-2/3 p-6 rounded-2xl relative">
            {/* Close Button */}
            <button
              onClick={closeModule}
              className="absolute  top-4 right-4 text-xl font-bold text-black">
              <RxCross2 size={25} />
            </button>

            <img
              src={module11}
              className="w-full mt-8 rounded-3xl mb-4"
              alt={selectedModule.name}
            />

            <h2 className="font-inter text-3xl font-bold mb-4">
              {selectedModule.name}
            </h2>
            <p className="font-inter text-xs text-secondary mb-4">
              {selectedModule.detailedDescription}
            </p>

            <div className="flex space-x-3">
              <p className="flex font-light text-sm items-center font-inter">
                <IoMdPerson size={15} className="mr-2" />{" "}
                {selectedModule.instructor}
              </p>
              <p className="flex font-light text-sm  items-center font-inter">
                <MdAccessTime size={15} className="mr-2" />{" "}
                {selectedModule.duration}
              </p>
            </div>

            <div className="flex justify-end mt-14 space-x-10 mx-auto">
              <button className="flex p-2 px-4 bg-black text-white rounded-lg font-inter ">
                Take Assessment
              </button>
              <button className="flex p-2 px-4 bg-black text-white rounded-lg font-inter ">
                Take Quiz
              </button>
              <button className="flex p-2 px-4 bg-black text-white rounded-lg font-inter ">
                Recap
              </button>
              <button className="flex p-2  px-4 bg-black text-white rounded-lg font-inter ">
                <Link to={"/module"}>Start Module</Link>
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CoursesModule;
