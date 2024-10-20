import { useParams } from "react-router-dom";
import { useState } from "react";
import LuctherNavbar from "../../components/Instructor/LuctherNavbar";
import Aitutore from "../../components/Instructor/Aitutore";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa6";
import Studimg from "../../assets/Image/stud1.png";
import git from "../../assets/Image/git_icon.png";

const Studentmark = () => {
  const { assessmentId, studentId } = useParams(); // Get studentId from URL params

  // State to manage marks and remarks
  const [marks, setMarks] = useState({
    analysis: 0,
    execution: 0,
    evaluation: 0,
  });
  const [remarks, setRemarks] = useState("");
  const [isAssigningMarks, setIsAssigningMarks] = useState(false); // State to control visibility of assign marks div
  const [hasMarksAssigned, setHasMarksAssigned] = useState(false); // State to know if marks are already assigned
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  // Mock assessment data
  const Assessments = [
    {
      id: "1",
      title: "Week 2: Mini Project",
      level: "Intermediate",
      topics: "Week 2: All Topics",
      description: "Create a simple project using the DOM.",
      type: "miniproject",
    },
    {
      id: "2",
      title: "Week 3 Mini Project",
      level: "Intermediate",
      topics: "Week 3: All Topics",
      description: "Work on a mini project using async/await.",
      type: "miniproject",
    },
    {
      id: "3",
      title: "Week 4 Final Project",
      level: "Advanced",
      topics: "Week 4: All Topics",
      description: "Final project covering all concepts.",
      type: "miniproject",
    },
  ];

  // Mock student data
  const students = [
    { id: 1, name: "Michelle Emerson" },
    { id: 2, name: "John Doe" },
    { id: 3, name: "Jane Smith" },
    { id: 4, name: "Alice Johnson" },
  ];

  // Find the current assessment by assessmentId
  const assessment = Assessments.find((a) => a.id === assessmentId);

  // Find the current student by studentId
  const student = students.find((s) => s.id === parseInt(studentId));

  // If no assessment is found, show a message or redirect
  if (!assessment) {
    return <p>Assessment not found!</p>;
  }

  // If no student is found, show a message or redirect
  if (!student) {
    return <p>Student not found!</p>;
  }

  // Function to handle mark changes, with a limit of 10 for each category
  const handleMarkChange = (e, category) => {
    const value = parseInt(e.target.value) || 0;

    if (value <= 10) {
      setMarks({ ...marks, [category]: value });
      setErrorMessage(""); // Clear error message when within limits
    } else {
      setErrorMessage(`The maximum mark for ${category} is 10.`);
    }
  };

  // Handle mark submission
  const handleSubmitMarks = () => {
    const totalMarks = marks.analysis + marks.execution + marks.evaluation;

    if (totalMarks > 40) {
      setErrorMessage("Total marks cannot exceed 40.");
    } else {
      setHasMarksAssigned(true); // Marks have been assigned
      setIsAssigningMarks(false); // Hide the assign marks form
      setErrorMessage(""); // Clear any previous errors
    }
  };

  return (
    <>
      <LuctherNavbar />
      <Aitutore />
      <div className="relative pt-10 h-svh font-inter">
        <div className="absolute top-10 left-5">
          <Link to={`/classroam/${assessmentId}`}>
            <RxDoubleArrowLeft size={32} />
          </Link>
        </div>
        <div className="ml-16">
          <div className="flex">
            <h3 className="text-2xl font-bold">Assessment</h3>
            <FaAngleRight className="size-5 mt-2 my-auto" />
            <h3 className="text-2xl font-bold">{assessment.title}</h3>
            <FaAngleRight className="size-5 mt-2 my-auto" />
            <h3 className="text-2xl font-bold">Assess</h3>
          </div>

          <div>
            <hr className="mt-2 border-t-[1px] border-black/10 w-96" />
          </div>

          <div className="flex s w-80 col-span-1 px-5 p-2 mx-3 rounded-xl mt-3 justify-between bg-[#EEEEEE]">
            <div className="my-auto flex space-x-9">
              <p className="my-auto text-xl font-semibold">{student.id}</p>{" "}
              <div className="flex space-x-6">
                <img className="size-10 my-auto" src={Studimg} alt="student" />
                <h3 className="my-auto">{student.name}</h3>{" "}
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mt-10 w-1/2">
              <h2 className="text-2xl font-semibold">Project File</h2>
              <div className="flex space-x-4">
                <div className="space-y-3 border-r-2 pr-5">
                  <div className="flex mt-5 border-2 rounded-md">
                    <div className="bg-[#DADCE0] ">
                      <img
                        className=" size-14 rounded-md"
                        src={git}
                        alt="github"
                      />
                    </div>
                    <div className="px-2">
                      <p className="font-semibold text-lg">Link</p>
                      <p className="text-sm text-[#5F6369]">
                        http://gauransh.dixit.bdes
                      </p>
                    </div>
                  </div>
                  <button className="w-full rounded-md text-center border-2 p-2">
                    View Link
                  </button>
                </div>
                <div className="space-y-9 mt-2">
                  <p className="text-5xl text-[#5A5A5A] text-center">
                    {marks.analysis + marks.execution + marks.evaluation}/40
                  </p>
                  <button
                    className="w-40 text-center rounded-md border-2 p-2"
                    onClick={() => setIsAssigningMarks(true)} // Show the form when "Assign Marks" or "Edit" is clicked
                  >
                    {hasMarksAssigned ? "Edit Marks" : "Assign Marks"}
                  </button>
                </div>
              </div>
            </div>

            {/* Assign Marks Form */}
            {isAssigningMarks && (
              <div className="w-1/2 mt-12 space-y-4 px-32">
                {errorMessage && (
                  <p className="text-red-500 font-semibold">{errorMessage}</p>
                )}
                <div className="flex justify-between border-b-2 py-2">
                  <div>
                    <h3>Assign Marks</h3>
                  </div>
                  <div>
                    <p>
                      {marks.analysis + marks.execution + marks.evaluation}/40
                    </p>
                  </div>
                </div>
                <div className="flex justify-between border-b-2 py-2">
                  <div>
                    <h3>Analysis</h3>
                  </div>
                  <div>
                    <input
                      type="number"
                      name="mark"
                      id="mark-analysis"
                      placeholder="Mark: 8/10"
                      value={marks.analysis}
                      onChange={(e) => handleMarkChange(e, "analysis")}
                      className="w-24"
                      max="10"
                    />
                  </div>
                </div>
                <div className="flex justify-between border-b-2 py-2">
                  <div>
                    <h3>Execution</h3>
                  </div>
                  <div>
                    <input
                      type="number"
                      name="mark"
                      id="mark-execution"
                      placeholder="Mark: 8/10"
                      value={marks.execution}
                      onChange={(e) => handleMarkChange(e, "execution")}
                      className="w-24"
                      max="10"
                    />
                  </div>
                </div>
                <div className="flex justify-between border-b-2 py-2">
                  <div>
                    <h3>Evaluation</h3>
                  </div>
                  <div>
                    <input
                      type="number"
                      name="mark"
                      id="mark-evaluation"
                      placeholder="Mark: 8/10"
                      value={marks.evaluation}
                      onChange={(e) => handleMarkChange(e, "evaluation")}
                      className="w-24"
                      max="10"
                    />
                  </div>
                </div>

                <div>
                  <h2>Remarks</h2>
                  <textarea
                    name="remark"
                    id="remark"
                    cols="10"
                    rows="5"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    className="w-full"
                    placeholder="Comment on student performance"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="p-1 text-white px-2 bg-[#007EFA] rounded-md"
                    onClick={handleSubmitMarks} // Submit marks and hide the form
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Studentmark;
