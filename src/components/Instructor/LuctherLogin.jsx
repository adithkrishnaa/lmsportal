import google from "../../assets/Image/Goo_icon.webp";
import git from "../../assets/Image/git_icon.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LuctherLogin = () => {
const navigate = useNavigate();

  return (
    <>
      <div className="max-w-md -mt-10  mx-auto container">
        <h2 className="text-5xl pb-1 font-bold font-inter text-center">
          Welcome Back!
        </h2>
        <h3 className="text-xl font-bold font-inter text-center">
          It`s Time To Elevate Your Students Career!
        </h3>
        <div className="py-1">
          <p className="text-sm font-medium text-start font-inter ">
            Log in to your account:
          </p>
          <div className="flex flex-col items-center space-y-2 mt-2">
            <button className="flex items-center justify-center text-lg rounded-full w-full font-inter bg-[#F1EFEC] p-2">
              <img className="w-10 mr-2" src={google} alt="Google Icon" />
              Sign up with Google
            </button>
            <button className="flex items-center justify-center text-lg rounded-full w-full font-inter bg-[#F1EFEC] p-2">
              <img className="w-10 mr-2" src={git} alt="GitHub Icon" />
              Sign up with GitHub
            </button>
          </div>

          <div className="text-center mt-2">
            <p className="text-sm font-inter">or</p>
          </div>

          <div className="flex flex-col items-center mt-2 space-y-2">
            <button
              onClick={() => navigate("/luctherhomelayout/luctherregister")}
              className="text-lg rounded-full font-inter w-full p-3 bg-[#034118] text-white">
              Create account
            </button>

            <p className="font-inter text-sm font-semibold">
              Need Help?
              <span className="text-black  underline">
                support@coursecompass.com
              </span>
            </p>
          </div>

          <div className="mt-2 space-y-2 text-start">
            {/* Sign In Section */}
            <h2 className="font-inter text-xl font-bold">
              Already have an account?
            </h2>
            <button
              onClick={() => navigate("/luctherhomelayout/lucthersignin")}
              className="font-inter text-xl font-semibold text-[#034118] rounded-full border-black border-[1px] w-full p-2 mt-2">
              Sign in
            </button>
            <p className=" font-inter text-secondary font-medium text-center">
              Student account?{" "}
              <span className=" underline text-black font-inter  font-medium">
                {" "}
                <Link to={"/"}>Are you a Student</Link>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuctherLogin;
