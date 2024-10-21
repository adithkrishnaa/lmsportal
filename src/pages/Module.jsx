import { useState, useEffect } from "react";
import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GoDot } from "react-icons/go";
import { FaCircleHalfStroke, FaCircleCheck } from "react-icons/fa6";
import { BiLock } from "react-icons/bi"; // Import the BiLock icon
import min from "../assets/Image/modmin.png";
import { Outlet, Link } from "react-router-dom";
import axios from "axios"; // Import axios for API calls

const Module = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [month1Expanded, setMonth1Expanded] = useState(false);
  const [month2Expanded, setMonth2Expanded] = useState(false);
  const [week1Expanded, setWeek1Expanded] = useState(false);
  const [week2Expanded, setWeek2Expanded] = useState(false);

  // State to hold course data for Month 1 and Month 2
  const [courseDataMonth1, setCourseDataMonth1] = useState([]);
  const [courseDataMonth2, setCourseDataMonth2] = useState([]);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const toggleMonth1 = () => {
    setMonth1Expanded(!month1Expanded);
  };

  const toggleMonth2 = () => {
    setMonth2Expanded(!month2Expanded);
  };

  const toggleWeek1 = () => {
    setWeek1Expanded(!week1Expanded);
  };

  const toggleWeek2 = () => {
    setWeek2Expanded(!week2Expanded);
  };

  const renderDayContent = (day, courseData) => {
    const courseForDay = courseData[day];

    // Check if the course is available for the day
    if (courseForDay) {
      return courseForDay.isAvailable ? (
        <>
          <span className="ml-2 text-[10px] text-white bg-quiz p-1 rounded-3xl">AVAILABLE</span>
          <FaCircleCheck className="text-green-500 ml-1" size={17} />
        </>
      ) : (
        <>
          <span className="ml-2 text-[10px] text-white bg-red-600 p-1 rounded-3xl">UNAVAILABLE</span>
          <BiLock className="my-auto text-red-600" size={17} />
        </>
      );
    }

    return (
      <>
        <span className="ml-2 text-[10px] text-white bg-quiz p-1 rounded-3xl">AVAILABLE</span>
        <FaCircleCheck className="text-green-500 ml-1" size={17} />
      </>
    );
  };

  // Fetch course data for Month 1 and Month 2 when the component mounts
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        // Replace ':courseId' with actual course ID if needed
        const responseMonth1 = await axios.get(`/get-month1/courses/:courseId/month1`);
        if (responseMonth1.data && responseMonth1.data.courses) {
          setCourseDataMonth1(responseMonth1.data.courses);
        } else {
          console.error("Unexpected data format for Month 1:", responseMonth1.data);
        }

        const responseMonth2 = await axios.get(`/get-month2/course/:courseId`);
        if (responseMonth2.data && responseMonth2.data.courses) {
          setCourseDataMonth2(responseMonth2.data.courses);
        } else {
          console.error("Unexpected data format for Month 2:", responseMonth2.data);
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourseData();
  }, []);

  return (
    <>
      <Navbar />
      <Aicalender />
      <div className="w-full px-2 font-inter pt-24 flex">
        {/* Left Section */}
        <div className={`transition-all duration-300 ${isMinimized ? "w-16" : "w-3/12"}`}>
          <div className="flex justify-between items-center">
            <h2 className={`text-2xl font-semibold ${isMinimized ? "hidden" : ""}`}>
              Overview
            </h2>
            <img className="cursor-pointer size-5" src={min} alt="minimize" onClick={toggleMinimize} />
          </div>

          {/* Conditional rendering of Month 1 and Month 2 based on the minimized state */}
          {!isMinimized && (
            <div className="">
              {/* Month 1 Dropdown */}
              <div className="mt-5">
                <h3 className="text-lg text-white bg-secondary p-3 rounded-xl flex justify-between cursor-pointer" onClick={toggleMonth1}>
                  Month 1 <GoDot className="my-auto " size={22} />
                </h3>
                {month1Expanded && (
                  <ul className="pl-5 py-2 space-y-4">
                    <li onClick={toggleWeek1} className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ">
                      Week 1 <FaCircleHalfStroke className="inline" />
                    </li>
                    {week1Expanded && (
                      <ul className="border-2 py-2 space-y-3 text-sm rounded-xl shadow-2xl font-medium">
                        <Link to={"modulevideo"}>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.1 Day 1 {renderDayContent(1, courseDataMonth1)}
                          </li>
                        </Link>
                        <Link to={"videolive"}>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.2 Day 2 {renderDayContent(2, courseDataMonth1)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.3 Day 3 {renderDayContent(3, courseDataMonth1)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.4 Day 4 {renderDayContent(4, courseDataMonth1)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.5 Day 5 {renderDayContent(5, courseDataMonth1)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.6 Day 6 {renderDayContent(6, courseDataMonth1)}
                          </li>
                        </Link>
                      </ul>
                    )}
                    <li onClick={toggleWeek2} className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ">
                      Week 2 <FaCircleHalfStroke className="inline" />
                    </li>
                    {week2Expanded && (
                      <ul className="border-2 py-2 space-y-3 text-sm rounded-xl shadow-2xl font-medium">
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.1 Day 1 {renderDayContent(1, courseDataMonth1)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.2 Day 2 {renderDayContent(2, courseDataMonth1)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.3 Day 3 {renderDayContent(3, courseDataMonth1)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.4 Day 4 {renderDayContent(4, courseDataMonth1)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.5 Day 5 {renderDayContent(5, courseDataMonth1)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.6 Day 6 {renderDayContent(6, courseDataMonth1)}
                          </li>
                        </Link>
                      </ul>
                    )}
                  </ul>
                )}
              </div>

              {/* Month 2 Dropdown */}
              <div className="mt-5">
                <h3 className="text-lg text-white bg-secondary p-3 rounded-xl flex justify-between cursor-pointer" onClick={toggleMonth2}>
                  Month 2 <GoDot className="my-auto " size={22} />
                </h3>
                {month2Expanded && (
                  <ul className="pl-5 py-2 space-y-4">
                    <li onClick={toggleWeek1} className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ">
                      Week 1 <FaCircleHalfStroke className="inline" />
                    </li>
                    {week1Expanded && (
                      <ul className="border-2 py-2 space-y-3 text-sm rounded-xl shadow-2xl font-medium">
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.1 Day 1 {renderDayContent(1, courseDataMonth2)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.2 Day 2 {renderDayContent(2, courseDataMonth2)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.3 Day 3 {renderDayContent(3, courseDataMonth2)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.4 Day 4 {renderDayContent(4, courseDataMonth2)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.5 Day 5 {renderDayContent(5, courseDataMonth2)}
                          </li>
                        </Link>
                      </ul>
                    )}
                    <li onClick={toggleWeek2} className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ">
                      Week 2 <FaCircleHalfStroke className="inline" />
                    </li>
                    {week2Expanded && (
                      <ul className="border-2 py-2 space-y-3 text-sm rounded-xl shadow-2xl font-medium">
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.1 Day 1 {renderDayContent(1, courseDataMonth2)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.2 Day 2 {renderDayContent(2, courseDataMonth2)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.3 Day 3 {renderDayContent(3, courseDataMonth2)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.4 Day 4 {renderDayContent(4, courseDataMonth2)}
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.5 Day 5 {renderDayContent(5, courseDataMonth2)}
                          </li>
                        </Link>
                      </ul>
                    )}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Section for Content */}
        <div className={`transition-all duration-300 ${isMinimized ? "w-full" : "w-9/12"}`}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Module;
