import { TbCertificate } from "react-icons/tb";
import { MdAccessTime } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Searchbar from "../Searchbar/searchbar";
import Aicalender from "../components/Aicalender";
import ai from "../assets/Image/ai.png";
import data from "../assets/Image/data.png";
import ml from "../assets/Image/ml.png";
import { IoMdLock } from "react-icons/io";
import profileimg from "../assets/Image/person2.png";

const Dashboard = () => {
  const courses = [
    {
      id: "generative-ai",
      name: "Generative AI",
      image: ai,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
    {
      id: "data-science",
      name: "Data Science",
      image: data,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
    {
      id: "Prompt Engineering",
      name: "Prompt Engineering",
      image: ml,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState(null); // To store the selected course
  const [showJoinPopup, setShowJoinPopup] = useState(false); // To show the confirmation pop-up

  // Handle when the Join button is clicked
  const handleJoin = (course) => {
    setSelectedCourse(course);
    setShowJoinPopup(true); // Show the confirmation pop-up
  };

  // Confirm joining the course
  const handleConfirmJoin = () => {
    setShowJoinPopup(false);
  };

  // Cancel joining the course
  const handleCancelJoin = () => {
    setSelectedCourse(null); // Clear selected course
    setShowJoinPopup(false);
  };

  return (
    <>
      <Navbar />
      <Searchbar />
      <Aicalender />
      <div className="pt-24 px-4 lg:px-10 relative">
        <div className="text-center">
          <h2 className="py-2 font-inter text-4xl lg:text-5xl font-extrabold">
            Explore Our
          </h2>
          <h3 className="font-inter text-2xl lg:text-3xl font-extrabold">
            TOP COURSES!
          </h3>
          <p className="text-center text-secondary text-sm lg:text-base font-inter py-2">
            Start your journey today and gain the cutting-edge skills driving
            innovation across industries worldwide
          </p>
        </div>

        {/* Courses Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 pr-6 lg:grid-cols-3 gap-8 mt-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`relative shadow-2xl border-2 rounded-3xl ${
                selectedCourse && selectedCourse.id !== course.id
                  ? "opacity-50 pointer-events-none" // Disable other courses once one is selected
                  : ""
              }`}
            >
              {selectedCourse && selectedCourse.id !== course.id && (
                <div className="absolute inset-0 bg-black bg-opacity-60 rounded-3xl flex items-center justify-center">
                  <IoMdLock size={40} className="text-white" />
                </div>
              )}

              <div className="bg-center h-28 w-full flex flex-col rounded-t-3xl relative justify-center items-center text-black">
                <p className="rounded-full text-white text-xs top-6 right-40 text-left absolute bg-custom-gradient ml-2 p-2 px-4">
                  Popular
                </p>
                <p className="rounded-full text-white text-xs top-6 right-5 text-left absolute bg-red-600 ml-2 p-2">
                  Top Recommended
                </p>
                <h2 className="text-2xl flex xl:text-4xl font-semibold font-inter absolute ml-2 bottom-0 left-3">
                  <img className="pr-4 -mt-2" src={course.image} alt="logo" />
                  {course.name}
                </h2>
              </div>

              <div className="text-black mx-auto rounded-b-3xl px-5 py-4">
                <p className="font-inter text-secondary text-sm">
                  {course.description}
                </p>
                <div className="py-5 space-y-4">
                  <p className="flex font-light items-center font-inter">
                    <img
                      className=" size-7 mr-1"
                      src={profileimg}
                      alt="profileimg"
                    />
                    {course.instructor}
                  </p>
                  <p className="flex font-light items-center font-inter">
                    <MdAccessTime size={25} className="mr-2" />{" "}
                    {course.duration}
                  </p>
                  <p className="flex font-light items-center font-inter">
                    <TbCertificate size={25} className="mr-2" /> Certification
                  </p>
                </div>

                <div className="flex text-sm justify-evenly gap-4 py-5">
                  <Link to={`/courseoverview/${course.id}`}>
                    <button className="font-inter font-bold text-black px-4 border-black border-[1px] p-2 rounded-lg w-40">
                      View program
                    </button>
                  </Link>

                  <button
                    onClick={() => handleJoin(course)}
                    className="font-inter font-bold text-white px-6 bg-black border-[1px] p-2 rounded-lg w-40"
                    disabled={selectedCourse !== null}
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Course Progress Section */}
        <div className="mt-8 text-center">
          <h2 className="font-inter font-extrabold text-4xl lg:text-5xl">
            Course Progress Report
          </h2>

          <div className="mt-10 justify-center items-center gap-4 px-8">
            <li className="p-3 px-5 list-decimal list-outside rounded-3xl drop-shadow-2xl grid grid-cols-1 border-4 lg:grid-cols-2">
              <h2 className="text-center list-none tracking-wide list-outside font-inter font-bold text-2xl lg:text-3xl">
                No Course Enrolled Yet!
              </h2>
              <p className="border-[1px] mt-1 mx-auto text-center w-48 lg:w-80 rounded-full text-black font-inter font-semibold border-secondary">
                0%
              </p>
            </li>
          </div>
        </div>
      </div>
      <Footer />

      {/* Confirmation Popup */}
      {showJoinPopup && selectedCourse && (
        <div className="fixed top-0 left-0 w-full h-full font-inter bg-black bg-opacity-60 z-50 flex justify-center items-center">
          <div className="bg-white rounded-xl p-6 shadow-xl w-1/4">
            <h2 className="text-2xl flex xl:text-4xl font-semibold font-inter justify-center">
              <img
                className="pr-4 -mt-2"
                src={selectedCourse.image}
                alt="logo"
              />
              {selectedCourse.name}
            </h2>

            <p className="text-center text-lg mb-6">
              Are you want to continue with this electives ?
            </p>
            <div className=" space-y-3 px-10 ">
              <button
                className="px-4 py-2 bg-black text-white rounded-lg w-full"
                onClick={handleConfirmJoin}
              >
                Join
              </button>
              <button
                className="px-4 py-2  rounded-lg w-full"
                onClick={handleCancelJoin}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
