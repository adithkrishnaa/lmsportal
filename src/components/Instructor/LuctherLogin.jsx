import google from "../../assets/Image/Goo_icon.webp";
import git from "../../assets/Image/git_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider, githubProvider } from "../../firebase";
import {
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { useEffect, useState } from "react";

const LuctherLogin = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/luctherdashboard");
      } else {
        navigate("/luctherhomelayout/luctherlogin");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleGoogleSignIn = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const uid = user.uid;
      await sendToBackend(uid, email, displayName, photoURL);
      navigate("/luctherdashboard");
    } catch (error) {
      console.error("Google sign-in error:", error);
      setErrorMessage("Google sign-in failed. Please try again.");
    }
  };

  const handleGitHubSignIn = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;

      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const uid = user.uid;
      await sendToBackend(uid, email, displayName, photoURL);
      navigate("/luctherdashboard");
    } catch (error) {
      console.error("GitHub sign-in error:", error);
      setErrorMessage("GitHub sign-in failed. Please try again.");
    }
  };

  const sendToBackend = async (
    uid,
    email = "",
    displayName = "",
    photoURL = ""
  ) => {
    try {
      const token = await auth.currentUser.getIdToken();
      console.log("Generated Firebase token:", token);

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
    } catch (e) {
      console.error("Error sending token to backend", e);
    }
  };

  return (
    <div className="max-w-md -mt-10 mx-auto container">
      <h2 className="text-5xl pb-1 font-bold font-inter text-center">
        Welcome Back!
      </h2>
      <h3 className="text-xl font-bold font-inter text-center">
        It’s Time to Elevate Your Students' Career!
      </h3>
      <div className="py-1">
        <p className="text-sm font-medium text-start font-inter">
          Log in to your account:
        </p>
        {errorMessage && (
          <div className="text-red-500 text-center mb-2">{errorMessage}</div>
        )}
        <div className="flex flex-col items-center space-y-2 mt-2">
          <button
            className="flex items-center justify-center text-lg rounded-full w-full font-inter bg-[#F1EFEC] p-2"
            onClick={handleGoogleSignIn}
          >
            <img className="w-10 mr-2" src={google} alt="Google Icon" />
            Sign up with Google
          </button>
          <button
            className="flex items-center justify-center text-lg rounded-full w-full font-inter bg-[#F1EFEC] p-2"
            onClick={handleGitHubSignIn}
          >
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
            className="text-lg rounded-full font-inter w-full p-3 bg-[#034118] text-white"
          >
            Create account
          </button>

          <p className="font-inter text-sm font-semibold">
            Need Help?{" "}
            <span className="text-black underline">
              support@coursecompass.com
            </span>
          </p>
        </div>

        <div className="mt-2 space-y-2 text-start">
          <h2 className="font-inter text-xl font-bold">
            Already have an account?
          </h2>
          <button
            onClick={() => navigate("/luctherhomelayout/lucthersignin")}
            className="font-inter text-xl font-semibold text-[#034118] rounded-full border-black border-[1px] w-full p-2 mt-2"
          >
            Sign in
          </button>
          <p className="font-inter text-secondary font-medium text-center">
            Student account?{" "}
            <span className="underline text-black font-inter font-medium">
              <Link to="/">Are you a Student?</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LuctherLogin;
