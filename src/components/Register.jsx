import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Import your firebase configuration
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  // Email-Password Register
  const registerWithEmail = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredential.user.uid;
      const emailDisplayName = email.split("@")[0];
      await sendToBackend(uid, email, emailDisplayName);
      navigate("/dashboard");
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert(
          "This email is already in use. Please use a different email address."
        );
      } else {
        console.error("Error registering", e);
      }
    }
  };

  const sendToBackend = async (
    uid,
    email = "",
    displayName = "",
    photoURL = ""
  ) => {
    const token = await auth.currentUser.getIdToken(); // Get Firebase auth token

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
      console.log(result);
    } catch (e) {
      console.error("Error sending token to backend", e);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    await registerWithEmail(); // Call the registration function
  };

  return (
    <>
      <div className="-mt-24 absolute">
        <Link to={"/"}>
          <RxDoubleArrowLeft size={22} />
        </Link>
      </div>
      <div className="max-w-md px-4 -mt-14 mx-auto container">
        <h2 className="text-4xl xl:text-5xl pb-1 font-bold font-inter text-center">
          Register with us now!
        </h2>
        <p className="text-xs text-secondary xl:text-sm font-medium text-center font-inter ">
          Welcome to LMS. Please enter details to register.
        </p>
        <form className="py-2" onSubmit={handleRegister}>
          <div className="relative w-full">
            <label className="font-inter text-secondary">
              Name
              <div className="relative mt-1">
                <IoPersonOutline
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
                  size={25}
                />
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 pl-10 border-[1px] border-black rounded-lg"
                  required
                />
              </div>
            </label>
          </div>

          <label className="font-inter text-secondary">
            Email
            <div className="relative mt-1">
              <MdOutlineEmail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
                size={25}
              />
              <input
                type="email"
                name="email"
                className="w-full p-2 pl-10 border-[1px] border-black rounded-lg"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </label>

          <label className="font-inter text-secondary mt-2 block">
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
                className="w-full p-2 pl-10 border-[1px] border-black rounded-lg"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </label>

          <label className="font-inter text-secondary mt-2 block">
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
                className="w-full p-2 pl-10 border-[1px] border-black rounded-lg"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </label>

          <div className="mt-4 space-y-2">
            <button
              type="submit"
              className="text-base xl:text-lg rounded-full font-inter w-full p-2 xl:p-3 bg-[#034118] text-white"
              onClick={handleRegister}
            >
              Register
            </button>

            <p className="font-inter text-sm text-center font-semibold">
              Already have an account?
              <button
                onClick={() => navigate("/signin")}
                className="text-black underline"
              >
                {" "}
                Login Here
              </button>
            </p>

            <p className="font-inter text-center text-sm font-semibold">
              Need Help?
              <span className="text-black underline">
                {" "}
                support@coursecompass.com
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
