import Aitutore from "../../components/Instructor/Aitutore";
import LuctherNavbar from "../../components/Instructor/LuctherNavbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Studimg from "../../assets/Image/stud1.png";

const Grading = () => {
  const { assessmentId } = useParams(); // Get the dynamic assessmentId from the URL
  const navigate = useNavigate();

  const [isGradingPending, setGradingPending] = useState(true);

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


  const students = [
    { id: 1, name: "Michelle Emerson" },
    { id: 2, name: "John Doe" },
    { id: 3, name: "Jane Smith" },
    { id: 4, name: "Alice Johnson" },
    
  ];

  // Find the assessment by the id
  const assessment = Assessments.find((a) => a.id === assessmentId);

  // If no assessment is found, display a message
  if (!assessment) {
    return <p>Assessment not found!</p>;
  }

  const handleSubmitGrading = () => {
    setGradingPending(false); // Mark grading as completed
  };

 const handleAssessStudent = (studentId, studentname) => {
   navigate(`/studentmark/${assessmentId}/${studentId}/${studentname}`);
 };


  return (
    <>
      <LuctherNavbar />
      <Aitutore />
      <div className="relative pt-10">
        <div>
          <div>
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
              </div>

              <div>
                <hr className="mt-2 border-t-[1px] border-black/10 w-96" />
              </div>
            </div>
          </div>

          {/* Display the selected assessment */}
          <div>
            <div className="container mx-auto mt-10 border-2 drop-shadow-md">
              <div className="flex justify-between px-8 mt-2 relative p-4 rounded-lg">
                <div className="space-y-4">
                  <h2 className="text-3xl space-x-2 font-bold">
                    {assessment.title}
                    <span className="text-[10px] ml-2 font-light p-1 px-2 bg-[#E67E22] text-white rounded-3xl">
                      {assessment.level}
                    </span>
                    <span className="text-[10px] font-light p-1 px-2 bg-[#00BF63] text-white rounded-3xl">
                      {assessment.topics}
                    </span>
                  </h2>
                  <p className="text-xs">{assessment.description}</p>
                </div>

                <div className="mt-6">
                  {isGradingPending ? (
                    <button
                      onClick={handleSubmitGrading}
                      className="text-[#FF0000] p-2 rounded-lg">
                      Grading Pending
                    </button>
                  ) : (
                    <button className="my-auto text-[#00BF63] p-2 rounded-lg cursor-not-allowed">
                      Graded
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student list section */}
        <div className="mt-5 flex px-10 pr-40">
          <div className="w-2/12">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Filters</h3>
              <div>
                <select
                  className="border-[1px] p-2 px-3 rounded-3xl border-black/40"
                  name="name-arrangement"
                  id="name-arrangement">
                  <option value="A to Z">Name: A to Z </option>
                  <option value="Z to A">Name: Z to A </option>
                </select>
              </div>
              <div>
                <select
                  className="border-[1px] p-2 px-3 rounded-3xl border-black/40"
                  name="sort"
                  id="sort">
                  <option className="rounded-3xl" value="ascending">
                    Sort: Ascending
                  </option>
                  <option className="rounded-3xl" value="descending">
                    Sort: Descending
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="w-10/12 border-l-2">
            <div className="flex">
              <h2 className="font-bold text-xl px-5">Student Assignments</h2>
              <p className="px-2 w-9 my-auto border-[1px] rounded-full border-black/40">
                {students.length}
              </p>
            </div>

            <div className="py-5">
              <div className="flex space-x-3 container overflow-x-scroll overflow-hidden">
                <div className="grid grid-cols-2 grid-rows-4 gap-3 w-full">
                  {students.map((student) => (
                    <div
                      key={student.id}
                      className="flex space-x-3 col-span-1 px-5 p-2 mx-3 rounded-xl mt-3 justify-between bg-[#EEEEEE]">
                      <div className="my-auto flex space-x-3">
                        <p className="my-auto text-xl font-semibold">
                          {student.id}
                        </p>
                        <div className="flex space-x-2">
                          <img
                            className="size-10 my-auto"
                            src={Studimg}
                            alt="student"
                          />
                          <h3 className="my-auto">{student.name}</h3>
                        </div>
                      </div>
                      <div className="my-auto">
                        <button
                          onClick={() => handleAssessStudent(student.id,student.name)}
                          className="p-1 px-4 rounded-3xl bg-white border-[1px] border-black/30 text-base font-medium">
                          Assess
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Grading;
