import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LuctherSigninPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="-mt-24   absolute">
        <Link to={"/luctherhomelayout/lucthersignin"}>
          <RxDoubleArrowLeft size={22} />
        </Link>
      </div>
      <div className="max-w-md -mt-1 mx-auto container">
        <h2 className="text-4xl pb-1 leading-relaxed font-extrabold font-inter text-center">
          Enter your password
        </h2>

        <div className="py-1">
          <div className="relative mt-8">
            <input
              type="text"
              id="username"
              className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-transparent border border-black rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-[#034118] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="username"
              className="absolute text-sm text-black font-medium font-inter duration-300 my-auto transform -translate-y-1 scale-75 top-1  z-10 origin-[0] left-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-1">
              Phone,email,or username
            </label>
          </div>

          <div className="relative mt-5">
            {passwordVisible ? (
              <AiOutlineEye
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-7 transform -translate-y-1/2 text-black cursor-pointer"
                size={23}
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-7 transform -translate-y-1/2 text-black cursor-pointer"
                size={23}
              />
            )}
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              id="password"
              className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-transparent border border-black rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-[#034118] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="username"
              className="absolute text-sm text-black font-medium font-inter duration-300 my-auto transform -translate-y-1 scale-75 top-1  z-10 origin-[0] left-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-1">
              Password
            </label>
            <p className="font-inter text-black font-medium text-sm ml-4">
              <Link to={"/luctherhomelayout/luctherforgotpassword"}>
                Forgot password?
              </Link>{" "}
            </p>
          </div>

          <div className="flex mt-10 flex-col items-center  space-y-2">
            <button
              onClick={() => navigate("/luctherdashboard")}
              className="text-lg rounded-full font-inter w-full p-3 bg-[#034118] text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuctherSigninPassword;
