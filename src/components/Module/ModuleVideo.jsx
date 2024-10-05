import { useState } from "react";
import { LuDownload } from "react-icons/lu";
import {
  IoPlaySkipBackOutline,
  IoPlaySkipForwardOutline,
} from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types"; 


const ModuleVideo = ({ setShowQuizTest, setShowAssessmentTest }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showAssessment, setShowAssessment] = useState(false);

  // Use navigate to programmatically redirect to quiztest

  const handleQuizClick = () => {
    setShowQuiz(true);
  };

  const handleAssessmentClick = () => {
    setShowAssessment(true);
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
  };

  const handleCloseAssessment = () => {
    setShowAssessment(false);
  };

  const startQuizTest = () => {
    setShowQuizTest(true);
  };

  const startAssessmentTest = () => {
    setShowAssessmentTest(true);
  };

  return (
    <>
      <div className="flex  px-5">
        <div className=" w-10/12  relative">
          <div className="flex space-x-1 font-inter">
            <h2 className="text-2xl font-semibold">Month 1 </h2>
            <MdOutlineKeyboardArrowRight className="my-auto" size={24} />
            <h2 className="text-2xl font-semibold">Week1</h2>
            <MdOutlineKeyboardArrowRight className="my-auto" size={24} />
            <h2 className="text-2xl font-semibold">Day#1</h2>
          </div>

          <div className="mt-5 font-inter">
            <h3 className="py-2 font-semibold text-2xl ">
              Deep Learning Fundamentals{" "}
            </h3>
            <div className=" space-x-10 px-5 py-2 flex  place-content-end  ">
              <button className="p-2 flex border-2  shadow-3xl rounded-full">
                {" "}
                <IoPlaySkipBackOutline className="my-auto" />
                Previous
              </button>
              <button className="p-2 flex border-2  shadow-3xl rounded-full">
                <IoPlaySkipForwardOutline className="my-auto" />
                Next
              </button>
            </div>
            <div className="w-full h-full rounded-2xl">
              <iframe
                className="w-full lg:h-96 xl:h-96 rounded-3xl"
                src="https://www.youtube.com/embed/svCCWOK2fQI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div>
          <div className="py-5 space-y-3 font-inter">
            <h4 className="text-lg font-medium">About the Topic</h4>
            <p className="w-full text-sm">
              Lorem ipsum dolor sit amet consectetur. Nisi feugiat id proin
              bibendum senectus aliquam nulla. Nisl sed turpis nunc enim at amet
              orci. Libero egestas in netus volutpat. Et iaculis faucibus lacus
              integer. Etiam libero eu rhoncus dis. Nulla ac nisi donec
              ridiculus ultrices rhoncus. Quis in arcu lectus cras tortor enim
              auctor venenatis in. Vel libero aenean at proin ut ornare. Morbi
              ultrices rhoncus curabitur cursus nulla consectetur.
            </p>
            <button className="p-3 flex  text-white bg-black rounded-xl">
              Download Notes as PDF{" "}
              <LuDownload size={18} className=" ml-2 my-auto" />
            </button>
          </div>
        </div>
        <div className=" w-4/12 pl-5 space-y-5">
          <div className="p-1  w-56 text-white flex rounded-xl bg-ai-gradient">
            <h2 className=" text-center p-2   ">Generate Notes with AI</h2>
            {/* SVG content */}
          </div>

          <div className=" border-2 space-y-4 block p-4  text-xs font-inter rounded-2xl  shadow-2xl">
            <div className="flex space-x-4">
              <p className="p-2 bg-quiz text-white rounded-full">This class</p>
              <p className="p-2 bg-quiz text-white rounded-full">Beginner</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Quiz Time</h2>
              <p className="text-sm font-normal">
                Take the quiz to assess yourself now.
              </p>
            </div>

            <button
              onClick={handleQuizClick}
              className="w-full font-semibold  bg-black text-lg text-white p-2 rounded-xl">
              Go to Quiz
            </button>
          </div>

          <div className=" border-2 space-y-4 block p-4  text-xs font-inter rounded-2xl  shadow-2xl">
            <div className="flex space-x-4">
              <p className="p-2 bg-[#4A4A4A] flex-shrink-0 text-white rounded-full">
                Month 1
              </p>
              <p className="p-2 bg-[#D1940C] text-white rounded-full">
                Intermediate
              </p>
              <p className="p-2 bg-[#F00] text-white rounded-full">HOTS</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Mini-Test 1</h2>
              <p className="text-sm font-normal">
                Take the assessment to complete the module.
              </p>
            </div>

            <button
              onClick={handleAssessmentClick}
              className="w-full  font-semibold bg-black text-lg text-white p-2 rounded-xl">
              Go to Assessment
            </button>
          </div>
        </div>
      </div>

      {showQuiz && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="w-1/2 space-y-4 rounded-3xl shadow-lg relative bg-white p-6">
            <h2 className="text-2xl  font-inter font-semibold ">
              Quiz Instructions
            </h2>
            <div className="px-5 py-5">
              <ul className="list-disc text-sm">
                <li>
                  Lorem ipsum dolor sit amet consectetur. Habitant scelerisque
                  nunc lacinia augue elit faucibus at. Vulputate risus consequat
                  tempus at faucibus facilisi vitae.
                </li>
                <li>
                  Aliquam hendrerit risus eu in. Congue leo quis enim accumsan
                  in metus aliquet cras.Lorem ipsum dolor sit amet consectetur.
                  Habitant scelerisque nunc lacinia augue elit faucibus at.{" "}
                </li>
                <li>
                  Vulputate risus consequat tempus at faucibus facilisi vitae.
                  Aliquam hendrerit risus eu in. Congue leo quis enim accumsan
                  in metus aliquet cras.Lorem ipsum dolor sit amet consectetur.{" "}
                </li>
                <li>
                  Habitant scelerisque nunc lacinia augue elit faucibus at.
                  Vulputate risus consequat tempus at faucibus facilisi vitae.
                  Aliquam hendrerit risus eu in. Congue leo quis enim accumsan
                  in metus aliquet cras.
                </li>
              </ul>
            </div>

            <div className="flex text-xs space-x-4">
              <p className="p-2 bg-[#D1940C] flex-shrink-0 text-white rounded-full">
                Total Questions: 30
              </p>
              <p className="p-2 bg-[#E67E22] text-white rounded-full">
                Intermediate
              </p>
            </div>

            <div className="flex font-inter justify-end px-5 space-x-10">
              <button
                onClick={handleCloseQuiz}
                className="p-3 text-base border-[1px] border-black px-5 rounded-xl ">
                Cancel
              </button>
              <button
                onClick={startQuizTest} // Start quiz on button click
                className="p-3  text-base text-white bg-[#007EFA] px-5 rounded-xl ">
                Start Test
              </button>
            </div>
          </div>
        </div>
      )}

      {showAssessment && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="w-1/2 space-y-4 rounded-3xl shadow-lg relative bg-white p-6">
            <h2 className="text-2xl  font-inter font-semibold ">
              Mini-Test 1 Instructions
            </h2>
            <div className="px-5 py-5">
              <ul className="list-disc text-sm">
                <li>
                  Lorem ipsum dolor sit amet consectetur. Habitant scelerisque
                  nunc lacinia augue elit faucibus at. Vulputate risus consequat
                  tempus at faucibus facilisi vitae.
                </li>
                <li>
                  Aliquam hendrerit risus eu in. Congue leo quis enim accumsan
                  in metus aliquet cras.Lorem ipsum dolor sit amet consectetur.
                  Habitant scelerisque nunc lacinia augue elit faucibus at.{" "}
                </li>
                <li>
                  Vulputate risus consequat tempus at faucibus facilisi vitae.
                  Aliquam hendrerit risus eu in. Congue leo quis enim accumsan
                  in metus aliquet cras.Lorem ipsum dolor sit amet consectetur.{" "}
                </li>
                <li>
                  Habitant scelerisque nunc lacinia augue elit faucibus at.
                  Vulputate risus consequat tempus at faucibus facilisi vitae.
                  Aliquam hendrerit risus eu in. Congue leo quis enim accumsan
                  in metus aliquet cras.
                </li>
              </ul>
            </div>

            <div className="flex text-xs space-x-4">
              <p className="p-2 bg-[#D1940C] flex-shrink-0 text-white rounded-full">
                Total Questions: 50
              </p>
              <p className="p-2 bg-[#E67E22] text-white rounded-full">
                Intermediate
              </p>
              <p className="p-2 bg-quiz text-white rounded-full">Week 1</p>
            </div>

            <div className="flex font-inter justify-end px-5 space-x-10">
              <button
                onClick={handleCloseAssessment}
                className="p-3 text-base border-[1px] border-black px-5 rounded-xl ">
                Cancel
              </button>
              <button
                onClick={startAssessmentTest} // Start assessment on button click
                className="p-3  text-base text-white bg-[#007EFA] px-5 rounded-xl ">
                Start Test
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


ModuleVideo.propTypes = {
  setShowQuizTest: PropTypes.func.isRequired,
  setShowAssessmentTest: PropTypes.func.isRequired,
};


export default ModuleVideo;
