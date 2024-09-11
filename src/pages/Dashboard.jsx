import { IoMdPerson } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { TbCertificate } from "react-icons/tb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Searchbar from "../Searchbar/searchbar";
import Aicalender from "../components/Aicalender";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Searchbar />
      <Aicalender />
      <div className="mt-4 px-4 lg:px-16 ">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {/* Course 1 */}
          <div className="drop-shadow-2xl">
            <div className="bg-[url('/src/assets/Image/dash1.png')] bg-cover bg-center h-28 w-full flex flex-col rounded-t-3xl relative justify-center items-center text-white">
              <p className="rounded-full text-sm top-6 left-2 text-left absolute bg-red-600 ml-2 p-2">
                Top Recommended
              </p>
              <h2 className="text-2xl xl:text-4xl font-inter absolute ml-2 bottom-0 left-3">
                Generative AI Course
              </h2>
            </div>
            <div className="bg-black text-white rounded-b-3xl px-5 py-4">
              <p className="font-inter text-secondary text-sm">
                Start your journey today and gain the cutting-edge skills
                driving innovation across industries worldwide
              </p>
              <div className="py-5 space-y-4">
                <p className="flex font-light items-center font-inter">
                  <IoMdPerson size={25} className="mr-2" /> Author Name
                </p>
                <p className="flex font-light items-center font-inter">
                  <LuCalendarDays size={25} className="mr-2" /> Course Duration
                </p>
                <p className="flex font-light items-center font-inter">
                  <TbCertificate size={25} className="mr-2" /> Certification
                </p>
              </div>

              <div className="flex text-sm justify-evenly gap-4 py-5">
                <button className="font-inter border-[1px] p-2 rounded-lg w-full">
                  View program
                </button>
                <button className="font-inter font-medium text-black bg-white border-[1px] p-2 rounded-lg w-full">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="drop-shadow-2xl">
            <div className="bg-[url('/src/assets/Image/dash1.png')] bg-cover bg-center h-28 w-full flex flex-col rounded-t-3xl relative justify-center items-center text-white">
              <p className="rounded-full text-sm top-6 left-2 text-left absolute bg-red-600 ml-2 p-2">
                Top Recommended
              </p>
              <h2 className="text-2xl xl:text-4xl font-inter absolute ml-2 bottom-0 left-3">
                Data Science Course
              </h2>
            </div>
            <div className="bg-black text-white rounded-b-3xl px-5 py-4">
              <p className="font-inter text-secondary text-sm">
                Start your journey today and gain the cutting-edge skills
                driving innovation across industries worldwide
              </p>
              <div className="py-5 space-y-4">
                <p className="flex font-light items-center font-inter">
                  <IoMdPerson size={25} className="mr-2" /> Author Name
                </p>
                <p className="flex font-light items-center font-inter">
                  <LuCalendarDays size={25} className="mr-2" /> Course Duration
                </p>
                <p className="flex font-light items-center font-inter">
                  <TbCertificate size={25} className="mr-2" /> Certification
                </p>
              </div>

              <div className="flex text-sm justify-evenly gap-4 py-5">
                <button className="font-inter border-[1px] p-2 rounded-lg w-full">
                  View program
                </button>
                <button className="font-inter font-medium text-black bg-white border-[1px] p-2 rounded-lg w-full">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Course 3 */}
          <div className="drop-shadow-2xl">
            <div className="bg-[url('/src/assets/Image/dash1.png')] bg-cover bg-center h-28 w-full flex flex-col rounded-t-3xl relative justify-center items-center text-white">
              <p className="rounded-full text-sm top-6 left-2 text-left absolute bg-red-600 ml-2 p-2">
                Top Recommended
              </p>
              <h2 className="text-2xl xl:text-4xl font-inter absolute ml-2 bottom-0 left-3">
                Data Science Course
              </h2>
            </div>
            <div className="bg-black text-white rounded-b-3xl px-5 py-4">
              <p className="font-inter text-secondary text-sm">
                Start your journey today and gain the cutting-edge skills
                driving innovation across industries worldwide
              </p>
              <div className="py-5 space-y-4">
                <p className="flex font-light items-center font-inter">
                  <IoMdPerson size={25} className="mr-2" /> Author Name
                </p>
                <p className="flex font-light items-center font-inter">
                  <LuCalendarDays size={25} className="mr-2" /> Course Duration
                </p>
                <p className="flex font-light items-center font-inter">
                  <TbCertificate size={25} className="mr-2" /> Certification
                </p>
              </div>

              <div className="flex text-sm justify-evenly gap-4 py-5">
                <button className="font-inter border-[1px] p-2 rounded-lg w-full">
                  View program
                </button>
                <button className="font-inter font-medium text-black bg-white border-[1px] p-2 rounded-lg w-full">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Report Section */}
        <div className="mt-8 text-center">
          <h2 className="font-inter font-extrabold text-4xl lg:text-5xl">
            Course Progress Report
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 justify-center items-center gap-4 px-8">
            <li className="text-center list-decimal tracking-wide list-outside font-inter font-bold text-2xl lg:text-3xl">
              No Course Enrolled Yet!
            </li>
            <p className="border-[1px] text-center w-48 lg:w-80 rounded-full text-black font-inter font-semibold border-secondary">
              0%
            </p>
        
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
