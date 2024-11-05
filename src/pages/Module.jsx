import { useState, useEffect } from "react";
import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GoDot } from "react-icons/go";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { Lock } from "lucide-react";
import min from "../assets/Image/modmin.png";
import { Outlet, Link } from "react-router-dom";
import { auth } from "../firebase";

const Module = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [expandedMonths, setExpandedMonths] = useState({
    month1: false,
    month2: false,
  });
  const [expandedWeeks, setExpandedWeeks] = useState({});
  const [courseData, setCourseData] = useState(null);

  const toggleMonth = (monthKey) => {
    setExpandedMonths((prev) => ({
      ...prev,
      [monthKey]: !prev[monthKey],
    }));
  };

  const toggleWeek = (weekKey) => {
    setExpandedWeeks((prev) => ({
      ...prev,
      [weekKey]: !prev[weekKey],
    }));
  };

  const isDayAccessible = (days, dayIndex, monthKey, weekIndex) => {
    if (dayIndex === 0) return true;
    
    // Check if previous day was attended
    return days[dayIndex - 1]?.attended === true ?? false;
  };

  const isWeekAccessible = (monthKey, weekIndex, data) => {
    if (!data) return false;

    if (monthKey === "month1") {
      if (weekIndex === 0) return true;
      
      if (weekIndex === 1) {
        // Week 2 requires Week 1's quiz to be completed
        return data.month1.week1?.quizSubmitted;
      }
      
      // For weeks 3-4, check previous project week completion
      const prevWeekIndex = weekIndex - 2; // Adjust index for project weeks array
      return data.month1.projectWeek[prevWeekIndex]?.quizSubmitted &&
             data.month1.projectWeek[prevWeekIndex]?.projectSubmitted;
    } else {
      // Month 2 logic
      if (weekIndex === 0) {
        // First week of Month 2 requires Month 1 completion
        return data.month1?.monthComplete === true ?? false;
      }
      
      // Other weeks in Month 2 require previous week's last day attendance
      const prevWeek = data.month2.weeks[weekIndex - 1];
      return prevWeek?.days?.[6]?.attended === true ?? false;


    }
  };

  const renderDayStatus = (day, isAccessible) => {
    if (!isAccessible) {
      return (
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-red-600" />
          <span className="text-[10px] text-white bg-red-600 p-1 rounded-3xl">
            LOCKED
          </span>
        </div>
      );
    }

    return day?.attended ? (
      <span className="ml-2 text-[10px] text-white bg-quiz p-1 rounded-3xl">
        COMPLETED
      </span>
    ) : (
      <span className="ml-2 text-[10px] text-white bg-yellow-500 p-1 rounded-3xl">
        AVAILABLE
      </span>
    );
  };

  const renderWeek = (monthKey, weekIndex, weekData) => {
    const weekKey = `${monthKey}-week${weekIndex + 1}`;
    const isAccessible = isWeekAccessible(monthKey, weekIndex, courseData);
    
    // Get the appropriate days data based on week and month
    let days;
    if (monthKey === "month1") {
      if (weekIndex === 0) {
        days = courseData.month1.week1?.days;
      } else {
        // Adjust index for project weeks array (weeks 2-4)
        days = courseData.month1.projectWeek[weekIndex - 1]?.days;
      }
    } else {
      days = courseData.month2.weeks[weekIndex]?.days;
    }

    return (
      <div key={weekKey}>
        <div 
          className={`cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ${!isAccessible ? "opacity-75" : ""}`}
          onClick={() => isAccessible && toggleWeek(weekKey)}
        >
          <span>Week {weekIndex + 1}</span>
          {!isAccessible ? (
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-red-600" />
            </div>
          ) : (
            <FaCircleHalfStroke className="inline" />
          )}
        </div>

        {isAccessible && expandedWeeks[weekKey] && (
          <ul className="border-2 py-2 space-y-3 text-sm rounded-xl shadow-2xl font-medium">
            {Array.from({ length: 7 }, (_, dayIndex) => {
              const day = days?.[dayIndex];
              const isDayEnabled = isDayAccessible(days || [], dayIndex, monthKey, weekIndex);
              
              return (
                <li
                  key={dayIndex}
                  className={`w-full border-b-2 pl-3 p-2 flex justify-between ${
                    !isDayEnabled ? "opacity-75" : ""
                  }`}
                >
                  {isDayEnabled ? (
                    <Link
                      to={`/module/${weekKey}/day${dayIndex + 1}`}
                      className="w-full flex justify-between"
                      state={{ dayData: day }}
                    >
                      <span>Day {dayIndex + 1}</span>
                      {renderDayStatus(day, isDayEnabled)}
                    </Link>
                  ) : (
                    <>
                      <span>Day {dayIndex + 1}</span>
                      {renderDayStatus(day, isDayEnabled)}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };

  useEffect(() => {
    const fetchCourseProgress = async () => {
      try {
        const authToken = await auth.currentUser.getIdToken();
        const response = await fetch(
          `http://localhost:3000/api/student/course-progress`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setCourseData(data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourseProgress();
  }, []);

  return (
    <>
      <Navbar />
      <Aicalender />
      <div className="w-full px-2 font-inter pt-24 flex">
        <div className={`transition-all duration-300 ${isMinimized ? "w-16" : "w-3/12"}`}>
          <div className="flex justify-between items-center">
            <h2 className={`text-2xl font-semibold ${isMinimized ? "hidden" : ""}`}>
              Overview
            </h2>
            <img
              className="cursor-pointer size-5"
              src={min}
              alt="minimize"
              onClick={() => setIsMinimized(!isMinimized)}
            />
          </div>

          {!isMinimized && courseData && (
            <div>
              {/* Month 1 */}
              <div className="mt-5">
                <h3
                  className="text-lg text-white bg-secondary p-3 rounded-xl flex justify-between cursor-pointer"
                  onClick={() => toggleMonth("month1")}
                >
                  Month 1 <GoDot className="my-auto" size={22} />
                </h3>
                {expandedMonths.month1 && (
                  <div className="pl-5 py-2 space-y-4">
                    {/* Render all 4 weeks (Week 1 + 3 project weeks) */}
                    {[0, 1, 2, 3].map((index) => 
                      renderWeek("month1", index, null)
                    )}
                  </div>
                )}
              </div>

              {/* Month 2 */}
              <div className="mt-5">
                <h3
                  className="text-lg text-white bg-secondary p-3 rounded-xl flex justify-between cursor-pointer"
                  onClick={() => toggleMonth("month2")}
                >
                  Month 2 <GoDot className="my-auto" size={22} />
                </h3>
                {expandedMonths.month2 && (
                  <div className="pl-5 py-2 space-y-4">
                    {[0, 1, 2, 3].map((index) => 
                      renderWeek("month2", index, courseData.month2.weeks[index])
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Module;
