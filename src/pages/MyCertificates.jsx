import { useState } from "react";
import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import module11 from "../assets/Image/cer4.png";
import module1 from "../assets/Image/cer1.png";
import module2 from "../assets/Image/cer2.png";
import module3 from "../assets/Image/cer3.png";
import module4 from "../assets/Image/cer1.png";
import cerbanner from "../assets/Image/celebanner.png";
import cercup from "../assets/Image/celecup.png";
import { IoMdShare } from "react-icons/io";
import { LuArrowDownToLine } from "react-icons/lu";

const MyCertificates = () => {
  // State to track the selected module and modal visibility
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      id: 1,
      name: "Certificate #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module1,

      detailedDescription:
        "Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.",
    },
    {
      id: 2,
      name: "Certificate #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module2,

      detailedDescription:
        "Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.",
    },
    {
      id: 3,
      name: "Certificate #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module3,

      detailedDescription:
        "Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.",
    },
    {
      id: 4,
      name: "Certificate #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module4,

      detailedDescription:
        "Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.",
    },
    {
      id: 5,
      name: "Certificate #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module3,

      detailedDescription:
        "Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.Lorem ipsum dolor sit amet consectetur. Habitant scelerisque nunc lacinia augue elit faucibus at. Vulputate risus consequat tempus at faucibus facilisi vitae. Aliquam hendrerit risus eu in. Congue leo quis enim accumsan in metus aliquet cras.",
    },
    {
      id: 6,
      name: "Certificate #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Diam id tortor euismod maecenas quis scelerisque risus in.",
      image: module11,

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
            <h2 className="font-inter text-3xl font-bold">My Certificates </h2>
          </div>
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
              <div className="p-2 space-y-2 p py-4">
                <h3 className="font-inter text-xl font-semibold">
                  {module.name}
                </h3>
                <p className="font-inter text-secondary text-sm">
                  {module.description}
                </p>
                <div className="pt-8 flex justify-between my-auto">
                  <div className="flex">
                    <button className="flex p-2  mx-auto   rounded-lg font-inter">
                      <IoMdShare className="my-auto ml-2" size={22} />
                    </button>
                    <button className="flex p-2  mx-auto  rounded-lg font-inter">
                      <LuArrowDownToLine className="my-auto ml-2" size={22} />
                    </button>
                  </div>
                  <button className="flex p-2 my-auto bg-[#007EFA] text-xs  text-white rounded-lg font-inter">
                    View more
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
          <div className="bg-white w-4/12 p-4 rounded-2xl relative">
            {/* Close Button */}

            <div className=" relative mb-20">
              <img
                src={cerbanner}
                className=" mt-4 rounded-lg "
                alt={selectedModule.name}
              />
              <img
                src={cercup}
                className=" -bottom-10 left-1/2 -translate-x-8 absolute w-20 rounded-lg "
                alt={selectedModule.name}
              />
            </div>

            <div className="text-center px-8">
              <h2 className="font-inter text-2xl font-bold mb-4">
                Congratulations on achieving {selectedModule.name}
              </h2>
              <p className=" text-sm">
                Lorem ipsum dolor sit amet consectetur. Diam id tortor euismod
                maecenas quis scelerisque risus in.
              </p>
              <p className=" text-sm pt-5">
                Certificate ID : #s235jb14oaf2515195fwrr35
              </p>
              <p className=" text-sm  py-5  whitespace-nowrap">
                Certificate URL: https://CClms/#s235jb14oaf2515195fwrr35
              </p>
            </div>

            <div className="pt-8 flex justify-between my-auto">
              <div className="flex">
                <button className="flex p-2  mx-auto   rounded-lg font-inter">
                  <IoMdShare className="my-auto ml-2" size={22} />
                </button>
                <button className="flex p-2  mx-auto  rounded-lg font-inter">
                  <LuArrowDownToLine className="my-auto ml-2" size={22} />
                </button>
              </div>
              <button
                onClick={closeModule}
                className="flex p-2 px-6 my-auto bg-[#007EFA] text-sm font-normal text-white rounded-lg font-inter">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default MyCertificates;
