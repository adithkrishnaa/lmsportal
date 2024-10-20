import pic from "../../assets/Image/per.png";
import git from "../../assets/Image/git_icon.png";
import LinkedIn from "../../assets/Image/LinkedIn.png";
import { useState, useEffect} from "react";
import {auth} from "../../firebase";

const Profile = () => {

  const [picture, setPicture] = useState( pic)
  
  useEffect(()=>{
    const fetchProfile = async () => {
      try {
        const token = await auth.currentUser.getIdToken();
        const response = await fetch("https://course-compass-backend-zh7c.onrender.com/api/student/profile/picture", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (response.ok) {
          setPicture(data.profilePicture); // Assuming the response has courses in data.courses
        } else {
          console.error("Failed to fetch purchases:", data.message);
        }
      } catch (error) {
        console.error("Failed to fetch purchases:", error);
      }
    };
    fetchProfile();
  },[])

  return (
    <>
      <div className="px-4 py-4">
        {/* Account Section */}
        <h3 className="font-inter text-lg">Profile</h3>
        <p className="font-inter text-sm text-secondary">
          View and edit personal info below.
        </p>

        {/* Profile Picture Section */}
        <div className="flex py-10 justify-between items-center">
          <div className="flex items-center">
            <img
              className="rounded-full size-14 bg-secondary"
              src={picture}
              alt="User"
            />
            <div className="block">
              <h3 className="ml-4 font-inter text-sm my-auto">
                Profile Picture
              </h3>
              <p className="ml-4 font-inter text-secondary text-sm my-auto">
                Joined on 13 October, 2018.
              </p>
            </div>
          </div>

          <div className="flex space-x-5">
            <button className="px-4 py-1 rounded-lg bg-black font-inter text-white">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Display Info Section */}
        <div>
          <h3 className="font-inter text-base">About</h3>
          <textarea
            className="p-3 pl-5 focus:outline-none relative mt-2 bg-four rounded-lg w-full h-32 resize-none"
            placeholder="Write something about yourself..."
          />
          <div>
            <h2>Connect with me on:</h2>
            <div className=" list-none py-5 flex space-x-3">
              <li>
                <img className=" size-7" src={git} alt="" />
              </li>
              <li>
                <img className=" size-7" src={LinkedIn} alt="" />
              </li>
            </div>
          </div>

          {/* You can add form fields here for displaying and editing the user's personal information */}
        </div>
      </div>
    </>
  );
};

export default Profile;
