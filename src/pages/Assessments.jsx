import { useState, useEffect } from "react";
import { BiSolidLock } from "react-icons/bi";
import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Assessments = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [courseProgress, setCourseProgress] = useState();
  const [assessments, setAssessments] = useState({});
  const [course, setCourse] = useState();
  const [completedAssessments, setCompletedAssessments] = useState([]);
  const [ongoingAssessments, setOngoingAssessments] = useState([]);

  const navigate = useNavigate();
  const courseId = "6712a07bde57de8f762e9894";
  useEffect(() => {
    const fetchCourseProgress = async () => {
      const token = await auth.currentUser.getIdToken();
      try {
        const response = await fetch(
          `https://course-compass-backend-zh7c.onrender.com/api/student/course-progress`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) throw new Error(`Failed to fetch course progress`);

        const data = await response.json();
        setCourseProgress(data);
      } catch (error) {
        console.error("Error fetching course progress:", error.message);
      }
    };
    const fetchCourse = async () => {
      const token = await auth.currentUser.getIdToken();
      try {
        const response = await fetch(
          `https://course-compass-backend-zh7c.onrender.com/api/course/get-course/course/${courseId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) throw new Error(`Failed to fetch course progress`);

        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error("Error fetching course:", error.message);
      }
    };
    fetchCourseProgress();
    fetchCourse();
  }, []);

  useEffect(() => {
    if (
      course &&
      courseProgress &&
      Object.keys(course).length > 0 &&
      Object.keys(courseProgress).length > 0
    ) {
      mergeData(course, courseProgress);
    }
  }, [course, courseProgress]);

  console.log(ongoingAssessments);

  const mergeData = (course, courseProgress) => {
    const fetchedOngoingAssessments = [];
    console.log(courseProgress);
    const fetchedCompletedAssessments = [];

    // Month 1 Week 1 Quizzes
    if (course.month1.week1.day) {
      let t = course.month1.week1.day;

      //Check if days array exists in the courseProgress
      const days = courseProgress?.month1?.week1?.days;

      t.forEach((e, i) => {
        // Create the assessment object
        const assessment = {
          id: i + 1,
          title: `Week 1 Day ${i + 1} Quiz`,
          level: e.difficulty,
          topics: e.topics ?? "Yet to be updated",
          description: e.description ?? "Yet to be updated",
          type: "assessment",
          status : courseProgress?.month1?.week1?.days[i]?.attended ?? false, //status false by default to lock
        };

        // Append to the correct array based on the quizSubmitted status
        (days && days[i]?.quizSubmitted === true
          ? fetchedCompletedAssessments
          : fetchedOngoingAssessments
        ).push(assessment);
      });
    }

    // Month 1 Week 1 MiniTest
    if (course.month1.week1.miniTest) {
      let t = course.month1.week1.miniTest;

      //Check if miniTest object exists in courseProgress
      const miniTest = courseProgress?.month1?.week1?.miniTest;

      const assessment = {
        id: 7,
        title: "Week 1: Mini Test",
        level: t.difficulty,
        topics: t.topics ? t.topics : "Yet to be updated",
        description: t.description ? t.description : "Yet to be updated",
        type: "assessment",
        status : courseProgress?.month1?.week1?.days?.[6]?.attended ?? false
      };
      (miniTest && miniTest.quizSubmitted === true
        ? fetchedCompletedAssessments
        : fetchedOngoingAssessments
      ).push(assessment);
    }

    // Month 1 Project Week Projects
    if (course.month1.projectWeeks) {
      let weeks = course.month1.projectWeeks;

      //Check if the projectWeek array exists in the courseProgress
      const projectWeek = courseProgress?.month1?.projectWeek;

      weeks.forEach((week, i) => {
        const project = {
          author: course.author ?? "Yet to be updated",
          id: 8 + i,
          title: week.miniProject.projectName,
          topics: week.miniProject.topics
            ? week.miniProject.topics
            : "Yet to be updated",
          description: week.miniProject.projectDescription
            ? week.miniProject.projectDescription
            : "Yet to be updated",
          type: "project",
          status: projectWeek[i]?.projectStatus ?? "Missing",
          submission : projectWeek[i]?.submissionUrl ?? "",
          courseId : courseId,
          index : i,
          location : "project-week-project",
          status : courseProgress?.month1?.projectWeek[i]?.days[6]?.attended ?? false

        };

        (projectWeek && projectWeek[i]?.projectStatus === "submitted"
          ? fetchedCompletedAssessments
          : fetchedOngoingAssessments
        ).push(project);
      });
    }
    // Month 1 Project Week Tests
    if (course.month1.projectWeeks) {
      let weeks = course.month1.projectWeeks;

      //Check if the projectWeek array exists in the courseProgress
      const projectWeek = courseProgress?.month1?.projectWeek;

      weeks.forEach((week, i) => {
        const assignment = {
          id: 8 + i,
          title: `Project Week ${i + 1} Small Test`,
          level: week.smallTest.difficulty,
          topics: week.smallTest.topics
            ? e.smallTest.topics
            : "Yet to be updated",
          description: week.smallTest.projectDescription
            ? week.smallTest.projectDescription
            : "Yet to be updated",
          type: "assessment",
          status : courseProgress?.month1?.projectWeek[i]?.days[6]?.attended

        };

        (projectWeek && projectWeek[i]?.quizSubmitted === true
          ? fetchedCompletedAssessments
          : fetchedOngoingAssessments
        ).push(assignment);
      });
    }

    // Month 2 Weekly Assignments
    if (course.month2.weeklyAssignments) {
      let weeks = course.month2.weeklyAssignments;

      //Check if the weeks array exists in the courseProgress
      const weeksProgress = courseProgress?.month2?.weeks;

      weeks.forEach((week, i) => {
        const assignment = {
          id: 15 + i,
          title: `Project Month Weekly Assignment ${i + 1}: ${
            week.assignmentName
          }`,
          level: week.difficulty,
          topics: week.topics ? week.topics : "Yet to be updated",
          description: week.assignmentDescription
            ? week.assignmentDescription
            : "Yet to be updated",
          type: "assessment",
          status : courseProgress?.month2?.weeks[i]?.attended ?? false
        };

        (weeksProgress && weeksProgress[i]?.assignmentStatus === "submitted"
          ? fetchedCompletedAssessments
          : fetchedOngoingAssessments
        ).push(assignment);
      });
    }
    // Month 2 Week 5 Test
    if (course.month2.week5Test) {
      let test = course.month2.week5Test;

      //Check if week5_test object exists in courseProgress
      const week5_test = courseProgress?.month2.week5_test;

      const assignment = {
        id: 22,
        title: `Project Month Week 5 Test`,
        level: test.difficulty,
        topics: test.topics ? test.topics : "Yet to be updated",
        description: test.assignmentDescription
          ? test.assignmentDescription
          : "Yet to be updated",
        type: "assessment",
        status : courseProgress?.month2?.weeks[3]?.attended ?? false
        
      };

      (week5_test && week5_test?.quizSubmitted === true
        ? fetchedCompletedAssessments
        : fetchedOngoingAssessments
      ).push(assignment);
    }

    // Month 2 Project
    if (course.month2.project) {
      let finalProject = course.month2.project;

      // Check if finalProject object exists in courseProgress
      const finalProjectCourse = courseProgress?.month2?.finalProject;

      const project = {
        author: course.author ?? "Yet to be updated",
        id: 23,
        title: `Final Project: ${finalProject.projectName}`,
        topics: finalProject.topics ? finalProject.topics : "Yet to be updated",
        description: finalProject.projectDescription,
        type: "project",
        status: finalProjectCourse?.projectStatus ?? "Missing",
        submission : finalProjectCourse?.submissionUrl ?? "",
        courseId : courseId,
        location : "final-project",
        status : courseProgress?.month2?.finalProject?.attended ?? false

      };

      (finalProjectCourse && finalProjectCourse?.projectStatus === "submitted"
        ? fetchedCompletedAssessments
        : fetchedOngoingAssessments
      ).push(project);
    }
    setOngoingAssessments(fetchedOngoingAssessments);
    console.log(ongoingAssessments);
    setCompletedAssessments(fetchedCompletedAssessments);
  };

  const handleStartTest = (assessment) => {
    if (assessment.status === "unlocked") {
      navigate("/module/assessmenttest");
    }
  };

  const handleViewMore = (project) => {
    navigate("/project", {
      state: {
        project: project,
      },
    });
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
          {activeTab === "ongoing" ? (
            ongoingAssessments.length > 0 ? (
              ongoingAssessments.map((assessment, index) => (
                <div
                  key={index}
                  className={`flex justify-between  px-8 mt-10 relative p-4 rounded-lg ${
                    assessment.status === "locked"
                      ? "bg-opacity-60 bg-black z-50  "
                      : ""
                  } ${
                    !assessment.attended
                      ? " fixed z-50 bg-opacity-40 bg-gray-800  cursor-not-allowed   "
                      : "bg-white"
                  }`}
                >
                  <div className="space-y-4  ">
                    <h2 className="text-3xl space-x-2 font-bold">
                      {assessment.title}{" "}
                      {assessment.level ? (
                        <span className="text-[10px] font-light p-1 px-2 bg-[#E67E22] text-white rounded-3xl">
                          {assessment.level}
                        </span>
                      ) : (
                        <></>
                      )}
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
                          assessment.status
                            ? "bg-[#007EFA]"
                            : "cursor-not-allowed"
                        }` }
                        disabled={assessment.status === "locked"}
                        onClick={() => handleStartTest(assessment)}
                      >
                        {!assessment.status ? (
                          <>
                            <BiSolidLock className="inline mr-2" /> Locked
                          </>
                        ) : (
                          "Start the Test"
                        )}
                      </button>
                    ) : assessment.type === "project" && assessment.status? (
                      <button
                        className={`p-2 px-4 font-light rounded-lg text-white ${
                          !assessment.status
                            ? "bg-[#007EFA]"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
                        disabled={assessment.status === "locked"}
                        onClick={() => handleViewMore(assessment)}
                      >
                          {!assessment.status ? (
                          <>
                            <BiSolidLock className="inline mr-2" /> Locked
                          </>
                        ) : (
                          "View More"
                        )}
                      </button>
                    ) : null}
                  </div>
                </div>
              ))
            ) : (
              // No Ongoing Assessments
              <div className="flex justify-between px-8 mt-10">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">
                    No Ongoing Assessments!
                  </h2>
                  <p className="text-xs">
                    You have no ongoing assessments at the moment.
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                    className="p-3 px-4 font-light bg-[#822CE8] text-sm rounded-lg text-white"
                  >
                    Go to Dashboard
                  </button>
                </div>
              </div>
            )
          ) : null}

          {/* Completed Assessments */}
          {activeTab === "completed" ? (
            completedAssessments.length > 0 ? (
              completedAssessments.map((assessment, index) => (
                <div key={index} className="flex justify-between px-8 mt-10">
                  <div className="space-y-4">
                    <h2 className="text-3xl space-x-2 font-bold">
                      {assessment.title}{" "}
                      {assessment.level ? (
                        <span className="text-[10px] font-light p-1 px-2 bg-[#E67E22] text-white rounded-3xl">
                          {assessment.level}
                        </span>
                      ) : (
                        <></>
                      )}
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
            )
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Assessments;
