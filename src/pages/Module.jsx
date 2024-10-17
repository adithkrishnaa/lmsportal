import { useState } from "react";
import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GoDot } from "react-icons/go";
import { FaCircleHalfStroke, FaCircleCheck } from "react-icons/fa6";
import { BiLock } from "react-icons/bi";
import min from "../assets/Image/modmin.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import QuizTest from "../components/Module/QuizTest";
import AssessmentTest from "../components/Module/AssessementTest";

const Module = () => {
  const [isMinimized, setIsMinimized] = useState(false); // State to minimize left panel
  const [month1Expanded, setMonth1Expanded] = useState(false); // State to toggle Month 1 dropdown
  const [month2Expanded, setMonth2Expanded] = useState(false); // State to toggle Month 2 dropdown
  const [week1Expanded, setWeek1Expanded] = useState(false); // State to toggle Week 1 dropdown
  const [week2Expanded, setWeek2Expanded] = useState(false); // State to toggle Week 2 dropdown
  const [showQuizTest, setShowQuizTest] = useState(false); // State to show quiz test on the right side
  const [showAssessmentTest, setShowAssessmentTest] = useState(false);

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

  const renderDayContent = (day) => {
    switch (day) {
      case 5:
        return (
          <span className="-ml-28 text-[10px] text-white bg-[#FF8787] p-1 rounded-3xl w-10 text-center">
            Quiz
          </span>
        );
      case 6:
        return (
          <span className="-ml-28 text-[10px] text-white bg-[#FF8787] p-1 rounded-3xl">
            Assessment
          </span>
        );
      default:
        return (
          <span className="-ml-28 text-[10px] text-white bg-quiz p-1 rounded-3xl">
            AVAILABLE
          </span>
        );
    }
  };

  return (
    <>
      <Navbar />
      <Aicalender />
      <div className="w-full px-2 font-inter  pt-24 flex">
        {/* Left Section */}
        <div
          className={`transition-all  duration-300 ${
            isMinimized ? "w-16" : "w-3/12"
          }`}
        >
          <div className="flex justify-between items-center">
            <h2
              className={`text-2xl font-semibold ${
                isMinimized ? "hidden" : ""
              }`}
            >
              Overview
            </h2>
            <img
              className="cursor-pointer size-5"
              src={min}
              alt="minimize"
              onClick={toggleMinimize}
            />
          </div>

          {/* Conditional rendering of Month 1 and Month 2 based on the minimized state */}
          {!isMinimized && (
            <div className="">
              {/* Month 1 Dropdown */}
              <div className="mt-5">
                <h3
                  className="text-lg text-white bg-secondary p-3 rounded-xl flex justify-between cursor-pointer"
                  onClick={toggleMonth1}
                >
                  Month 1 <GoDot className="my-auto " size={22} />
                </h3>
                {month1Expanded && (
                  <ul className="pl-5 py-2  space-y-4">
                    <li
                      onClick={toggleWeek1}
                      className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium "
                    >
                      Week 1 <FaCircleHalfStroke className="inline" />
                    </li>
                    {week1Expanded && (
                      <ul className=" border-2 py-2 space-y-3 text-sm rounded-xl shadow-2xl font-medium">
                        <Link to={"modulevideo"}>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.1 Day 1 {renderDayContent(1)}
                            <FaCircleCheck className="my-auto" size={15} />
                          </li>
                        </Link>
                        <Link to={"videolive"}>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.2 Day 2{renderDayContent(2)}
                            <GoDot className="my-auto " size={22} />
                          </li>
                        </Link>
                        <Link>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.3 Day 3{renderDayContent(3)}
                            <GoDot className="my-auto " size={22} />
                          </li>
                        </Link>
                        <Link>
                          {" "}
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.4 Day 4{renderDayContent(4)}
                            <GoDot className="my-auto " size={22} />
                          </li>
                        </Link>
                        <Link>
                          {" "}
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.5 Day 5 {renderDayContent(5)}
                            <BiLock className="my-auto" size={17} />
                          </li>
                        </Link>
                        <Link>
                          {" "}
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            1.6 Day 6 {renderDayContent(6)}
                            <BiLock className="my-auto" size={17} />
                          </li>
                        </Link>
                      </ul>
                    )}
                    <li
                      onClick={toggleWeek2}
                      className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium "
                    >
                      Week 2 <BiLock className="my-auto" size={20} />
                    </li>
                    {week2Expanded && (
                      <ul className="  border-2 py-2 space-y-3 text-sm rounded-xl shadow-2xl font-medium">
                        <Link>
                          {" "}
                          <li className=" w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.1 Day 1
                            <span className="-ml-28 text-[10px] text-white bg-[#F00] px-2 rounded-3xl">
                              Live
                            </span>
                            <BiLock className="my-auto" size={17} />
                          </li>
                        </Link>
                        <Link>
                          <li className=" w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.2 Day 2 <BiLock className="my-auto" size={17} />
                          </li>
                        </Link>
                        <Link>
                          <li className=" w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.3 Day 3 <BiLock className="my-auto" size={17} />
                          </li>
                        </Link>
                        <Link>
                          <li className=" w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.4 Day 4 <BiLock className="my-auto" size={17} />
                          </li>
                        </Link>
                        <Link>
                          <li className=" w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.5 Day 5 <BiLock className="my-auto" size={17} />
                          </li>
                        </Link>
                        <Link>
                          {" "}
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.5 Day 6 <BiLock className="my-auto" size={17} />
                          </li>
                          <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                            2.5 Day 7 <BiLock className="my-auto" size={17} />
                          </li>
                        </Link>
                      </ul>
                    )}
                    <li className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ">
                      Week 3 <BiLock className="my-auto" size={20} />
                    </li>
                    <li className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ">
                      Week 4 <BiLock className="my-auto" size={20} />
                    </li>
                    <li className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ">
                      Mini Test 1 <BiLock size={18} />
                    </li>
                  </ul>
                )}
              </div>

              {/* Month 2 Dropdown */}
              <div className="mt-5">
                <h3
                  className="text-lg text-white bg-secondary p-3 rounded-xl flex justify-between cursor-pointer"
                  onClick={toggleMonth2}
                >
                  Month 2 <BiLock className="my-auto" size={20} />
                </h3>
                {month2Expanded && (
                  <ul className="pl-5">
                    <li className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ">
                      Week 1 <BiLock className="my-auto" size={20} />
                    </li>
                    <li className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ">
                      Week 2 <BiLock className="my-auto" size={20} />
                    </li>
                    <li className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ">
                      Week 3 <BiLock className="my-auto" size={20} />
                    </li>
                    <li className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ">
                      Week 4 <BiLock className="my-auto" size={20} />
                    </li>
                    <li className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ">
                      Mini Test 2 <BiLock className="my-auto" size={20} />
                    </li>
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div
          className={`transition-all duration-300 ${
            isMinimized ? "w-11/12" : "w-9/12"
          }`}
        >
          {showQuizTest ? (
            <QuizTest />
          ) : showAssessmentTest ? (
            <AssessmentTest />
          ) : (
            <Outlet />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Module;