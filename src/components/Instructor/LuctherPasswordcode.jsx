import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LuctherPasswordcode = () => {
const navigate = useNavigate();


  return (
    <>
      <div className="-mt-24   absolute">
        <Link to={"/luctherhomelayout/luctherforgotpassword"}>
          <RxDoubleArrowLeft size={22} />
        </Link>
      </div>
      <div className="max-w-md -mt-1 mx-auto container">
        <h2 className="text-4xl pb-1 leading-relaxed font-extrabold font-inter text-center">
          We sent you a code
        </h2>
        <p className="text-sm font-medium text-center font-inter ">
          Check your email to get your confirmation code. Enter the code in the
          below box.
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
              Enter your code
            </label>
          </div>

          <div className="flex mt-10 flex-col items-center  space-y-2">
            <button
              onClick={() =>
                navigate("/luctherhomelayout/luctherchangepassword")
              }
              className="text-lg rounded-full font-inter w-full p-3 bg-[#034118] text-white">
               Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuctherPasswordcode;
