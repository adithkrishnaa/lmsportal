import { useState, useEffect } from "react";
import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { IoMdShare } from "react-icons/io";
import { LuArrowDownToLine } from "react-icons/lu";
import { auth } from "../firebase";
import cerbanner from "../assets/Image/celebanner.png";
import cercup from "../assets/Image/celecup.png";

const MyCertificates = () => {
  const [modules, setModules] = useState([
    {
      title: "Loading...",
      description: "Loading...",
      image: "Loading...",
      detailedDescription: "Loading...",
    },
  ]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [selectedModule, setSelectedModule] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const token = await auth.currentUser.getIdToken();
        const response = await fetch(
          "https://course-compass-backend-zh7c.onrender.com/api/student/get-certificates",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        setModules(data.certificates); // Assuming your API returns an array of certificates
      } catch (error) {
        console.error("Failed to fetch certificates:", error);
      } finally {
        setLoading(false); // Set loading to false after the fetch
      }
    };

    fetchCertificates();
  }, []);

  // Function to open the modal with the selected module's details
  const openModule = (module) => {
    setSelectedModule(module);
  };

  // Function to close the modal
  const closeModule = () => {
    setSelectedModule(null);
  };

  if (loading) {
    return <div>Loading...</div>; // Render loading screen until data is ready
  }

  return (
    <>
      <Navbar />
      <Aicalender />
      <div>
        <div className="pt-24 space-y-4 px-20">
          <div className="flex my-auto space-x-2">
            <h2 className="font-inter text-3xl font-bold">My Certificates</h2>
          </div>
        </div>

        <div className="grid grid-cols-4 mt-6 gap-4 gap-y-10 px-20">
          {modules.map((module) => (
            <div
              key={module._id}
              className="border-2  rounded-xl drop-shadow-xl cursor-pointer"
              onClick={() => openModule(module)}
            >
              <img
                src={module.image}
                className="rounded-t-xl "
                alt={module.title}
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
            <div className="relative mb-20">
              <img
                src={cerbanner}
                className="mt-4 rounded-lg"
                alt={selectedModule.title}
              />
              <img
                src={cercup}
                className="-bottom-10 left-1/2 -translate-x-8 absolute w-20 rounded-lg"
                alt={selectedModule.title}
              />
            </div>

            <div className="text-center px-8">
              <h2 className="font-inter text-2xl font-bold mb-4">
                Congratulations on achieving {selectedModule.title}
              </h2>
              <p className="text-sm">{selectedModule.detailedDescription}</p>
              <p className="text-sm pt-5">
                Certificate ID: #{selectedModule._id}
              </p>
              <p className="text-sm py-5 whitespace-nowrap">
                Certificate URL: {selectedModule.image}
              </p>
            </div>

            <div className="pt-8 flex justify-between my-auto">
              <div className="flex">
                <button className="flex p-2 mx-auto rounded-lg font-inter">
                  <IoMdShare className="my-auto ml-2" size={22} />
                </button>
                <button className="flex p-2 mx-auto rounded-lg font-inter">
                  <LuArrowDownToLine className="my-auto ml-2" size={22} />
                </button>
              </div>
              <button
                onClick={closeModule}
                className="flex p-2 px-6 my-auto bg-[#007EFA] text-sm font-normal text-white rounded-lg font-inter"
              >
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
