import { Outlet } from "react-router-dom";
import login from "../../src/assets/Image/login.png";
import logo from "../../src/assets/Image/logo1.png";

const HomeLayout = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen ">
      {/* Left side with image */}
      <div className="md:w-1/2 w-full flex relative">
        <img
          className="max-h-screen w-full ml-7 mt-6  bg-cover  rounded-2xl   mb-5"
          src={login}
          alt="Login Illustration"
        />
        <h2 className=" absolute font-extrabold bottom-14   right-0 translate-x-14 px-24 text-right text-5xl text-white font-inter">
          ``The beautiful thing about learning is that no one can take it away
          from you.``
        </h2>
      </div>
      {/* Right side with form and footer */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center relative">
        {/* Logo */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <img className="w-48 xl:w-56" src={logo} alt="CourseCompass Logo" />
        </div>

        {/* Outlet for dynamic form content */}
        <div className="mt-40 w-full px-8 md:px-6 flex-grow">
          <Outlet />
        </div>

        {/* Footer */}
        <div className="mt-auto pb-4 w-full text-center">
          <p className="font-inter text-center">
            Copyright @CourseCompass 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
