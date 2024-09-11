import logo from '../assets/Image/logo1.png';
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

 
const Navbar = () => {
  return (
    <>
      <div className=" mt-4 px-10">
        <nav className="  flex  justify-between items-center ">
          <div className=" justify-start ">
            <img className="w-44" src={logo} alt="logo" />
          </div>
          <div className="flex justify-around text-lg font-inter font-bold space-x-5">
            <Link>
              <li className=" list-none">Dashboard</li>
            </Link>
            <Link>
              <li className=" list-none">MY Courses</li>
            </Link>
            <Link>
              <li className=" list-none">My Certificates</li>
            </Link>
            <Link>
              <li className=" list-none">Assessments</li>
            </Link>
          </div>

          <div className=" justify-end space-x-8 flex">
            <Link to="/cart">
              <BsCart3 size={20} />
            </Link>
            <Link>
              <IoIosNotificationsOutline size={23} />
            </Link>
            <Link>
              <IoSettingsOutline size={20} />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar