import { useState } from "react";
import { BiSolidLock } from "react-icons/bi";
import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Assessments = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const navigate = useNavigate();

  const ongoingAssessments = [
    {
      id: 1,
      title: "Week 1 Assessment",
      level: "Intermediate",
      topics: "Week 1: All Topics",
      description: "Test your understanding of JavaScript fundamentals.",
      type: "assessment",
      status: "unlocked",
    },
    {
      id: 2,
      title: "Week 2 Mini Project",
      level: "Intermediate",
      topics: "Week 2: All Topics",
      description: "Create a simple project using the DOM.",
      type: "miniproject",
      status: "unlocked",
    },
    {
      id: 3,
      title: "Week 3 Mini Project",
      level: "Intermediate",
      topics: "Week 3: All Topics",
      description: "Work on a mini project using async/await.",
      type: "miniproject",
      status: "locked",
    },
    {
      id: 4,
      title: "Week 4 Final Project",
      level: "Advanced",
      topics: "Week 4: All Topics",
      description: "Final project covering all concepts.",
      type: "miniproject",
      status: "locked",
    },
  ];

  const completedAssessments = [
    {
      id: 5,
      title: "Week 1: Assessment",
      level: "Intermediate",
      topics: "Week 1: All Topics",
      description: "Completed the JavaScript basics assessment.",
    },
  ];

  const handleStartTest = (assessment) => {
    if (assessment.status === "unlocked") {
      navigate("/module/assessementtest");
    }
  };

  const handleViewMore = () => {
    navigate("/assessmentminiproject");
  };

  return (
    <>
      <Navbar />
      <Aicalender />
      <div>
        <div className="px-40 font-inter py-16 pt-24">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold py-2">Assessments</h2>
            <div className="flex space-x-5">
              <button
                className={`p-3 w-40 rounded-lg ${
                  activeTab === "ongoing"
                    ? "bg-blue-500 text-white"
                    : "border-[1px] border-black text-black"
                }`}
                onClick={() => setActiveTab("ongoing")}
              >
                Ongoing
              </button>
              <button
                className={`p-3 w-40 rounded-lg ${
                  activeTab === "completed"
                    ? "bg-blue-500 text-white"
                    : "border-[1px] border-black text-black"
                }`}
                onClick={() => setActiveTab("completed")}
              >
                Completed
              </button>
            </div>
          </div>

          {/* Ongoing Assessments */}
          {activeTab === "ongoing" && ongoingAssessments.length > 0 ? (
            ongoingAssessments.map((assessment, index) => (
              <div
                key={index}
                className={`flex justify-between  px-8 mt-10 relative p-4 rounded-lg ${
                  assessment.status === "locked"
                    ? "bg-opacity-60 bg-black z-50  "
                    : ""
                } ${
                  assessment.status === "locked"
                    ? " fixed z-50 bg-opacity-40 bg-gray-800  cursor-not-allowed   "
                    : "bg-white"
                }`}
              >
                <div className="space-y-4  ">
                  <h2 className="text-3xl space-x-2 font-bold">
                    {assessment.title}{" "}
                    <span className="text-[10px] font-light p-1 px-2 bg-[#E67E22] text-white rounded-3xl">
                      {assessment.level}
                    </span>
                    <span className="text-[10px] font-light p-1 px-2 bg-quiz text-white rounded-3xl">
                      {assessment.topics}
                    </span>
                  </h2>
                  <p className="text-xs">{assessment.description}</p>
                </div>

                <div className="flex items-center space-x-4">
                  {assessment.type === "assessment" ? (
                    <button
                      className={`p-2 px-4 font-light rounded-lg text-white ${
                        assessment.status === "unlocked"
                          ? "bg-[#007EFA]"
                          : "cursor-not-allowed"
                      }`}
                      disabled={assessment.status === "locked"}
                      onClick={() => handleStartTest(assessment)}
                    >
                      {assessment.status === "locked" ? (
                        <>
                          <BiSolidLock className="inline mr-2" /> Locked
                        </>
                      ) : (
                        "Start the Test"
                      )}
                    </button>
                  ) : assessment.type === "miniproject" ? (
                    <button
                      className={`p-2 px-4 font-light rounded-lg text-white ${
                        assessment.status === "unlocked"
                          ? "bg-[#007EFA]"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                      disabled={assessment.status === "locked"}
                      onClick={() => handleViewMore(assessment)}
                    >
                      {assessment.status === "locked"
                        ? "View More"
                        : "View More"}
                    </button>
                  ) : null}

                  {/* Show lock icon if locked */}
                  {assessment.status === "locked" && (
                    <BiSolidLock
                      className="text-white z-50 right-20 absolute "
                      size={30}
                    />
                  )}
                </div>
              </div>
            ))
          ) : (
            // No Ongoing Assessments
            <div className="flex justify-between px-8 mt-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">No Ongoing Assessments!</h2>
                <p className="text-xs">
                  You have no ongoing assessments at the moment.
                </p>
              </div>
              <div>
                <button className="p-3 px-4 font-light bg-[#822CE8] text-sm rounded-lg text-white">
                  Go to Dashboard
                </button>
              </div>
            </div>
          )}

          {/* Completed Assessments */}
          {activeTab === "completed" &&
            (completedAssessments.length > 0 ? (
              completedAssessments.map((assessment, index) => (
                <div key={index} className="flex justify-between px-8 mt-10">
                  <div className="space-y-4">
                    <h2 className="text-3xl space-x-2 font-bold">
                      {assessment.title}{" "}
                      <span className="text-[10px] font-light p-1 px-2 bg-[#E67E22] text-white rounded-3xl">
                        {assessment.level}
                      </span>
                      <span className="text-[10px] font-light p-1 px-2 bg-quiz text-white rounded-3xl">
                        {assessment.topics}
                      </span>
                    </h2>
                    <p className="text-xs">{assessment.description}</p>
                  </div>
                  <div className="space-x-5">
                    <button className="p-2 px-4 font-light bg-quiz rounded-lg text-white">
                      View Report
                    </button>
                    <button className="p-2 px-4 font-light bg-quiz rounded-lg text-white">
                      Download Report
                    </button>
                  </div>
                </div>
              ))
            ) : (
              // No Completed Assessments
              <div className="flex justify-between px-8 mt-10">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">
                    No Completed Assessments!
                  </h2>
                  <p className="text-xs">You have no completed assessments.</p>
                </div>
                <div>
                  <button className="p-3 px-4 font-light bg-[#822CE8] text-sm rounded-lg text-white">
                    Go to Dashboard
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Assessments;
