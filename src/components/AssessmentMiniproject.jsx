import Aicalender from "./Aicalender";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ai from "../assets/Image/ai.png";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { IoClose } from "react-icons/io5"; 


const AssessmentMiniproject = () => {
  const [showLink, setshowLink] = useState(false);
  const [link, setLink] = useState(""); // State to store the link
  const [addedLink, setAddedLink] = useState(null); // State to store added link
  const [status, setStatus] = useState("Assigned"); // Status: Assigned or Handed in
  const [handedIn, setHandedIn] = useState(false); // Track whether handed in

  // Show the link input modal
  const handleLinkModal = () => {
    setshowLink(true);
  };

  // Handle link addition and close modal
  const handleAddLink = () => {
    if (link) {
      setAddedLink(link);
      setshowLink(false);
      setLink(""); // Clear input
    }
  };

  // Handle link removal
  const handleDeleteLink = () => {
    setAddedLink(null);
    setHandedIn(false);
    setStatus("Assigned"); // Reset status
  };

  // Handle hand in / unsubmit
  const handleHandIn = () => {
    setHandedIn(!handedIn);
    setStatus(handedIn ? "Assigned" : "Handed in");
  };

  return (
    <>
      <Navbar />
      <Aicalender />
      <div className="pl-20 pt-10 h-screen font-inter relative">
        <div className="top-28 left-8 absolute">
          <Link to={"/assessments"}>
            <RxDoubleArrowLeft size={25} className="my-auto" />
          </Link>
        </div>
        <div className="flex space-x-1 font-inter">
          <Link to={"/assessments"}>
            <h2 className="text-2xl font-semibold">Assessments</h2>
          </Link>
          <MdOutlineKeyboardArrowRight className="my-auto" size={28} />
          <h2 className="text-2xl font-semibold">Week 2: Mini Project 1</h2>
        </div>
        <div className="py-10 flex">
          <div className="w-9/12">
            <div className="flex space-x-4">
              <img src={ai} alt="AI Project" />
              <div className="space-y-4">
                <h2 className="text-3xl flex font-medium">
                  Week 2: Mini Project 1
                  <div className="ml-2 space-x-2">
                    <span className="text-[13px] font-light p-1 px-2 bg-[#E67E22] text-white rounded-3xl">
                      Intermediate
                    </span>
                    <span className="text-[13px] font-light p-1 px-2 bg-quiz text-white rounded-3xl">
                      Week 2: All Topics
                    </span>
                  </div>
                </h2>
              </div>
            </div>
            <div className="flex py-5 justify-between">
              <div className="flex space-x-3">
                <p>Priya Chawla</p>
                <span>.</span>
                <p>Sep 13</p>
              </div>
              <div className="flex space-x-4">
                <p>Sep 13</p>
                <p>Due Today</p>
              </div>
            </div>
            <div className="text-left space-y-4 text-base font-medium">
              <p>
                Lorem ipsum dolor sit amet consectetur. Diam id tortor euismod
                maecenas quis scelerisque risus in.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Diam id tortor euismod
                maecenas quis scelerisque risus in. Lorem ipsum dolor sit amet
                consectetur. Diam id tortor euismod maecenas quis scelerisque
                risus in. dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="w-3/12 space-y-3 px-10">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">Your work</h3>
              <p className="text-[#2F7D31] font-medium">{status}</p>
            </div>

            {/* Show the added link if it exists */}
            {addedLink && (
              <div className="bg-gray-100 p-3 rounded-md flex justify-between">
                <a
                  href={addedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline">
                  {addedLink}
                </a>
                <button onClick={handleDeleteLink}>
                  <IoClose size={20} className="text-red-600" />
                </button>
              </div>
            )}

            {/* Add or create button */}
            {!addedLink && (
              <button
                onClick={handleLinkModal}
                className="flex space-x-2 text-center border-2 justify-center p-2 text-[#007EFA] w-full rounded-md">
                <GoPlus className="my-auto" size={23} />
                Add or create
              </button>
            )}

            <p className="text-[11px] text-secondary font-light">
              Work cannot be turned in after the due date
            </p>

            {/* Hand In button */}
            {addedLink && (
              <button
                onClick={handleHandIn}
                className={`p-2 w-full rounded-md ${
                  handedIn
                    ? " text-[#424242]" // Unsubmit button
                    : "bg-[#007EFA] text-white"
                }`}>
                {handedIn ? "Unsubmit" : "Hand in"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal to add the link */}
      {showLink && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="w-1/4 mx-auto px-5 py-5 space-y-8 rounded-3xl justify-center shadow-lg relative bg-white p-2">
            <h2 className="text-xl font-semibold">Add link</h2>
            <div className="relative mt-1">
              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)} // Store the link
                id="link"
                className="block px-2.5 pb-2 pt-5 w-full text-sm text-black bg-transparent border-b-2 appearance-none focus:outline-none focus:ring-0 border-[#007EFA] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="link"
                className="absolute text-sm text-[#007EFA] font-medium font-inter duration-300 transform -translate-y-5 scale-75 top-1 z-10 origin-[0] left-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-1">
                Link
              </label>
            </div>

            <div className="flex place-content-end space-x-3">
              <button
                onClick={() => setshowLink(false)}
                className="p-1 font-medium">
                Cancel
              </button>
              <button onClick={handleAddLink} className="font-medium p-1">
                Add Link
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default AssessmentMiniproject;
