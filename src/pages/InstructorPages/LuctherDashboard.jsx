import { useState, useRef, useEffect } from "react";
import Footer from "../../components/Footer";
import Searchbar from "../../Searchbar/searchbar";
import live from "../../assets/Image/live.png";
import syllbus from "../../assets/Image/syllbus.png";
import calender from "../../assets/Image/calendar.png";
import LuctherNavbar from "../../components/Instructor/LuctherNavbar";
import Aitutore from "../../components/Instructor/Aitutore";
import ai from "../../assets/Image/ai.png";
import data from "../../assets/Image/data.png";
import ml from "../../assets/Image/ml.png";
import { MdAccessTime } from "react-icons/md";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LuctherDashboard = () => {
  const courses = [
    {
      id: "generative-ai",
      option: "Option 1",
      name: "Generative AI",
      image: ai,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
    {
      id: "data-science",
      option: "Option 2",
      name: "Data Science",
      image: data,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
    {
      id: "prompt-engineering",
      option: "Option 3",
      name: "Prompt Engineering",
      image: ml,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
  ];

  const [showPopup, setShowPopup] = useState(true); // State to manage pop-up visibility
  const [currentIndex, setCurrentIndex] = useState(0); // State for the index of visible courses
  const [showLive, setshowLive] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null); // To track the selected class
  const [confirmedCourse, setConfirmedCourse] = useState(null); // State to track the confirmed course
  const navigate = useNavigate();
   const [liveCourse, setLiveCourse] = useState(null);
  const modalRef = useRef(null);

  // Handler to close the pop-up
  const handleClosePopup = (course) => {
    setConfirmedCourse(course); // Set the confirmed course
    setShowPopup(false); // Close the popup
  };

  // Navigate to previous course
  const handlePrevCourse = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleShowLive = (course) => {
    setLiveCourse(course); // Set the selected course for the live pop-up
    setshowLive(true); // Open the live modal
  };

  // Handle checkbox change
  const handleClassSelect = (className, classTime) => {
    setSelectedClass({ name: className, time: classTime }); // Set both name and time
  };

  const handleGoLive = () => {
    if (selectedClass) {
      navigate("/livepage"); // Navigate to the live page
    }
  };

  // Navigate to next course
  const handleNextCourse = () => {
    if (currentIndex < courses.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setshowLive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup on component unmount
    };
  }, []);

  return (
    <>
      <LuctherNavbar />
      <Searchbar />
      <Aitutore />
      {/* Pop-up Modal */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full font-inter bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="rounded-3xl shadow-2xl w-7/12  bg-white">
            <div className="bg-[#E6E5E7] p-4 space-x-2 flex rounded-t-3xl">
              <h2 className="text-2xl flex my-auto font-bold">
                Select the Course
              </h2>
            </div>

            <div className="px-8 py-2 font-inter relative">
              <p className="py-2 text-base font-semibold">
                Select the Course that you would like to teach at the Course
                Compass:
              </p>
              <div className="flex gap-x-10 overflow-hidden">
                {courses.slice(currentIndex, currentIndex + 2).map((course) => (
                  <div
                    key={course.id}
                    className="shadow-2xl border-2 rounded-3xl">
                    <div className="flex flex-col rounded-t-3xl relative items-center text-black">
                      <p className="rounded-full text-white text-xs top-6 text-left absolute bg-custom-gradient ml-2 p-2 px-4">
                        {course.option}
                      </p>
                      <div className="flex p-2 mt-16 mr-auto">
                        <img
                          className="w-10 my-auto h-10"
                          src={course.image}
                          alt={course.name}
                        />
                        <h2 className="text-xl xl:text-4xl flex font-semibold font-inter p-2 text-left">
                          {course.name}
                        </h2>
                      </div>
                    </div>
                    <div className="text-black rounded-b-3xl px-5 py-4">
                      <p className="font-inter flex flex-wrap text-secondary text-sm">
                        {course.description}
                      </p>
                      <div className="py-5 space-y-4">
                        <p className="flex font-light items-center font-inter">
                          <MdAccessTime size={25} className="mr-2" />{" "}
                          {course.duration}
                        </p>
                      </div>
                      <div className="flex text-sm justify-between gap-6 py-5">
                        <button className="font-inter font-bold text-black w-full border-black border-[1px] p-3 rounded-lg">
                          View syllabus
                        </button>

                        <button
                          onClick={() => handleClosePopup(course)} // Confirm the selected course
                          className="font-inter font-bold text-white w-full bg-black border-[1px] p-3 rounded-lg">
                          Confirm as host
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handlePrevCourse}
                  disabled={currentIndex === 0}
                  className={`left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full ${
                    currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}>
                  <BsChevronDoubleLeft size={24} />
                </button>

                <button
                  onClick={handleNextCourse}
                  disabled={currentIndex === courses.length - 2}
                  className={`right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full ${
                    currentIndex === courses.length - 2
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}>
                  <BsChevronDoubleRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Dashboard */}
      <div className="mt-10 px-4 lg:px-10 relative">
        <div className="text-center">
          <h2 className="py-2 font-inter text-4xl lg:text-5xl font-extrabold">
            Welcome <span className="text-green-400">Priya Chawla</span>
          </h2>
          <h3 className="font-inter text-2xl lg:text-3xl font-extrabold">
            at Course Compass as an instructor!
          </h3>
        </div>

        {/* Courses Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
          <div className="border-2 font-inter px-6 space-y-6 py-5 rounded-2xl">
            <div>
              <img className="w-20" src={live} alt="Go Live!" />
            </div>
            <h2 className="text-2xl font-bold">Go Live!</h2>
            <p className="w-60">Host live lectures at Course Compass LMS.</p>
            <button
              onClick={() => handleShowLive(confirmedCourse)} // Pass confirmed course to the live modal
              className="w-60 p-2 bg-black text-white rounded-lg font-semibold">
              Host a Lecture
            </button>
          </div>

          <div className="border-2 font-inter px-6 space-y-4 py-5 rounded-2xl">
            <div>
              <img className="w-20" src={calender} alt="My Calendar" />
            </div>
            <h2 className="text-2xl font-bold">My Calendar!</h2>
            <p className="w-64">
              Share the schedule for your upcoming live classes.
            </p>
            <Link to={"/calanderpage"}>
              <button className="w-60 p-2 mt-4 bg-black rounded-lg font-semibold text-white">
                Go to My Calendar
              </button>
            </Link>
          </div>

          {/* Updated Third Div */}
          <div className="border-2 font-inter px-6 space-y-4 py-5 rounded-2xl">
            {confirmedCourse ? (
              <>
                <div>
                  <img
                    className="w-14"
                    src={confirmedCourse.image}
                    alt="Course Syllabus"
                  />
                </div>
                <h2 className="text-2xl font-bold">{confirmedCourse.name}</h2>
                <p className="w-60">
                  Share the schedule for your upcoming live classes on the{" "}
                  {confirmedCourse.name} course.
                </p>
              </>
            ) : (
              <>
                <div>
                  <img className="w-20" src={syllbus} alt="Course Syllabus" />
                </div>
                <h2 className="text-2xl font-bold">Course Syllabus</h2>
                <p className="w-60">
                  Share the schedule for your upcoming live classes.
                </p>
              </>
            )}
            <button
              onClick={() => navigate(`/classroam/${confirmedCourse.id}`)}
              className="w-60 p-2 bg-black text-white rounded-lg font-semibold">
              Go to My Classroom
            </button>
          </div>
        </div>
      </div>

      {/* Your other components... */}

      {showLive && liveCourse && (
        <div className="fixed top-0 left-0 w-full font-inter h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div ref={modalRef} className="rounded-3xl shadow-2xl w-2/6 bg-white">
            <div className="py-5">
              <h3 className="text-xl text-[#0832FF] font-medium text-center">
                Select Class To Go Live
              </h3>

              {/* Class 1 */}
              <div className="px-10 py-5 relative mt-3">
                <span className="p-1 px-2 text-sm text-white bg-[#FF0000] rounded-3xl">
                  19 Sept, 11.00 am
                </span>
                <div className="px-5 mt-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    viewBox="0 0 39 49"
                    fill="none"
                    className="w-10 h-12 md:w-14 md:h-13 lg:w-15 lg:h-16 xl:w-16 xl:h-20">
                    <line
                      x1="1.35447"
                      y1="0.015625"
                      x2="1.35447"
                      y2="37.1892"
                      stroke="black"
                      strokeWidth="2.25191"
                    />
                    <line
                      x1="0.791016"
                      y1="36.0537"
                      x2="21.0582"
                      y2="36.0537"
                      stroke="black"
                      strokeWidth="2.25191"
                    />
                    <path
                      d="M22.1271 28.1213L35.9186 36.5261L22.1271 44.931L22.1271 28.1213Z"
                      fill="white"
                      stroke="black"
                      strokeWidth="2.60747"
                    />
                  </svg>
                </div>
                <div className="absolute top-20 space-y-1 left-32">
                  <div className="flex justify-between">
                    <h3 className="text-base xl:text-lg font-medium">
                      {liveCourse.name}
                    </h3>
                    <input
                      type="checkbox"
                      name="checkbox"
                      checked={
                        selectedClass?.name === liveCourse.name &&
                        selectedClass?.time === "19 Sept, 11.00 am"
                      }
                      className="size-6 ml-24"
                      onChange={() =>
                        handleClassSelect(liveCourse.name, "19 Sept, 11.00 am")
                      }
                    />
                  </div>
                  <p className="text-sm xl:text-base">Week 1: Day 3</p>
                  <li className="text-sm xl:text-base">Fundamentals of AI</li>
                </div>
              </div>

              {/* Class 2 */}
              <div className="px-10 py-5 relative mt-3">
                <span className="p-1 px-2 text-sm text-white bg-[#FF0000] rounded-3xl">
                  20 Sept, 11.00 am
                </span>
                <div className="px-5 mt-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    viewBox="0 0 39 49"
                    fill="none"
                    className="w-10 h-12 md:w-14 md:h-13 lg:w-15 lg:h-16 xl:w-16 xl:h-20">
                    <line
                      x1="1.35447"
                      y1="0.015625"
                      x2="1.35447"
                      y2="37.1892"
                      stroke="black"
                      strokeWidth="2.25191"
                    />
                    <line
                      x1="0.791016"
                      y1="36.0537"
                      x2="21.0582"
                      y2="36.0537"
                      stroke="black"
                      strokeWidth="2.25191"
                    />
                    <path
                      d="M22.1271 28.1213L35.9186 36.5261L22.1271 44.931L22.1271 28.1213Z"
                      fill="white"
                      stroke="black"
                      strokeWidth="2.60747"
                    />
                  </svg>
                </div>
                <div className="absolute top-20 space-y-1 left-32">
                  <div className="flex justify-between">
                    <h3 className="text-base xl:text-lg font-medium">
                      {liveCourse.name}
                    </h3>
                    <input
                      type="checkbox"
                      name="checkbox"
                      checked={
                        selectedClass?.name === liveCourse.name &&
                        selectedClass?.time === "20 Sept, 11.00 am"
                      }
                      className="size-6 ml-24"
                      onChange={() =>
                        handleClassSelect(liveCourse.name, "20 Sept, 11.00 am")
                      }
                    />
                  </div>
                  <p className="text-sm xl:text-base">Week 1: Day 3</p>
                  <li className="text-sm xl:text-base">Fundamentals of AI</li>
                </div>
              </div>

              {/* Repeat for other classes */}
              <div className="px-10 py-5 relative mt-3">
                <span className="p-1 px-2 text-sm text-white bg-[#FF0000] rounded-3xl">
                  21 Sept, 11.00 am
                </span>
                <div className="px-5 mt-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    viewBox="0 0 39 49"
                    fill="none"
                    className="w-10 h-12 md:w-14 md:h-13 lg:w-15 lg:h-16 xl:w-16 xl:h-20">
                    <line
                      x1="1.35447"
                      y1="0.015625"
                      x2="1.35447"
                      y2="37.1892"
                      stroke="black"
                      strokeWidth="2.25191"
                    />
                    <line
                      x1="0.791016"
                      y1="36.0537"
                      x2="21.0582"
                      y2="36.0537"
                      stroke="black"
                      strokeWidth="2.25191"
                    />
                    <path
                      d="M22.1271 28.1213L35.9186 36.5261L22.1271 44.931L22.1271 28.1213Z"
                      fill="white"
                      stroke="black"
                      strokeWidth="2.60747"
                    />
                  </svg>
                </div>
                <div className="absolute top-20 space-y-1 left-32">
                  <div className="flex justify-between">
                    <h3 className="text-base xl:text-lg font-medium">
                      {liveCourse.name}
                    </h3>
                    <input
                      type="checkbox"
                      name="checkbox"
                      checked={
                        selectedClass?.name === liveCourse.name &&
                        selectedClass?.time === "21 Sept, 02.00 pm"
                      }
                      className="size-6 ml-24"
                      onChange={() =>
                        handleClassSelect(liveCourse.name, "21 Sept, 02.00 pm")
                      }
                    />
                  </div>
                  <p className="text-sm xl:text-base">Week 1: Day 3</p>
                  <li className="text-sm xl:text-base">Fundamentals of AI</li>
                </div>
              </div>

              <div className="px-14 py-3">
                <li className="text-sm text-secondary">Select any one</li>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleGoLive}
                  className={`p-2 px-6 text-white rounded-lg font-semibold ${
                    selectedClass
                      ? "bg-[#01C064]"
                      : "bg-opacity-50 bg-[#01C064] cursor-not-allowed"
                  }`}
                  disabled={!selectedClass}>
                  GO LIVE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default LuctherDashboard;
