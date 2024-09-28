import { useState } from "react";

import { LuDownload } from "react-icons/lu";
import {
  IoPlaySkipBackOutline,
  IoPlaySkipForwardOutline,
} from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link} from "react-router-dom";



const ModuleVideo = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showAssessment, setShowAssessment] = useState(false);

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
  }

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="32"
              viewBox="0 0 26 15"
              fill="none">
              <path
                d="M19.941 6.88032C19.9401 7.10382 19.8691 7.32142 19.7382 7.50256C19.6073 7.6837 19.4229 7.8193 19.211 7.89032L17.331 8.51032C16.7408 8.70769 16.2047 9.04006 15.7655 9.48101C15.3263 9.92196 14.996 10.4593 14.801 11.0503L14.151 12.9203C14.0763 13.129 13.9404 13.3102 13.761 13.4403C13.625 13.5383 13.4678 13.6026 13.3021 13.6279C13.1365 13.6533 12.9672 13.6391 12.8082 13.5864C12.6491 13.5337 12.5048 13.4441 12.3871 13.3248C12.2694 13.2055 12.1816 13.0601 12.131 12.9003L11.501 11.0203C11.2978 10.4275 10.9548 9.89243 10.501 9.46032C10.0622 9.0099 9.52472 8.66757 8.931 8.46032L7.051 7.83032C6.83811 7.76331 6.65212 7.6302 6.52 7.45032C6.3904 7.26768 6.32078 7.04927 6.32078 6.82532C6.32078 6.60137 6.3904 6.38296 6.52 6.20032C6.6529 6.01516 6.84244 5.87827 7.06 5.81032L8.93 5.18032C9.53186 4.97791 10.0769 4.63513 10.52 4.18032C10.97 3.73732 11.313 3.19632 11.52 2.60032L12.14 0.75032C12.1986 0.538952 12.3251 0.352723 12.5 0.22032C12.6759 0.0791593 12.8944 0.00162826 13.12 0.00031986C13.3434 -0.00506787 13.5632 0.0577181 13.75 0.18032C13.94 0.299528 14.0844 0.47915 14.16 0.69032L14.79 2.60032C14.997 3.19632 15.34 3.73732 15.79 4.18032C16.2303 4.6338 16.7717 4.9765 17.37 5.18032L19.24 5.84032C19.4505 5.90618 19.6333 6.03977 19.76 6.22032C19.89 6.41432 19.955 6.64532 19.941 6.88032ZM10.071 13.8103C10.0705 14.0142 10.0077 14.2131 9.891 14.3803C9.77015 14.5429 9.60276 14.665 9.411 14.7303L8.061 15.1803C7.68277 15.3137 7.34051 15.5327 7.061 15.8203C6.77611 16.102 6.55749 16.4436 6.421 16.8203L5.951 18.1603C5.88565 18.3521 5.76359 18.5195 5.601 18.6403C5.43261 18.7587 5.23181 18.8222 5.026 18.8222C4.82019 18.8222 4.61939 18.7587 4.451 18.6403C4.28841 18.5195 4.16635 18.3521 4.101 18.1603L3.661 16.8203C3.52421 16.4435 3.30525 16.1019 3.02 15.8203C2.73828 15.5354 2.39669 15.3168 2.02 15.1803L0.67 14.7403C0.476923 14.6723 0.30938 14.5466 0.19 14.3803C0.0697355 14.2143 0.00340744 14.0153 0 13.8103C0.00360296 13.6041 0.0708806 13.404 0.192615 13.2376C0.31435 13.0711 0.484586 12.9463 0.68 12.8803L2.02 12.4403C2.39532 12.3011 2.73615 12.0826 3.0192 11.7995C3.30224 11.5165 3.52083 11.1756 3.66 10.8003L4.11 9.48032C4.16993 9.29112 4.2848 9.12403 4.44 9.00032C4.60224 8.87672 4.7984 8.80569 5.00217 8.79676C5.20593 8.78782 5.40756 8.8414 5.58 8.95032C5.751 9.06832 5.883 9.23532 5.96 9.43032L6.41 10.8003C6.54917 11.1756 6.76776 11.5165 7.0508 11.7995C7.33385 12.0826 7.67469 12.3011 8.05 12.4403L9.39 12.9103C9.58132 12.9713 9.74677 13.0945 9.86 13.2603C9.98709 13.4164 10.0607 13.6092 10.07 13.8103"
                fill="white"
              />
            </svg>
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
            {/* Close button */}

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
              <Link to={"quiztest"}>
                <button className="p-3  text-base text-white bg-[#007EFA] px-5 rounded-xl ">
                  Start Test
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {showAssessment && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="w-1/2 space-y-4 rounded-3xl shadow-lg relative bg-white p-6">
            {/* Close button */}

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
              <Link to={"assessementtest"}>
                <button className="p-3  text-base text-white bg-[#007EFA] px-5 rounded-xl ">
                  Start Test
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModuleVideo;
