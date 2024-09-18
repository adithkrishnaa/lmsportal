import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; 

import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate=useNavigate();

   const [passwordVisible, setPasswordVisible] = useState(false); // State to track visibility
   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State for confirm password

   // Function to toggle password visibility
   const togglePasswordVisibility = () => {
     setPasswordVisible(!passwordVisible);
   };

   // Function to toggle confirm password visibility
   const toggleConfirmPasswordVisibility = () => {
     setConfirmPasswordVisible(!confirmPasswordVisible);
   };

  return (
    <>
      <div className="-mt-20   absolute">
        <Link to={"/"}>
          <RxDoubleArrowLeft size={22} />
        </Link>
      </div>
      <div className="max-w-md -mt-11 mx-auto container">
        <h2 className="text-4xl pb-1 font-bold font-inter text-center">
          Register with us now!
        </h2>
        <p className="text-sm font-medium text-center font-inter ">
          Welcome to LMS. Please enter details to register.
        </p>
        <form className="py-2">
          <div className="relative w-full">
            <label className="font-inter">
              Name
              <div className="relative mt-1">
                <IoPersonOutline
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
                  size={25}
                />
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 pl-10 border-2 border-black rounded-lg"
                />
              </div>
            </label>
          </div>

          <label className="font-inter">
            Email
            <div className="relative mt-1">
              <MdOutlineEmail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
                size={25}
              />
              <input
                type="email"
                name="email"
                className="w-full p-2 pl-10 border-2 border-black rounded-lg"
                placeholder="Enter your email"
              />
            </div>
          </label>

          <label className="font-inter mt-2 block">
            Enter Password
            <div className="relative mt-1">
              <MdLockOutline
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
                size={25}
              />

              {passwordVisible ? (
                <AiOutlineEye
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                  size={20}
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                  size={20}
                />
              )}
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                className="w-full p-2 pl-10 border-2 border-black rounded-lg"
                placeholder="Enter your password"
              />
            </div>
          </label>

          <label className="font-inter mt-2 block">
            Confirm Password
            <div className="relative mt-1">
              <MdLockOutline
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
                size={25}
              />

              {confirmPasswordVisible ? (
                <AiOutlineEye
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                  size={20}
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                  size={20}
                />
              )}
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="Confirmpassword"
                id="confirmpassword"
                className="w-full p-2 pl-10 border-2 border-black rounded-lg"
                placeholder="Confirm your password"
              />
            </div>
          </label>
        </form>
        <div className="py-1">
          <button className="text-lg rounded-full font-inter w-full p-3 bg-[#034118] text-white">
            <Link to={'/dashboard'}> Sign In</Link>
          </button>

          <p className="font-inter text-sm text-center font-semibold">
            Already have an account?
            <button onClick={()=>navigate("/signin")} className="text-black underline"> Login Here</button>
          </p>

          <p className="font-inter text-center text-sm font-semibold">
            Need Help?
            <span className="text-black underline">
              support@coursecompass.com
            </span>
          </p>
        </div>
      </div>
    </>
  );
};


export default Register;
