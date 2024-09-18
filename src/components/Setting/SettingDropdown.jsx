import { useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import pic from "../../assets/Image/per.png"; // Ensure the correct path to your image
import Help from "./Help"; // Import the Help component
import { RxCross2 } from "react-icons/rx";

const SettingsDropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Dropdown visibility
  const [showHelp, setShowHelp] = useState(false); // Help modal visibility

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Open Help modal
  const handleHelpClick = () => {
    setShowHelp(true);
    setIsDropdownVisible(false); // Close the dropdown when opening the help modal
  };

  // Close Help modal
  const handleCloseHelp = () => {
    setShowHelp(false);
  };

  return (
    <>
      <div className="relative">
        {/* Settings Icon */}
        <button onClick={toggleDropdown} className="focus:outline-none">
          <IoSettingsOutline size={23} />
        </button>

        {/* Dropdown Menu */}
        {isDropdownVisible && (
          <ul className="absolute top-7 py-1 right-0 drop-shadow-2xl my-3 font-inter text-sm leading-8 bg-white rounded-3xl w-52 z-50">
            {/* User Info */}
            <div className="flex justify-center items-center w-full p-4 border-b-[1px] border-secondary">
              <img
                className="rounded-full size-10 bg-secondary"
                src={pic}
                alt="User"
              />
              <div className="ml-2">
                <h2 className="text-sm">Name</h2>
                <p className="text-xs text-secondary">email@gmail.com</p>
              </div>
            </div>

            {/* Menu Items */}
            <div className="px-3">
              <Link to="/setting/account">
                <li className="py-2">Account settings</li>
              </Link>
              <Link to="/setting/payment">
                <li className="py-2">Payment methods</li>
              </Link>
              <Link to="/setting/purchase">
                <li className="py-2">Purchase history</li>
              </Link>
            </div>

            <div className="flex  justify-evenly border-y-[1px] border-secondary py-2">
              <li>Language</li>
              <p className="text-secondary ml-2">English</p>
              <AiOutlineGlobal className="mt-1 ml-2 text-secondary" size={17} />
            </div>

            <div className="px-3">
              <button onClick={handleHelpClick} className="text-left w-full">
                <li className="py-2">Help and Support</li>
              </button>
              <Link to="/logout">
                <li className="py-2">Log out</li>
              </Link>
            </div>
          </ul>
        )}
      </div>

      {/* Help Modal */}
      {showHelp && (
        <div className=" absolute w-full min-h-screen bg-black bg-opacity-60  flex justify-center items-center">
          <div className="w-1/2  rounded-3xl shadow-lg relative ">
            {/* Close button */}
            <button
              className="absolute top-5 right-5 text-white"
              onClick={handleCloseHelp}>
              <RxCross2 size={30} />
            </button>

            {/* Help content */}
            <Help />
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsDropdown;
