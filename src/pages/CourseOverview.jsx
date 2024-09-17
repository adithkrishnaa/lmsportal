import { IoMdPerson } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import { MdAccessTime } from "react-icons/md";
import data from "../assets/Image/data.png";
import ai from "../assets/Image/ai.png";
import mlgif from "../assets/Image/ml.gif";
import ml from "../assets/Image/ml.png";
import datagif from "../assets/Image/data.gif";
import aigif from "../assets/Image/ai.gif";
import Navbar from "../components/Navbar";
import Aicalender from "../components/Aicalender";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { FaStar } from "react-icons/fa6";

const CourseOverview = () => {
  const { courseId } = useParams(); // Get the courseId from the URL

  const courses = [
    {
      id: "generative-ai",
      name: "Generative AI",
      image: aigif,
      icon: ai,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
    {
      id: "data-science",
      name: "Data Science",
      image: datagif,
      icon: data,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
    {
      id: "machine-learning",
      name: "Machine Learning",
      image: mlgif,
      icon: ml,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
  ];

  // Find the course that matches the courseId
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <>
        <Navbar />
        <div className="text-center z-20 mt-20">
          <h2 className="text-2xl font-bold">Course Not Found</h2>
          <Link to="/dashboard" className="text-blue-500 underline">
            Return to Dashboard
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Aicalender />

      <div className="drop-shadow-2xl mt-20 z-10  flex relative container mx-auto bg-black rounded-3xl px">
        <div className="-ml-32 absolute">
          <Link to="/dashboard">
            <RxDoubleArrowLeft size={32} />
          </Link>
        </div>
        <div className="w-3/5">
          <img
            className="bg-contain rounded-l-3xl w-full h-full"
            src={course.image}
            alt={course.name}
          />
        </div>
        <div className="w-2/5">
          <div className="bg-center h-28 w-full flex flex-col rounded-t-3xl relative justify-center items-center text-white">
            <p className="rounded-full text-xs top-6 right-40 text-left absolute bg-custom-gradient ml-2 p-2 px-4">
              Popular
            </p>
            <p className="rounded-full text-xs top-6 right-5 text-left absolute bg-red-600 ml-2 p-2">
              Top Recommended
            </p>

            <h2 className="text-2xl flex xl:text-4xl font-semibold font-inter absolute bottom-0 left-3">
              <img className="pr-4 -mt-2" src={course.icon} alt="logo" />
              {course.name}
            </h2>
          </div>
          <div className="bg-black text-white mx-auto rounded-b-3xl px-5 py-4">
            <p className="font-inter text-secondary text-sm">
              {course.description}
            </p>
            <div className="py-5 space-y-4">
              <p className="flex font-light items-center font-inter">
                <IoMdPerson size={25} className="mr-2" /> {course.instructor}
              </p>
              <p className="flex font-light items-center font-inter">
                <MdAccessTime size={25} className="mr-2" /> {course.duration}
              </p>
              <p className="flex font-light items-center font-inter">
                <TbCertificate size={25} className="mr-2" /> Certification
              </p>
            </div>

            <div className="flex text-sm justify-evenly gap-4 py-5">
              <button className="font-inter font-bold text-enr border-enr border-[1px] p-2 rounded-lg w-full">
                View program
              </button>
              <button className="font-inter font-bold text-black bg-enr p-2 rounded-lg w-full">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mx-auto mt-10   grid grid-cols-5 justify-items-center text-center">
        <div className="px-2">
          <h3 className="text-lg font-inter font-bold underline py-1">
            7 Module Series
          </h3>
          <p className="text-xs font-inter font-normal">
            Earn a career credential that demonstrates
          </p>
        </div>
        <div className="px-2 ">
          <h3 className="text-lg flex gap-x-2 my-auto font-inter font-bold underline py-1">
            4.5
            <FaStar className="my-auto" />
          </h3>
        </div>
        <div className="px-2">
          <h3 className="text-lg font-inter font-bold underline py-1">
            Intermediate level
          </h3>
          <p className="text-xs font-inter font-normal">
            Recommended experience
          </p>
        </div>
        <div className="px-2">
          <h3 className="text-lg font-inter font-bold underline py-1">
            Flexible schedule
          </h3>
          <p className="text-xs font-inter font-normal">
            6 months, 10 hours a week.Learn at your own pace.
          </p>
        </div>
        <div className="px-2">
          <h3 className="text-lg font-inter font-bold underline py-1">
            Earn degree credit
          </h3>
          
        </div>
      </div>
      <div className="text-center mt-14">
        <h2 className="font-inter text-4xl font-bold"> Course Overview</h2>
        <p className=" py-6 font-inter w-2/6 font-medium mx-auto text-center">
          Mastering AI Innovation: A 7-Module Journey through Cutting-Edge
          Generative Technologies
        </p>
      </div>
      <div>
        <div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default CourseOverview;
