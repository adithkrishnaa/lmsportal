import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import google from "../assets/Image/Goo_icon.webp";
import git from "../assets/Image/git_icon.png";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { auth, googleProvider, githubProvider } from '../firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const navigate= useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInWithEmail = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const uid = user.uid;
      const displayName = user.displayName || email.split('@')[0];
      await sendToBackend(uid, email, displayName);
      console.log('User signed in with email');
    } catch (e) {
      console.error("Error with email sign-in", e);
    }
  };
  

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const uid = user.uid;
      await sendToBackend(uid, email, displayName, photoURL);
     
      console.log('User signed in with Google');
    } catch (e) {
      console.error("Error with Google sign-in", e);
    }
  };

  const handleSignInWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const uid = user.uid;
      await sendToBackend(uid, email, displayName, photoURL);
      console.log('User signed in with GitHub');
    } catch (e) {
      console.error("Error with GitHub sign-in", e);
    }
  };

  const sendToBackend = async (uid, email = "", displayName = "", photoURL = "") => {
    const token = await auth.currentUser.getIdToken();

    try {
      const response = await fetch('https://course-compass-backend-zh7c.onrender.com/api/student/save-user', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ uid, email, displayName, photoURL })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      navigate("/dashboard");
    } catch (e) {
      console.error("Error sending token to backend", e);
    }
  };

  return (
    <>
      <div className="-mt-24 absolute">
        <Link to={"/"}>
          <RxDoubleArrowLeft size={22} />
        </Link>
      </div>
      <div className="max-w-md -mt-10 mx-auto container">
        <h2 className="text-5xl pb-1 font-bold font-inter text-center">
          Sign in to Course Compass
        </h2>
        <div className="py-1">
          <div className="flex flex-col items-center space-y-2 mt-2">
            <button
              onClick={handleSignInWithGoogle}
              className="flex items-center justify-center text-lg rounded-full w-full font-inter bg-[#F1EFEC] p-2"
            >
              <img className="w-10 mr-2" src={google} alt="Google Icon" />
              Sign up with Google
            </button>
            <button
              onClick={handleSignInWithGithub}
              className="flex items-center justify-center text-lg rounded-full w-full font-inter bg-[#F1EFEC] p-2"
            >
              <img className="w-10 mr-2" src={git} alt="GitHub Icon" />
              Sign up with GitHub
            </button>
          </div>

          <div className="text-center mt-2">
            <p className="text-sm font-inter">or</p>
          </div>

          <div className="relative mt-1">
            <input
              type="text"
              id="username"
              className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-transparent border border-black rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-[#034118] peer"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="username"
              className="absolute text-sm text-black font-medium font-inter duration-300 my-auto transform -translate-y-5 scale-75 top-1 z-10 origin-[0] left-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-1"
            >
              Phone, email, or username
            </label>
          </div>

          <div className="relative mt-1">
            <input
              type="password"
              id="password"
              className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-transparent border border-black rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-[#034118] peer"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-black font-medium font-inter duration-300 my-auto transform -translate-y-5 scale-75 top-1 z-10 origin-[0] left-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-1"
            >
              Password
            </label>
          </div>

          <div className="flex flex-col items-center mt-2 space-y-2">
            <button
              onClick={handleSignInWithEmail}
              className="text-lg rounded-full font-inter w-full p-3 bg-[#034118] text-white"
            >
              Sign in with Email
            </button>

            <button className="font-inter text-xl font-semibold text-[#034118] rounded-full border-black border-2 w-full p-2 mt-2">
              <Link to={'/forgotpassword'}> Forgot password? </Link>
            </button>

            <p className="font-inter text-sm font-semibold">
              Don’t have an account?
              <span className="text-black underline">Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
