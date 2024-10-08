import logo from "../assets/Image/logo1.png";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import SettingsDropdown from "../components/Setting/SettingDropdown"; // Import the new SettingsDropdown

const Navbar = () => {
  return (
    <>
      <div className="relative mt-4 px-4 sm:px-6  z-10  drop-shadow-md shadow-xl   md:px-10 lg:px-16 xl:px-20">
        <nav className="flex flex-col sticky top-0  md:flex-row  justify-between items-center pb-4">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <img className="w-32 md:w-44" src={logo} alt="logo" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col  md:flex-row justify-around text-base lg:text-lg font-inter md:font-medium lg:font-bold space-y-2 md:space-y-0 md:space-x-5">
            <Link to="/dashboard">
              <li className="list-none">Dashboard</li>
            </Link>
            <Link to="/module">
              <li className="list-none">My Courses</li>
            </Link>
            <Link to="/mycertificates">
              <li className="list-none">My Certificates</li>
            </Link>
            <Link to="/assessments">
              <li className="list-none">Assessments</li>
            </Link>
          </div>

          {/* Icon Links */}
          <div className="flex justify-end space-x-10 mt-4 md:mt-0">
            <Link to="/cart">
              <BsCart3 size={20} />
            </Link>
            <Link className=" relative " to="/notification ">
              <IoIosNotificationsOutline size={25} />
              <div className=" absolute -top-2 border-2  w-5 p-1 h-5 rounded-full bg-red-600 -right-1">
                <p className="-mt-1 ml-[2px] text-white font-inter text-[10px]">
                  1
                </p>
              </div>
            </Link>

            {/* Use SettingsDropdown */}
            <SettingsDropdown />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
