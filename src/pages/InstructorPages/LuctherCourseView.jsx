
import data from "../assets/Image/data.png";
import ai from "../assets/Image/ai.png";
import mlgif from "../assets/Image/ml.gif";
import ml from "../assets/Image/ml.png";
import datagif from "../assets/Image/data.gif";
import aigif from "../assets/Image/ai.gif";


import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link, useParams } from "react-router-dom";






const LuctherCourseView = () => {
const { courseId } = useParams();




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
      id: "Prompt Engineering",
      name: "Prompt Engineering",
      image: mlgif,
      icon: ml,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
  ];


    const course = courses.find((c) => c.id === courseId);

  return ( 
  <>
  <div className="drop-shadow-md flex relative container mx-auto text-black rounded-3xl px">
          <div className="-ml-32 absolute">
            <Link to="/dashboard">
              <RxDoubleArrowLeft size={32} />
            </Link>
          </div>
          <div className="w-3/5">
            <img
              className="bg-cover bg-left rounded-l-3xl w-full h-full"
              src={course.image}
              alt={course.name}
            />
          </div>
          <div className="w-2/5 -ml-4 border-[1px] drop-shadow-2xl rounded-3xl">
            <div className="bg-center h-28 w-full flex flex-col rounded-t-3xl relative justify-center items-center bg-white text-white">
              <p className="rounded-full text-xs top-6 right-40 text-left absolute bg-custom-gradient ml-2 p-2 px-4">
                Popular
              </p>
              <p className="rounded-full text-xs top-6 right-5 text-left absolute bg-red-600 ml-2 p-2">
                Top Recommended
              </p>

              <h2 className="text-2xl text-black flex xl:text-4xl font-semibold font-inter absolute bottom-0 left-3">
                <img className="pr-4 -mt-2" src={course.icon} alt="logo" />
                {course.name}
              </h2>
            </div>
            <div className="bg-white mx-auto rounded-b-3xl px-5 py-4">
              <p className="font-inter text-secondary text-sm">
                {course.description}
              </p>
           

            
            </div>
          </div>
          </div>
  </>
  );
};

export default LuctherCourseView;
