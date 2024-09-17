import { IoMdPerson } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Searchbar from "../Searchbar/searchbar";
import Aicalender from "../components/Aicalender";
import ai from "../assets/Image/ai.png";
import data from "../assets/Image/data.png";
import ml from "../assets/Image/ml.png";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

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
      id: "machine-learning",
      name: "Machine Learning",
      image: ml,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
  ];

  return (
    <>
      <Navbar />
      <Searchbar />
      <Aicalender />
      <div className="mt-4 px-4 lg:px-10 relative z-10 ">
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
        <div className="grid grid-cols-1 md:grid-cols-2 pr-6  lg:grid-cols-3 gap-8 mt-6">
          {courses.map((course) => (
            <Link to={`/courseoverview/${course.id}`} key={course.id}>
              <div className="drop-shadow-2xl bg-black rounded-3xl px">
                <div className="bg-center h-28 w-full flex flex-col rounded-t-3xl relative justify-center items-center text-white">
                  <p className="rounded-full text-xs top-6 right-40 text-left absolute bg-custom-gradient ml-2 p-2 px-4">
                    Popular
                  </p>
                  <p className="rounded-full text-xs top-6 right-5 text-left absolute bg-red-600 ml-2 p-2">
                    Top Recommended
                  </p>

                  <h2 className="text-2xl flex xl:text-4xl font-semibold font-inter absolute ml-2 bottom-0 left-3">
                    <img className="pr-4 -mt-2" src={course.image} alt="logo" />
                    {course.name}
                  </h2>
                </div>
                <div className="bg-black text-white mx-auto rounded-b-3xl px-5 py-4">
                  <p className="font-inter text-secondary text-sm">
                    {course.description}
                  </p>
                  <div className="py-5 space-y-4">
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

                  <div className="flex text-sm justify-evenly gap-4 py-5">
                    <Link to={"viewprogram"}>
                      <button className="font-inter font-bold text-enr px-4  border-enr border-[1px] p-2 rounded-lg w-full">
                        View program
                      </button>
                    </Link>

                    <Link to={"cart"}>
                      <button className="font-inter font-bold text-black  px-4 bg-enr p-2 rounded-lg w-full">
                        Enroll Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

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

        {/* Progress Report Section */}
        {/* ... (rest of your code) */}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
