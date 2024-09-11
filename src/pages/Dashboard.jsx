import { IoMdPerson } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { TbCertificate } from "react-icons/tb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Searchbar from "../Searchbar/searchbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Searchbar />
      <div className="mt-4 ">
        <div className="  ">
          <h2 className="text-center py-2 font-inter text-5xl font-extrabold">
            Explore Our
          </h2>{" "}
          <h3 className="text-center font-inter text-3xl font-extrabold">
            TOP COURSES!
          </h3>
          <p className="text-center text-secondary text-base font-inter py-2">
            Start your journey today and gain the cutting-edge skills driving
            innovation across industries worldwide
          </p>
        </div>
        <div className=" grid grid-cols-3 mt-4  ">
          <div className=" ml-8  drop-shadow-2xl">
            <div className="bg-[url('..\src\assets\Image\dash1.png')] bg-cover bg-center h-28 w-full flex flex-col rounded-t-3xl  relative justify-center  items-center text-white">
              <p className=" rounded-full text-sm top-6 left-2 text-left absolute bg-red-600 ml-2 p-2">
                Top Recommended
              </p>
              <h2 className="text-4xl font-inter absolute ml-2 bottom-0 left-3 ">
                Generative AI Course
              </h2>
            </div>
            <div className=" bg-black text-white rounded-b-3xl px-5 py-2">
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
                  {" "}
                  <TbCertificate size={25} className="mr-2" />
                  Certification
                </p>
              </div>

              <div className="flex justify-evenly gap-4 py-5">
                <button className=" font-inter border-[1px] p-2 rounded-lg w-full">
                  View program
                </button>
                <button className="font-inter font-medium text-black bg-white border-[1px] p-2 rounded-lg w-full">
                  Enrol Now
                </button>
              </div>
            </div>
          </div>
          <div className=" ml-4 drop-shadow-2xl ">
            <div className="bg-[url('..\src\assets\Image\dash1.png')] bg-cover bg-center h-28 w-full flex flex-col rounded-t-3xl  relative justify-center  items-center text-white">
              <p className=" rounded-full text-sm top-6 left-2 text-left absolute bg-red-600 ml-2 p-2">
                Top Recommended
              </p>
              <h2 className="text-4xl font-inter absolute ml-2 bottom-0 left-3 ">
                Data Science Course
              </h2>
            </div>
            <div className=" bg-black text-white rounded-b-3xl px-5 py-2">
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
                  {" "}
                  <TbCertificate size={25} className="mr-2" />
                  Certification
                </p>
              </div>

              <div className="flex justify-evenly gap-4 py-5">
                <button className=" font-inter border-[1px] p-2 rounded-lg w-full">
                  View program
                </button>
                <button className="font-inter font-medium text-black bg-white border-[1px] p-2 rounded-lg w-full">
                  Enrol Now
                </button>
              </div>
            </div>
          </div>
          <div className="ml-4  mr-8 drop-shadow-2xl">
            <div className="bg-[url('..\src\assets\Image\dash1.png')] bg-cover bg-center h-28 w-full flex flex-col rounded-t-3xl  relative justify-center  items-center text-white">
              <p className=" rounded-full text-sm top-6 left-2 text-left absolute bg-red-600 ml-2 p-2">
                Top Recommended
              </p>
              <h2 className="text-4xl font-inter absolute ml-2 bottom-0 left-3 ">
                Data Science Course
              </h2>
            </div>
            <div className=" bg-black text-white rounded-b-3xl px-5 py-2">
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
                  {" "}
                  <TbCertificate size={25} className="mr-2" />
                  Certification
                </p>
              </div>

              <div className="flex justify-evenly gap-4 py-5">
                <button className=" font-inter border-[1px] p-2 rounded-lg w-full">
                  View program
                </button>
                <button className="font-inter font-medium text-black bg-white border-[1px] p-2 rounded-lg w-full">
                  Enrol Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <div className="  items-center justify-center">
            <h2 className="text-center font-inter font-extrabold text-5xl">
              Course Progress Report
            </h2>

            <div className="grid mt-10 grid-cols-2 ml-20">
              <li className="text-center list-decimal  tracking-wide list-outside font-inter font-bold text-3xl">
                No Course Enrolled Yet!
              </li>
              <input
                className="  border-[1px] text-center w-80 rounded-full  placeholder:text-black font-inter font-semibold border-secondary"
                type="text"
                placeholder="0%"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
