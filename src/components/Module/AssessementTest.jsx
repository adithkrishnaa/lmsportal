
import { useState } from "react";
import logo from "../../assets/Image/logo1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const AssessmentTest = () => {
  const [questions] = useState([
    {
      question: "Question 1: Lorem ipsum dolor sit amet consectetur?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option A",
    },
    {
      question: "Question 2: Tortor facilisis massa magna aliquet?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option B",
    },
    // Add more questions here (up to 30)
  ]);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAssessmentSubmit, setshowAssessmentSubmit] = useState(false);

  const navigate = useNavigate(); 

  // Handle selecting an answer
  const handleSelectAnswer = (questionIndex, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: option });
  };

  // Handle submission logic
  const handleSubmit = () => {
    setshowAssessmentSubmit(true);
  };

  const handleclose = () => {
    setshowAssessmentSubmit(false);
  };

   const handleSubmitConfirm = () => {
     if (Object.keys(selectedAnswers).length === questions.length) {
       if (window.confirm("Are you sure you want to submit?")) {
      
         navigate("/assessmentreport"); 
       }
     } else {
       alert("Please answer all questions before submitting.");
     }
   };

  return (
    <div className="px-5 w-full font-inter">
      {/* Header Section */}
      <div className="flex w-full justify-between place-content-between">
        <div>
          <div className="flex space-x-1 font-inter">
            <h2 className="text-2xl font-semibold">Month 1 </h2>
            <MdOutlineKeyboardArrowRight className="my-auto" size={24} />
            <h2 className="text-2xl font-semibold">Week 1</h2>
            <MdOutlineKeyboardArrowRight className="my-auto" size={24} />
            <h2 className="text-2xl font-semibold">Day #6</h2>
          </div>
          <h2 className="flex mt-8 font-semibold gap-2 text-xl">
            1st Week: 50 Question Assessment
            <p className=" text-[8px] bg-[#E67E22] w-14  font-light pl-1 my-auto text-white rounded-full">
              Intermediate
            </p>
          </h2>
        </div>
        <div className="my-auto w-56 place-content-end">
          <p className="bg-[#FFC4C4] p-4 rounded-t-3xl">Total Questions: 50</p>
          <p className="p-4 border-2 rounded-b-3xl">
            Time Left: {Math.floor(15)}:00
          </p>
        </div>
      </div>
      {/* Scrollable Assessment Section */}
      <div className="mt-10 h-[60vh] font-inter overflow-y-auto space-y-8">
        {questions.map((question, questionIndex) => (
          <div
            key={questionIndex}
            className="p-5 bg-gray-100 rounded-lg shadow-md">
            {/* Question */}
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">
                Question {questionIndex + 1}:
              </h3>
              <p className=" text-secondary text-base font-normal">(1 mark)</p>
            </div>

            <p className="mb-4">{question.question}</p>

            {/* Options as radio buttons */}
            <div className="space-y-2">
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex items-center">
                  <input
                    type="radio"
                    id={`question-${questionIndex}-option-${optionIndex}`}
                    name={`question-${questionIndex}`}
                    value={option}
                    checked={selectedAnswers[questionIndex] === option}
                    onChange={() => handleSelectAnswer(questionIndex, option)}
                    className="mr-2"
                  />
                  <label
                    htmlFor={`question-${questionIndex}-option-${optionIndex}`}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex  justify-center">
        <div>
          <p className=" text-center text-lg font-semibold py-1">
            End of Mini-Test 1: Week 1
          </p>
          <button
            className="px-4 py-2 w-72 justify-center text-center flex bg-[#007EFA] text-white rounded-lg"
            onClick={handleSubmit}>
            Submit
            <CiLocationArrow1 className=" my-auto rotate-45 " size={25} />
          </button>
        </div>
      </div>

      {showAssessmentSubmit && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="w-1/4 mx-auto px-2 py-5 space-y-4 rounded-3xl justify-center shadow-lg relative bg-white p-2">
            <div className="flex py-2 justify-center">
              <img className=" w-40 " src={logo} alt="" />
            </div>

            <p className=" text-center text-lg font-semibold">
              Are you sure you want to <br /> submit the test?
            </p>
            <div className="block space-y-3 px-10">
              <button
                onClick={handleSubmitConfirm}
                className=" bg-[#007EFA] p-2 shadow-xl rounded-xl text-white w-full">
                Submit
              </button>
              <button
                onClick={handleclose}
                className=" p-2 rounded-xl shadow-xl w-full">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssessmentTest;
