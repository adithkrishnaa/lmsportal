import Aitutore from "../../components/Instructor/Aitutore";
import LuctherNavbar from "../../components/Instructor/LuctherNavbar";
import data from "../../assets/Image/data.png";
import ai from "../../assets/Image/ai.png";
import mlgif from "../../assets/Image/ml.gif";
import ml from "../../assets/Image/ml.png";
import datagif from "../../assets/Image/data.gif";
import aigif from "../../assets/Image/ai.gif";
import { Link, useParams } from "react-router-dom";
import { RxDoubleArrowLeft } from "react-icons/rx";

import { useNavigate } from "react-router-dom";

const Classroam = () => {
  const { id } = useParams();
  const navigate = useNavigate();  // Get the dynamic course id from URL

  // Define the courses
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
      id: "prompt-engineering",
      name: "Prompt Engineering",
      image: mlgif,
      icon: ml,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
  ];

  // Define the ongoing assessments
  const ongoingAssessments = [

    {
      id: 1,
      title: "Week 2 Mini Project",
      level: "Intermediate",
      topics: "Week 2: All Topics",
      description: "Create a simple project using the DOM.",
      type: "miniproject",
      status: "unlocked",
    },
    {
      id: 2,
      title: "Week 3 Mini Project",
      level: "Intermediate",
      topics: "Week 3: All Topics",
      description: "Work on a mini project using async/await.",
      type: "miniproject",
      status: "unlocked",
    },
    {
      id: 3,
      title: "Week 4 Final Project",
      level: "Advanced",
      topics: "Week 4: All Topics",
      description: "Final project covering all concepts.",
      type: "miniproject",
      status: "unlocked",
    },
  ];

  // Find the current course by id
  const course = courses.find((c) => c.id === id);

  // If no course is found, show a message
  if (!course) {
    return <p>Course not found!</p>;
  }



  const handleViewMore = (assessment) => {
    // Navigate to the grading page with assessmentId
    navigate(`/grading/${assessment.id}`);
  };
  return (
    <>
      <LuctherNavbar />
      <Aitutore />
      <div>
        <div>
          {/* Course Overview Section */}
          <div className="drop-shadow-md flex relative mt-5 container mx-auto text-black rounded-3xl px">
            <div className="-ml-32 absolute">
              <Link to="/luctherdashboard">
                <RxDoubleArrowLeft size={32} />
              </Link>
            </div>
            <div className="w-3/5">
              <img
                className="bg-cover bg-left rounded-l-3xl w-full h-80"
                src={course.image}
                alt={course.name}
              />
            </div>
            <div className="w-2/5 h-80 bg-white -ml-4 border-[1px] drop-shadow-2xl rounded-3xl">
              <div className="bg-center h-40  w-full  rounded-t-3xl relative justify-center items-center bg-white text-white">
                <h2 className="text-2xl text-black  xl:text-4xl font-semibold font-inter absolute bottom-0 left-3">
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

          {/* Button for Grading */}
          <div className="flex justify-center pt-8">
            <button className="text-white p-2 px-4 rounded text-xl bg-[#007EFA]">
              Grade the Assignments
            </button>
          </div>

          <div className="px-16 py-5">
            <hr className="border-t-[1px] border-black/50 " />
          </div>

          {/* Ongoing Assessments Section */}
          <div className="px-20">
            {ongoingAssessments.map((assessment, index) => (
              <div
                key={index}
                className={`flex justify-between px-8 mt-2 relative p-4 rounded-lg ${
                  assessment.status === "locked"
                    ? "bg-opacity-60 bg-gray-400 cursor-not-allowed"
                    : "bg-white"
                }`}>
                <div className="space-y-4">
                  <h2 className="text-3xl space-x-2 font-bold">
                    {assessment.title}{" "}
                    <span className="text-[10px] font-light p-1 px-2 bg-[#E67E22] text-white rounded-3xl">
                      {assessment.level}
                    </span>
                    <span className="text-[10px] font-light p-1 px-2 bg-[#00BF63] text-white rounded-3xl">
                      {assessment.topics}
                    </span>
                  </h2>
                  <p className="text-xs">{assessment.description}</p>
                </div>

                <div className="flex items-center space-x-4">
                  
                    
                  {assessment.type === "miniproject" ? (
                    <button
                      className={`p-2 px-4 font-light rounded-lg text-white ${
                        assessment.status === "unlocked"
                          ? "bg-[#E67E22]"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                      disabled={assessment.status === "locked"}
                      onClick={() => handleViewMore(assessment)}>
                      Grade
                    </button>
                  ) : null}

                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Classroam;
