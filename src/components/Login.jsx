import google from "../assets/Image/Goo_icon.webp";
import git from "../assets/Image/git_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider, githubProvider } from "../firebase"; // Import Firebase setup
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  // Function to handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const uid = user.uid;
      await sendToBackend(uid, email, displayName, photoURL);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  // Function to handle GitHub sign-in
  const handleGitHubSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;

      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const uid = user.uid;
      await sendToBackend(uid, email, displayName, photoURL);
      navigate("/dahsboard");
    } catch (e) {
      console.error("Error with Github sign-in", e);
    }
  };

  const sendToBackend = async (
    uid,
    email = "",
    displayName = "",
    photoURL = ""
  ) => {
    const token = await auth.currentUser.getIdToken(); 

    try {
      const response = await fetch(
        "https://course-compass-backend-zh7c.onrender.com/api/instructor/save-user",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ uid, email, displayName, photoURL }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.message}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (e) {
      console.error("Error sending token to backend", e);
    }
  };

  return (
    <>
      <div className="max-w-md -mt-14 mx-auto container">
        <h2 className=" lg:text-4xl xl:text-5xl pb-1 font-bold font-inter text-center">
          Welcome Back!
        </h2>
        <h3 className=" text-xl xl:text-2xl font-bold font-inter text-center">
          It`s Time To Elevate Your Career!
        </h3>
        <div className="py-1 lg:px-8 xl:px-2">
          <p className="text-sm font-medium pb-1 text-start font-inter ">
            Log in to your account:
          </p>
          <div className="flex flex-col items-center space-y-3 mt-2">
            <button
              className="flex items-center justify-center text-base xl:text-lg rounded-full w-full font-inter bg-[#F1EFEC] p-2"
              onClick={handleGoogleSignIn}
            >
              <img
                className=" w-8 xl:w-10 mr-2"
                src={google}
                alt="Google Icon"
              />
              Sign up with Google
            </button>
            <button
              className="flex items-center justify-center text-base xl:text-lg rounded-full w-full font-inter bg-[#F1EFEC] p-2"
              onClick={handleGitHubSignIn}
            >
              <img className="w-8 xl:w-10  mr-2" src={git} alt="GitHub Icon" />
              Sign up with GitHub
            </button>
          </div>

          <div className="text-center mt-2">
            <p className="text-sm font-inter">or</p>
          </div>

          <div className="flex flex-col items-center mt-2 space-y-5">
            <button className="text-base xl:text-lg rounded-full font-inter w-full p-2 xl:p-3 bg-[#034118] text-white">
              <Link to={"/register"}>Create account</Link>
            </button>

            <p className="font-inter text-sm font-semibold">
              Need Help?
              <span className="text-black underline">
                support@coursecompass.com
              </span>
            </p>
          </div>

          <div className="mt-7 space-y-3 text-start">
            {/* Sign In Section */}
            <h2 className="font-inter text-xl font-bold">
              Already have an account?
            </h2>
            <button className="font-inter text-base xl:text-lg font-semibold text-[#034118] rounded-full border-black border-[1px] w-full p-2 mt-2">
              <Link to={"/signin"}>Sign in</Link>
            </button>
            <p className=" font-inter py-1 text-secondary font-medium text-center">
              Host account?{" "}
              <span className=" underline text-sm  text-black font-inter  font-medium">
                {" "}
                <Link to={"/luctherhomelayout"}>
                  Are you a instructor at Course Compass
                </Link>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
