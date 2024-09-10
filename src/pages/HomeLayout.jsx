import { Outlet } from "react-router-dom";
import login from "../../src/assets/Image/login.png";
import logo from "../../src/assets/Image/logo1.png";

const HomeLayout = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side with image */}
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <img
          className="max-h-screen w-full pl-6 pt-5 pb-4"
          src={login}
          alt="Login Illustration"
        />
      </div>
      {/* Right side with form and footer */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center relative">
        {/* Logo */}
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2">
          <img className="w-56" src={logo} alt="CourseCompass Logo" />
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
