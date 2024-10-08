import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Aitutore from "../../components/Instructor/Aitutore";
import LuctherNavbar from "../../components/Instructor/LuctherNavbar";
import personimg from "../../assets/Image/person2.png";
import { CiVideoOn, CiVideoOff }  from "react-icons/ci"; // Added video off icon
import { IoIosMicOff, IoIosMic } from "react-icons/io"; // Added mic on icon

const Livepage = () => {
  const [isVideoOn, setIsVideoOn] = useState(true); // State to toggle video
  const [isMicOn, setIsMicOn] = useState(false); // State to toggle mic
  const [showEndStreamPopup, setShowEndStreamPopup] = useState(false); // State for popup
  const navigate = useNavigate();

  // Toggle video on/off
  const handleVideoToggle = () => {
    setIsVideoOn((prevState) => !prevState);
  };

  // Toggle mic on/off
  const handleMicToggle = () => {
    setIsMicOn((prevState) => !prevState);
  };

  // Handle end stream click - show confirmation popup
  const handleEndStreamClick = () => {
    setShowEndStreamPopup(true);
  };

  // Close the popup
  const handleClosePopup = () => {
    setShowEndStreamPopup(false);
  };

  
  const handleConfirmEndStream = () => {
    setShowEndStreamPopup(false);
    navigate("/luctherdashboard"); 
  };

  return (
    <>
      <LuctherNavbar />
      <Aitutore />
      <div className="pt-10  font-inter px-20">
        <div>
          <div>
            <iframe
              className="w-5/6 lg:min-h-96 xl:h-96 rounded-xl"
              src="https://www.youtube.com/embed/svCCWOK2fQI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
          <div className="flex justify-between w-5/6 py-10">
            <div>
              <p className="flex font-normal items-center font-inter">
                <img className="w-10 mr-2" src={personimg} alt="Person" />
                Priya Chawla
              </p>
            </div>
            <div className="flex space-x-3">
              {/* Toggle Video Icon */}
              {isVideoOn ? (
                <CiVideoOn size={35} onClick={handleVideoToggle} />
              ) : (
                <CiVideoOff size={35} onClick={handleVideoToggle} />
              )}

              {/* Toggle Mic Icon */}
              {isMicOn ? (
                <IoIosMic size={35} onClick={handleMicToggle} />
              ) : (
                <IoIosMicOff size={35} onClick={handleMicToggle} />
              )}
            </div>
            <div>
              <button
                className="p-2 px-4 bg-[#FF0000] text-white font-semibold rounded-md"
                onClick={handleEndStreamClick}>
                End Stream
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup for confirming end stream */}
      {showEndStreamPopup && (
        <div className="fixed top-0 left-0 w-full font-inter  h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <h2 className=" font-light mb-4">
              Are you sure you want to end the stream?
            </h2>
            <div className="flex justify-end space-x-5  ">
              <button
                className="w-20  p-1 rounded-md"
                onClick={handleClosePopup}>
                NOT YET
              </button>
              <button
                className="w-20 p-1 bg-[#FF0000] text-white rounded-md"
                onClick={handleConfirmEndStream}>
                END
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Livepage;
