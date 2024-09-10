import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link } from "react-router-dom";

const ChangePassword = () => {
    return (
      <>
        <div className="-mt-24   absolute">
          <Link to={"/passwordcode"}>
            <RxDoubleArrowLeft size={22} />
          </Link>
        </div>
        <div className="max-w-md -mt-1 mx-auto container">
          <h2 className="text-4xl pb-1 leading-relaxed font-extrabold font-inter text-center">
            Choose a new password
          </h2>
          <p className="text-sm font-medium text-center font-inter ">
            Make sure your new password is 8 characters or more. Try including a
            numbers, letters, and a punctuation mark for a strong password.
          </p>

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
                className="absolute text-sm text-black font-medium font-inter duration-300 my-auto transform -translate-y-5 scale-75 top-1  z-10 origin-[0] left-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-1">
                Enter a new password
              </label>
            </div>
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
                className="absolute text-sm text-black font-medium font-inter duration-300 my-auto transform -translate-y-5 scale-75 top-1  z-10 origin-[0] left-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-1">
                Confirm your password
              </label>
            </div>

            <div className="flex mt-10 flex-col items-center  space-y-2">
              <button className="text-lg rounded-full font-inter w-full p-3 bg-[#034118] text-white">
                <Link to={"/signin"}> Change password</Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default ChangePassword;
