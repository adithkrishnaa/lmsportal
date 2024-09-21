import { useState } from "react";
import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GoDot } from "react-icons/go";
import { FaCircleHalfStroke, FaCircleCheck } from "react-icons/fa6";
import { BiLock } from "react-icons/bi";
import min from "../assets/Image/modmin.png";
import { Outlet } from "react-router-dom";

const Module = () => {
  const [isMinimized, setIsMinimized] = useState(false); // State to minimize left panel
  const [month1Expanded, setMonth1Expanded] = useState(false); // State to toggle Month 1 dropdown
  const [month2Expanded, setMonth2Expanded] = useState(false); // State to toggle Month 2 dropdown
  const [week1Expanded, setWeek1Expanded] = useState(false); // State to toggle Week 1 dropdown
  const [week2Expanded, setWeek2Expanded] = useState(false); // State to toggle Week 2 dropdown

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

  return (
    <>
      <Navbar />
      <Aicalender />
      <div className=" container font-inter px-1 mt-10 flex">
        {/* Left Section */}
        <div
          className={`transition-all duration-300 ${
            isMinimized ? "w-16" : "w-2/6"
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
                  <ul className="pl-5 py-2 px-5 space-y-4">
                    <li
                      onClick={toggleWeek1}
                      className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium "
                    >
                      Week 1 <FaCircleHalfStroke className="inline" />
                    </li>
                    {week1Expanded && (
                      <ul className="pl-5 pr-5 border-2 py-2 space-y-3 text-base rounded-xl shadow-2xl font-medium">
                        <li className="w-full flex justify-between">
                          1.1 Day 1{" "}
                          <FaCircleCheck className="my-auto" size={20} />
                        </li>
                        <li className="flex justify-between">
                          1.2 Day 2 <GoDot className="my-auto " size={22} />
                        </li>
                        <li className="flex justify-between">
                          1.3 Day 3 <GoDot className="my-auto " size={22} />
                        </li>
                        <li className="flex justify-between">
                          1.4 Day 4 <GoDot className="my-auto " size={22} />
                        </li>
                        <li className="flex w-full justify-between">
                          1.5 Day 5 <BiLock className="my-auto" size={17} />
                        </li>
                      </ul>
                    )}
                    <li
                      onClick={toggleWeek2}
                      className="cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium "
                    >
                      Week 2 <BiLock className="my-auto" size={20} />
                    </li>
                    {week2Expanded && (
                      <ul className="pl-5 pr-5 border-2 py-2 space-y-3 text-base rounded-xl shadow-2xl font-medium">
                        <li className="flex justify-between">
                          2.1 Day 1 <BiLock className="my-auto" size={17} />
                        </li>
                        <li className="flex justify-between">
                          2.2 Day 2 <BiLock className="my-auto" size={17} />
                        </li>
                        <li className="flex justify-between">
                          2.3 Day 3 <BiLock className="my-auto" size={17} />
                        </li>
                        <li className="flex justify-between">
                          2.4 Day 4 <BiLock className="my-auto" size={17} />
                        </li>
                        <li className="flex justify-between">
                          2.5 Day 5 <BiLock className="my-auto" size={17} />
                        </li>
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
            isMinimized ? "w-5/6" : "w-4/6"
          }`}
        >
          
            <Outlet />
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Module;
