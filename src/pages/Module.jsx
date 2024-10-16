import { useEffect, useState } from "react";
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
import { auth } from "../firebase";
import CourseStructure from '../components/CourseStructure'


const Module = () => {
  const [isMinimized, setIsMinimized] = useState(false); // State to minimize left panel
  const [month1Expanded, setMonth1Expanded] = useState(false); // State to toggle Month 1 dropdown
  const [month2Expanded, setMonth2Expanded] = useState(false); // State to toggle Month 2 dropdown
  const [week1Expanded, setWeek1Expanded] = useState(false); // State to toggle Week 1 dropdown
  const [week2Expanded, setWeek2Expanded] = useState(false); // State to toggle Week 2 dropdown
  const [showQuizTest, setShowQuizTest] = useState(false); // State to show quiz test on the right side
  const [showAssessmentTest, setShowAssessmentTest] = useState(false);
  const [courseData, setCourseData] = useState({});
  const [courseProgress, setCourseProgress] = useState({});
  //state containing the course data unique to every user
const courseId = "66f6aa963bdc4cbba769509d"
  useEffect(() => {
    async function fetchCourseData() {
      let token = await auth.currentUser.getIdToken();
      console.log(token)
        await fetch(
          `http://localhost:3000/api/student/enrolledCourse?courseId=${courseId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )    .then((response) => response.json())
        .then((result) => {

            // Set the state with the fetched courses data
            console.log(result)
            setCourseData(result);
        })
        .catch((error) => console.error(error));
      }

      async function fetchStudentProgress(){
        let token = await auth.currentUser.getIdToken();
        console.log(token)
          await fetch(
            `http://localhost:3000/api/student/course-progress/course/${courseId}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          )    .then((response) => response.json())
          .then((result) => {
  
              // Set the state with the fetched courses data
              console.log(result)
              setCourseProgress(result);
          })
          .catch((error) => console.error(error));
        }
    fetchCourseData()
    fetchStudentProgress();
  },[]);

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
      <div className="w-full px-2 font-inter pt-24 flex">
        {/* Left Section */}
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
  
          {/* Conditional rendering of Course Structure or minimized view */}
          {!isMinimized ? (
            <CourseStructure course={courseData} courseProgress={courseProgress} />          ) : (
            <div className="text-center mt-4">
              <span className="writing-vertical-lr">Course Structure</span>
            </div>
          )}
        </div>
  
        {/* Right Section */}
        <div className={`transition-all duration-300 ${isMinimized ? "w-11/12" : "w-9/12"}`}>
          {showQuizTest ? <QuizTest /> : showAssessmentTest ? <AssessmentTest /> : <Outlet />}
        </div>
      </div>
      <Footer />
    </>
  );
}
  
export default Module;
