import logo from "../../assets/Image/logo1.png";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import SettingsDropdown from "../../components/Instructor/Setting/SettingDropdown"; // Import the new SettingsDropdown

const LuctherNavbar = () => {
  return (
    <>
      <div className="relative mt-4 px-4 sm:px-6  z-10  drop-shadow-sm shadow-sm   md:px-10 lg:px-16 xl:px-20">
        <nav className="flex flex-col  md:flex-row  justify-between items-center">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <img className="w-32 md:w-44" src={logo} alt="logo" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col  md:flex-row justify-around text-base lg:text-lg font-inter md:font-medium lg:font-bold space-y-2 md:space-y-0 md:space-x-5">
            <Link to="/luctherdashboard">
              <li className="list-none">Dashboard</li>
            </Link>
            <Link to="">
              <li className="list-none">Host Live</li>
            </Link>
            <Link to="">
              <li className="list-none">My Calendar</li>
            </Link>
          </div>

          {/* Icon Links */}
          <div className="flex justify-end space-x-10 mt-4 md:mt-0">
           
            <Link className=" relative " to=" ">
              <IoIosNotificationsOutline size={25} />
              
            </Link>

            {/* Use SettingsDropdown */}
            <SettingsDropdown />
          </div>
        </nav>
      </div>
    </>
  );
};

export default LuctherNavbar;
