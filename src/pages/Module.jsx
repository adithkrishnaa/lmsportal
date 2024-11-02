import { useState, useEffect } from "react";
import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GoDot } from "react-icons/go";
import { FaCircleHalfStroke } from "react-icons/fa6";
import min from "../assets/Image/modmin.png";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

const Module = ({ courseId, authToken }) => {  
  const [isMinimized, setIsMinimized] = useState(false);
  const [month1Expanded, setMonth1Expanded] = useState(false);
  const [month2Expanded, setMonth2Expanded] = useState(false);
  
  // State for week expansions
  const [week1ExpandedMonth1, setWeek1ExpandedMonth1] = useState(false);
  const [week2ExpandedMonth1, setWeek2ExpandedMonth1] = useState(false);
  const [week3ExpandedMonth1, setWeek3ExpandedMonth1] = useState(false);
  const [week4ExpandedMonth1, setWeek4ExpandedMonth1] = useState(false);

  const [week1ExpandedMonth2, setWeek1ExpandedMonth2] = useState(false);
  const [week2ExpandedMonth2, setWeek2ExpandedMonth2] = useState(false);
  const [week3ExpandedMonth2, setWeek3ExpandedMonth2] = useState(false);
  const [week4ExpandedMonth2, setWeek4ExpandedMonth2] = useState(false);

  // State to hold course data for Month 1 and Month 2
  const [courseDataMonth1, setCourseDataMonth1] = useState([]);
  const [courseDataMonth2, setCourseDataMonth2] = useState([]);

  const toggleMinimize = () => setIsMinimized(!isMinimized);
  const toggleMonth1 = () => setMonth1Expanded(!month1Expanded);
  const toggleMonth2 = () => setMonth2Expanded(!month2Expanded);
  const toggleWeek1Month1 = () => setWeek1ExpandedMonth1(!week1ExpandedMonth1);
  const toggleWeek2Month1 = () => setWeek2ExpandedMonth1(!week2ExpandedMonth1);
  const toggleWeek3Month1 = () => setWeek3ExpandedMonth1(!week3ExpandedMonth1);
  const toggleWeek4Month1 = () => setWeek4ExpandedMonth1(!week4ExpandedMonth1);
  const toggleWeek1Month2 = () => setWeek1ExpandedMonth2(!week1ExpandedMonth2);
  const toggleWeek2Month2 = () => setWeek2ExpandedMonth2(!week2ExpandedMonth2);
  const toggleWeek3Month2 = () => setWeek3ExpandedMonth2(!week3ExpandedMonth2);
  const toggleWeek4Month2 = () => setWeek4ExpandedMonth2(!week4ExpandedMonth2);

  const renderDayContent = (day, week, month) => {
    const courseForDay =
      month === 1
        ? courseDataMonth1[week - 1]?.days[day - 1]
        : courseDataMonth2[week - 1]?.days[day - 1];

    if (courseForDay) {
      return courseForDay.isAvailable ? (
        <span className="ml-2 text-[10px] text-white bg-quiz p-1 rounded-3xl">
          AVAILABLE
        </span>
      ) : (
        <span className="ml-2 text-[10px] text-white bg-red-600 p-1 rounded-3xl">
          UNAVAILABLE
        </span>
      );
    }

    return (
      <span className="ml-2 text-[10px] text-white bg-quiz p-1 rounded-3xl">
        AVAILABLE
      </span>
    );
  };

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${authToken}`,  
        };

        const responseMonth1 = await axios.get(
          `https://course-compass-backend-zh7c.onrender.com/api/course/get-month1/course/${courseId}`,
          { headers }  
        );

        if (responseMonth1.data && responseMonth1.data.courses) {
          setCourseDataMonth1(responseMonth1.data.courses);
        } else {
          console.error("Unexpected data format for Month 1:", responseMonth1.data);
        }

        const responseMonth2 = await axios.get(
          `https://course-compass-backend-zh7c.onrender.com/api/course/get-month2/course/${courseId}`,
          { headers }  
        );

        if (responseMonth2.data && responseMonth2.data.courses) {
          setCourseDataMonth2(responseMonth2.data.courses);
        } else {
          console.error("Unexpected data format for Month 2:", responseMonth2.data);
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    if (courseId) {  
      fetchCourseData();
    } else {
      console.error("No courseId provided");
    }
  }, [courseId, authToken]);  

  return (
    <>
      <Navbar />
      <Aicalender />
      <div className="w-full px-2 font-inter pt-24 flex">
        <div
          className={`transition-all duration-300 ${isMinimized ? "w-16" : "w-3/12"}`}
        >
          <div className="flex justify-between items-center">
            <h2 className={`text-2xl font-semibold ${isMinimized ? "hidden" : ""}`}>
              Overview
            </h2>
            <img
              className="cursor-pointer size-5"
              src={min}
              alt="minimize"
              onClick={toggleMinimize}
            />
          </div>

          {!isMinimized && (
            <div>
              {/* Month 1 Dropdown */}
              <div className="mt-5">
                <h3
                  className="text-lg text-white bg-secondary p-3 rounded-xl flex justify-between cursor-pointer"
                  onClick={toggleMonth1}
                >
                  Month 1 <GoDot className="my-auto" size={22} />
                </h3>
                {month1Expanded && (
                  <ul className="pl-5 py-2 space-y-4">
                    {[1, 2, 3, 4].map((week) => (
                      <div key={week}>
                        <li
                          onClick={eval(`toggleWeek${week}Month1`)}
                          className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium"
                        >
                          Week {week} <FaCircleHalfStroke className="inline" />
                        </li>
                        {eval(`week${week}ExpandedMonth1`) && (
                          <ul className="border-2 py-2 space-y-3 text-sm rounded-xl shadow-2xl font-medium">
                            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                              <Link 
                                to={`/modulevideo/${courseId}/month1/week/${week}/day/${day}`} // Adjusted route
                                key={day}
                                state={{
                                  dayData: courseDataMonth1[week - 1]?.days[day - 1] || null,
                                }}
                              >
                                <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                                  {`${week}.${day} Day ${day}`}{" "}
                                  {renderDayContent(day, week, 1)}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </ul>
                )}
              </div>

              {/* Month 2 Dropdown */}
              <div className="mt-5">
                <h3
                  className="text-lg text-white bg-secondary p-3 rounded-xl flex justify-between cursor-pointer"
                  onClick={toggleMonth2}
                >
                  Month 2 <GoDot className="my-auto" size={22} />
                </h3>
                {month2Expanded && (
                  <ul className="pl-5 py-2 space-y-4">
                    {[1, 2, 3, 4].map((week) => (
                      <div key={week}>
                        <li
                          onClick={eval(`toggleWeek${week}Month2`)}
                          className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium"
                        >
                          Week {week} <FaCircleHalfStroke className="inline" />
                        </li>
                        {eval(`week${week}ExpandedMonth2`) && (
                          <ul className="border-2 py-2 space-y-3 text-sm rounded-xl shadow-2xl font-medium">
                            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                              <Link 
                                to={`/modulevideo/${courseId}/month2/week/${week}/day/${day}`} // Adjusted route
                                key={day}
                                state={{
                                  dayData: courseDataMonth2[week - 1]?.days[day - 1] || null,
                                }}
                              >
                                <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                                  {`${week}.${day} Day ${day}`}{" "}
                                  {renderDayContent(day, week, 2)}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="w-3/4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Module;
