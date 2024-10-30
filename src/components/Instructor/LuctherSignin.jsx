import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/Image/Goo_icon.webp";
import git from "../../assets/Image/git_icon.png";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { getAuth, signInWithPopup } from "firebase/auth";
import { googleProvider, githubProvider } from "../../firebase"; // import your providers

const InstructorSignin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  // Google login
  const signInWithGoogle = async () => {
    try {
      const auth = getAuth();
      const result = await signInWithPopup(auth, googleProvider);
      const { uid, email, displayName, photoURL } = result.user;

      await sendToBackend(uid, email, displayName, photoURL); // Send user data to backend
      console.log("Google sign-in successful:", result.user);
      navigate("/luctherdashboard"); // Navigate to instructor dashboard
    } catch (e) {
      console.error("Error with Google sign-in", e);
    }
  };

  // GitHub login
  const signInWithGithub = async () => {
    try {
      const auth = getAuth();
      const result = await signInWithPopup(auth, githubProvider);
      const { uid, email, displayName, photoURL } = result.user;

      await sendToBackend(uid, email, displayName, photoURL); // Send user data to backend
      console.log("GitHub sign-in successful:", result.user);
      navigate("/luctherdashboard"); // Navigate to instructor dashboard
    } catch (e) {
      console.error("Error with GitHub sign-in", e);
    }
  };

  // Backend call to save instructor data
  const sendToBackend = async (uid, email, displayName, photoURL) => {
    const auth = getAuth();
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
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Instructor data saved:", result);
    } catch (e) {
      console.error("Error sending token to backend", e);
    }
  };

  return (
    <>
      <div className="-mt-24 absolute">
        <Link to="/">
          <RxDoubleArrowLeft size={24} />
        </Link>
      </div>
      <div className="max-w-md -mt-10 mx-auto container">
        <h2 className="text-4xl xl:text-5xl pb-1 font-bold font-inter text-center">
          Sign in to <br /> Course Compass (Instructor)
        </h2>
        <div className="py-1">
          <div className="flex flex-col items-center space-y-3 mt-2">
            <button
              className="flex items-center justify-center text-base xl:text-lg rounded-full w-full font-inter bg-[#F1EFEC] p-2"
              onClick={signInWithGoogle}
            >
              <img
                className="w-8 xl:w-10 mr-2"
                src={google}
                alt="Google Icon"
              />
              Sign in with Google
            </button>
            <button
              className="flex items-center justify-center text-base xl:text-lg rounded-full w-full font-inter bg-[#F1EFEC] p-2"
              onClick={signInWithGithub}
            >
              <img className="w-8 xl:w-10 mr-2" src={git} alt="GitHub Icon" />
              Sign in with GitHub
            </button>
          </div>

          <div className="text-center mt-2">
            <p className="text-sm font-inter">or</p>
          </div>

          <div className="relative mt-1">
            <input
              type="text"
              id="email"
              className="block px-2.5 pb-2 pt-5 w-full text-sm text-black bg-transparent border border-black rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-[#034118] peer"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-black font-medium font-inter duration-300 my-auto transform -translate-y-5 scale-75 top-1 z-10 origin-[0] left-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-1"
            >
              Phone, email, or username
            </label>
          </div>

          <div className="flex flex-col items-center mt-2 py-3 space-y-5">
            <button
              onClick={() =>
                navigate("/luctherhomelayout/lucthersiginpassword")
              }
              className="text-lg rounded-full font-inter w-full p-2 xl:p-3 bg-[#034118] text-white"
            >
              Next
            </button>

            <button className="font-inter text-xl font-semibold text-[#034118] rounded-full border-black border-2 w-full p-2 mt-2">
              <Link to="/forgotpassword"> Forgot password? </Link>
            </button>

            <p className="font-inter text-sm font-semibold">
              Don’t have an account?{" "}
              <button
                onClick={() => navigate("/luctherhomelayout/luctherregister")}
                className="text-black underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};


export default InstructorSignin;

