
import Footer from "../../components/Footer";
import Aitutore from "../../components/Instructor/Aitutore";
import LuctherNavbar from "../../components/Instructor/LuctherNavbar";
import Lucthersearchbar from "../../Searchbar/Lucthersearchbar"
import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";


const LuctherSetting = () => {
  return (
    <>
      <LuctherNavbar />
      <Lucthersearchbar />
      <Aitutore />
      <div className="flex ">
        <div className=" w-2/6 flex mx-auto mt-24 relative">
          <div className="left-20 flex  absolute ">
            <Link to={"/luctherdashboard"}>
              <RxDoubleArrowLeft size={25} />
            </Link>
            <h2 className="text-xl ml-5 container font-inter font-semibold">
              Settings
            </h2>
          </div>

          <ul className=" leading-loose mt-20 ml-40">
            <Link to={"profile"}>
              <li className="py-6 font-inter">Profile</li>
            </Link>
            <Link to={"account"}>
              <li className="py-6 font-inter">Account settings</li>
            </Link>
          </ul>
        </div>
        <div className="w-3/6  ">
          <div className=" -ml-36 w-11/12 mt-20 overflow-y-scroll max-h-screen ">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LuctherSetting;