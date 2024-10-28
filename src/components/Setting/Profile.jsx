import git from "../../assets/Image/git_icon.png";
import LinkedIn from "../../assets/Image/LinkedIn.png";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";

const Profile = () => {
  const [picture, setPicture] = useState("../../assets/Image/per.png");
  const [about, setAbout] = useState("Write something about yourself...");

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const token = await auth.currentUser.getIdToken();
        const response = await fetch(
          "https://course-compass-backend-zh7c.onrender.com/api/student/profile/picture",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setPicture(data.profilePicture); // Assuming the response has courses in data.courses
        } else {
          console.error("Failed to fetch pfp:", data.message);
        }
      } catch (error) {
        console.error("Failed to fetch pfp:", error);
      }
    };

    const fetchAbout= async () => {
      try {
        const token = await auth.currentUser.getIdToken();
        const response = await fetch(
          "https://course-compass-backend-zh7c.onrender.com/api/student/about",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        console.log(data)

        if (response.ok) {
          setAbout(data.about); // Assuming the response has courses in data.courses
        } else {
          console.error("Failed to fetch about:", data.message);
        }
      } catch (error) {
        console.error("Failed to fetch about:", error);
      }
    };

    fetchProfilePicture();
    fetchAbout();
  }, []);
  const handleAbout = (e) => {
    setAbout(e.target.value);
  }
  const updateAbout = async () => {
    try {
      const token = await auth.currentUser.getIdToken();
      const response = await fetch("https://course-compass-backend-zh7c.onrender.com/api/student/update/about", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body : JSON.stringify({ "about" : `${about}`})
      });

      const data = await response.json();

      if (response.ok) {
        alert("Data updated successfully!");
      }
    } catch (error) {
      console.error("Failed to fetch update data:", error);
    }
  }
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
            onChange={handleAbout}
            placeholder={about}
          />
          <div className="flex space-x-5 justify-end">
            <button className="px-4 py-1 rounded-lg bg-black font-inter text-white" onClick={updateAbout}>
              Update
            </button>
          </div>
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
