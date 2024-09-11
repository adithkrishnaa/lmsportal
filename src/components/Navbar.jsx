import logo from "../assets/Image/logo1.png";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import pic from "../assets/Image/per.png";
import { useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";

const Navbar = () => {

  
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State for toggling the dropdown

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  }
  return (
    <>
      <div className="mt-4 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <nav className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <img className="w-32 md:w-44" src={logo} alt="logo" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row justify-around text-base lg:text-lg font-inter md:font-medium lg:font-bold space-y-2 md:space-y-0 md:space-x-5">
            <Link to="/dashboard">
              <li className="list-none">Dashboard</li>
            </Link>
            <Link to="/my-courses">
              <li className="list-none">My Courses</li>
            </Link>
            <Link to="/my-certificates">
              <li className="list-none">My Certificates</li>
            </Link>
            <Link to="/assessments">
              <li className="list-none">Assessments</li>
            </Link>
          </div>

          {/* Icon Links */}
          <div className="flex justify-end space-x-5 mt-4 md:mt-0">
            <Link to="/cart">
              <BsCart3 size={20} />
            </Link>
            <Link to="/notifications">
              <IoIosNotificationsOutline size={23} />
            </Link>
            <div className="relative w-full group">
              {/* Settings Icon */}
              <button onClick={toggleDropdown} className="focus:outline-none">
                <IoSettingsOutline size={20} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownVisible && (
                <ul className="absolute z-20 top-5 py-2 mx-auto drop-shadow-2xl my-3 font-inter text-sm leading-9 bg-white rounded-3xl -right-1 w-48">
                  {/* User Info */}
                  <div className="flex mr-10 my-auto justify-center items-center w-full p-4 border-b-2 border-secondary">
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
                    <li>Account setting</li>
                    <Link>
                      <li>Payment methods</li>
                    </Link>
                    <Link>
                      <li>Purchase history</li>
                    </Link>
                  </div>

                  <div className=" flex justify-items-center justify-evenly border-t-2 border-b-2 border-secondary">
                    <li>Language</li>
                    <p className="text-secondary">English</p>
                    <AiOutlineGlobal className="mt-2 text-secondary" size={17} />
                  </div>

                  <div className="px-3">
                    <Link>
                      <li>Help and Support</li>
                    </Link>
                    <Link>
                      <li>Log out</li>
                    </Link>
                  </div>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};


export default Navbar;
