import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { auth } from "../../firebase"; // Adjust this import as per your firebase config file
import { signInWithEmailAndPassword } from "firebase/auth";

const LuctherSigninPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const loginWithEmail = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredential.user.uid;
      await sendToBackend(uid);
      navigate("/luctherdashboard"); // Redirect to instructor dashboard
    } catch (e) {
      console.error("Error with instructor sign-in", e);
      setErrorMessage("Invalid email or password."); // Show error message
    }
  };

  const sendToBackend = async (uid) => {
    const token = await auth.currentUser.getIdToken(); // Fetch auth token

    try {
      const response = await fetch(
        "https://course-compass-backend-zh7c.onrender.com/api/instructor/save-user",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ uid, email }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result); // Log backend response
    } catch (e) {
      console.error("Error sending token to backend", e);
      setErrorMessage("Failed to send user data to the server.");
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message
    if (!email || !password) {
      setErrorMessage("Please fill in both fields.");
      return;
    }
    loginWithEmail(); // Call login function
  };

  return (
    <>
      <div className="-mt-24 absolute">
        <Link to={"/luctherhomelayout/lucthersignin"}>
          <RxDoubleArrowLeft size={22} />
        </Link>
      </div>
      <div className="max-w-md -mt-1 mx-auto container">
        <h2 className="text-4xl pb-1 leading-relaxed font-extrabold font-inter text-center">
          Enter your password
        </h2>

        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}

        <form onSubmit={handleSignIn}>
          <div className="relative mt-8">
            <input
              type="email"
              id="username"
              className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-transparent border border-black rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-[#034118] peer"
              placeholder=" "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="username"
              className="absolute text-sm text-black font-medium font-inter duration-300 transform -translate-y-1 scale-75 top-1 z-10 left-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-1"
            >
              Phone, email, or username
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
              id="password"
              className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-transparent border border-black rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-[#034118] peer"
              placeholder=" "
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-black font-medium font-inter duration-300 transform -translate-y-1 scale-75 top-1 z-10 left-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-1"
            >
              Password
            </label>
            <p className="font-inter text-black font-medium text-sm ml-4">
              <Link to={"/luctherhomelayout/luctherforgotpassword"}>
                Forgot password?
              </Link>
            </p>
          </div>

          <div className="flex mt-10 flex-col items-center space-y-2">
            <button
              type="submit"
              className="text-lg rounded-full font-inter w-full p-3 bg-[#034118] text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LuctherSigninPassword;