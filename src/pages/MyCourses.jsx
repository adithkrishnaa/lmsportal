import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import ai from "../assets/Image/ai.png";
import data from "../assets/Image/data.png";
import ml from "../assets/Image/ml.png";
import { IoMdPerson } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import { MdAccessTime } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";

const MyCourses = () => {
  const courses = [
    {
      id: "generative-ai",
      name: "Generative AI",
      image: ai,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
      purchased: true, // Indicate whether the course is purchased
    },
    {
      id: "data-science",
      name: "Data Science",
      image: data,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
      purchased: false, // Indicate whether the course is not purchased
    },
    {
      id: "prompt-engineering",
      name: "Prompt Engineering",
      image: ml,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
      purchased: false, // Indicate whether the course is not purchased
    },
  ];

  return (
    <>
      <Navbar />
      <Aicalender />
      <div>
        <div className=" mt-16 space-y-4  px-20">
          <h2 className="font-inter text-3xl font-bold">My Courses</h2>
          <p className="font-inter text-sm font-normal text-secondary">
            Start your journey today and gain the cutting-edge skills driving
            innovation across industries worldwide
          </p>
        </div>

        {/* Courses Section */}
        <div className="grid grid-cols-1 md:grid-cols-2  px-20  lg:grid-cols-3 gap-8 mt-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`relative border-2 rounded-3xl shadow-2xl ${
                !course.purchased ? "opacity-50  cursor-not-allowed" : ""
              }`}>
              {!course.purchased && (
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                  <BiSolidLock size={45} />
                </div>
              )}
              <div
                className={`bg-center h-20 bg-white  w-full flex flex-col rounded-t-3xl relative justify-center items-center`}>
                <h2 className="text-2xl flex xl:text-4xl font-semibold font-inter absolute ml-2 bottom-0 left-3">
                  <img className="pr-4 -mt-2" src={course.image} alt="logo" />
                  {course.name}
                </h2>
              </div>
              <div className=" bg-white mx-auto  rounded-b-3xl px-5 py-4">
                <p className="font-inter text-secondary text-sm">
                  {course.description}
                </p>
                <div className="py-5  space-y-4">
                  <p className="flex font-light items-center font-inter">
                    <IoMdPerson size={25} className="mr-2" />{" "}
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

                {/* Conditionally render the button based on the purchase status */}
                <div className="text-sm gap-4 py-5">
                  {course.purchased ? (
                    <Link to={"/coursesmodule"}>
                      <button className="font-inter bg-black text-white font-bold px-4 border-black border-[1px] p-2 rounded-lg w-full">
                        Begin your modules
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="font-inter cursor-not-allowed bg-black text-white  font-bold px-4 border-black border-[1px] p-2 rounded-lg w-full"
                      disabled>
                      Begin your modules
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyCourses;
