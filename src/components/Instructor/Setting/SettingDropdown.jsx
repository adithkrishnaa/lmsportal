import { useState, useEffect } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Help from "./Help"; // Import Help component
import { RxCross2 } from "react-icons/rx";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase"; // Adjust firebase import if needed

const SettingsDropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Dropdown visibility
  const [showHelp, setShowHelp] = useState(false); // Help modal visibility
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false); // Logout confirmation
  const Navigate = useNavigate();
  const [profile, setProfile] = useState({
    _id: "Loading...",
    username: "Loading...",
    email: "Loading...",
    displayName: "Loading...",
    profilePicture: "../../assets/Image/per.png",
    title: "Loading...",
    firstName: "Loading...",
    lastName: "Loading...",
    phoneNumber: "Loading...",
  });

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = await auth.currentUser.getIdToken();
        const response = await fetch(
          "https://course-compass-backend-zh7c.onrender.com/api/instructor/profile-data",
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
          setProfile(data);
        } else {
          console.error("Failed to fetch profile:", data.message);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  // Logout functionality
  const logOut = async () => {
    try {
      await signOut(auth);
      Navigate("/luctherhomelayout/luctherlogin");
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  // Handle Help modal open/close
  const handleHelpClick = () => {
    setShowHelp(true);
    setIsDropdownVisible(false);
  };
  const handleCloseHelp = () => setShowHelp(false);

  // Handle Logout confirmation modal
  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
    setIsDropdownVisible(false);
  };
  const cancelLogout = () => setShowLogoutConfirm(false);

  return (
    <>
      <div className="relative">
        {/* Settings Icon */}
        <button onClick={toggleDropdown} className="focus:outline-none">
          <IoSettingsOutline size={23} />
        </button>

        {/* Dropdown Menu */}
        {isDropdownVisible && (
          <ul className="absolute top-7 py-1 right-0 drop-shadow-2xl my-3 font-inter text-sm leading-8 bg-white rounded-3xl w-52 z-50">
            {/* User Info */}
            <div className="flex justify-center items-center w-full p-4 border-b-[1px] border-secondary">
              <img
                className="rounded-full size-10 bg-secondary"
                src={profile.profilePicture}
                alt="User"
              />
              <div className="ml-2">
                <h2 className="text-sm">
                  {profile.firstName + " " + profile.lastName}
                </h2>
                <p className="text-xs text-secondary">{profile.email}</p>
              </div>
            </div>

            {/* Menu Items */}
            <div className="px-3">
              <Link to="/lucthersetting/account">
                <li className="py-2">Account settings</li>
              </Link>
              <Link to="/lucthersetting/help">
                <li className="py-2">Help</li>
              </Link>
            </div>

            <div className="flex justify-evenly border-y-[1px] border-secondary py-2">
              <li>Language</li>
              <p className="text-secondary ml-2">English</p>
              <AiOutlineGlobal className="mt-1 ml-2 text-secondary" size={17} />
            </div>

            <div className="px-3">
              <button onClick={handleHelpClick} className="text-left w-full">
                <li className="py-2">Help and Support</li>
              </button>
              <button onClick={handleLogoutClick} className="text-left w-full">
                <li className="py-2">Log out</li>
              </button>
            </div>
          </ul>
        )}
      </div>

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed top-0 h-full right-0 w-full min-h-screen bg-black bg-opacity-60 flex justify-center z-50 items-center">
          <div className="w-1/2 rounded-3xl shadow-lg relative">
            <button
              className="absolute top-5 right-5 text-white"
              onClick={handleCloseHelp}
            >
              <RxCross2 size={30} />
            </button>
            <Help />
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed top-0  right-0 w-full min-h-screen bg-black bg-opacity-60 flex justify-center z-50 items-center">
          <div className="w-1/4 bg-white font-inter p-8 rounded-3xl shadow-lg relative">
            <div className="w-full py-2 mx-auto px-28 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.20078 0.582587C5.14035 0.412172 5.02861 0.26466 4.88092 0.160337C4.73323 0.0560129 4.55685 0 4.37603 0C4.19521 0 4.01883 0.0560129 3.87114 0.160337C3.72345 0.26466 3.61171 0.412172 3.55128 0.582587L2.91467 2.38296C2.87113 2.50549 2.80082 2.61679 2.70887 2.70874C2.61691 2.80069 2.50561 2.871 2.38307 2.91453L0.582615 3.55112C0.412191 3.61154 0.264673 3.72328 0.160344 3.87096C0.0560155 4.01864 0 4.19502 0 4.37583C0 4.55664 0.0560155 4.73301 0.160344 4.88069C0.264673 5.02838 0.412191 5.14011 0.582615 5.20054L2.38307 5.83712C2.50561 5.88066 2.61691 5.95096 2.70887 6.04292C2.80082 6.13487 2.87113 6.24616 2.91467 6.3687L3.55128 8.16907C3.61171 8.33949 3.72345 8.487 3.87114 8.59132C4.01883 8.69564 4.19521 8.75166 4.37603 8.75166C4.55685 8.75166 4.73323 8.69564 4.88092 8.59132C5.02861 8.487 5.14035 8.33949 5.20078 8.16907L5.8374 6.3687C5.88093 6.24616 5.95124 6.13487 6.0432 6.04292C6.13516 5.95096 6.24645 5.88066 6.369 5.83712L8.16945 5.20054C8.33987 5.14011 8.48739 5.02838 8.59172 4.88069C8.69605 4.73301 8.75206 4.55664 8.75206 4.37583C8.75206 4.19502 8.69605 4.01864 8.59172 3.87096C8.48739 3.72328 8.33987 3.61154 8.16945 3.55112L6.369 2.91453C6.24645 2.871 6.13516 2.80069 6.0432 2.70874C5.95124 2.61679 5.88093 2.50549 5.8374 2.38296L5.20078 0.582587ZM31.4922 15.0249L31.4616 14.9418L30.2583 11.7917L29.8821 12.9511L29.1448 15.2152H14.6099L13.8749 12.9511L13.4986 11.7961L12.2932 14.9571L12.2845 14.979L12.2757 15.0008L12.2495 15.0665C11.9957 15.75 11.9675 16.4969 12.169 17.1976C12.3706 17.8983 12.7913 18.5161 13.3695 18.9603L13.3717 18.9625L13.3783 18.9691L13.4002 18.9866L13.422 19.0041L13.4308 19.0085L18.8431 23.0817L18.854 23.0905L21.5492 25.1358L21.873 25.3808L22.1924 25.1358L24.8898 23.0905L24.9029 23.0817L30.3502 18.9844L30.3633 18.9757L30.383 18.9625C30.9651 18.5164 31.3879 17.8946 31.5889 17.1893C31.7898 16.484 31.7582 15.7327 31.4987 15.0468L31.4922 15.0249ZM32.3476 21.5876L26.874 25.7002L24.1766 27.7478L22.5402 28.9925C22.3482 29.138 22.1139 29.2168 21.873 29.2168C21.6321 29.2168 21.3978 29.138 21.2058 28.9925L19.565 27.7478L16.8698 25.7024L11.4335 21.6117L11.405 21.5876L11.3897 21.5767C10.2418 20.7019 9.4073 19.4796 9.0107 18.092C8.6141 16.7043 8.67661 15.2257 9.1889 13.8764L9.22609 13.7846L11.8819 6.8259L12.0307 6.43652L12.1248 6.18713L12.5032 5.19617L12.5404 5.09773L12.7986 4.42396C12.8618 4.2636 12.9679 4.1237 13.1052 4.01954C13.2426 3.91538 13.4059 3.85096 13.5774 3.83331C13.7993 3.80981 14.0224 3.86599 14.2068 3.99183C14.3911 4.11766 14.5247 4.30494 14.5837 4.52021L14.8003 5.18742L14.809 5.21585L15.2312 6.51527L15.3625 6.91122L16.9945 11.9339H26.7603L28.3944 6.91122L28.5257 6.51746L28.9479 5.21585L28.9567 5.18742L29.1733 4.52021C29.2134 4.37842 29.2861 4.24795 29.3856 4.13918C29.485 4.03042 29.6084 3.94635 29.7461 3.89368C29.8837 3.841 30.0318 3.82117 30.1784 3.83576C30.3251 3.85034 30.4663 3.89894 30.5909 3.97769C30.7572 4.08418 30.8858 4.24031 30.9584 4.42396L31.2122 5.09116L31.2537 5.19617L31.6278 6.18057L31.7263 6.43652L31.875 6.82372L34.5309 13.7824L34.5659 13.8786C35.0769 15.2275 35.1385 16.7054 34.7415 18.0921C34.3446 19.4788 33.5103 20.7003 32.3629 21.5745L32.3476 21.5876ZM6.62933 24.7924C6.70509 24.5797 6.8448 24.3958 7.02928 24.2656C7.21376 24.1355 7.43398 24.0657 7.65972 24.0657C7.88547 24.0657 8.10569 24.1355 8.29017 24.2656C8.47465 24.3958 8.61435 24.5797 8.69011 24.7924L9.48643 27.0412C9.54084 27.1945 9.62877 27.3338 9.74382 27.4488C9.85887 27.5639 9.99814 27.6518 10.1515 27.7062L12.4004 28.5025C12.6131 28.5783 12.7971 28.718 12.9272 28.9024C13.0573 29.0869 13.1271 29.3071 13.1271 29.5328C13.1271 29.7586 13.0573 29.9788 12.9272 30.1633C12.7971 30.3477 12.6131 30.4874 12.4004 30.5632L10.1515 31.3595C9.99814 31.4139 9.85887 31.5018 9.74382 31.6169C9.62877 31.7319 9.54084 31.8712 9.48643 32.0245L8.69011 34.2733C8.61435 34.486 8.47465 34.6699 8.29017 34.8001C8.10569 34.9302 7.88547 35 7.65972 35C7.43398 35 7.21376 34.9302 7.02928 34.8001C6.8448 34.6699 6.70509 34.486 6.62933 34.2733L5.83302 32.0245C5.77861 31.8712 5.69067 31.7319 5.57562 31.6169C5.46057 31.5018 5.32131 31.4139 5.16797 31.3595L2.91904 30.5632C2.70639 30.4874 2.52239 30.3477 2.39227 30.1633C2.26216 29.9788 2.19232 29.7586 2.19232 29.5328C2.19232 29.3071 2.26216 29.0869 2.39227 28.9024C2.52239 28.718 2.70639 28.5783 2.91904 28.5025L5.16797 27.7062C5.32131 27.6518 5.46057 27.5639 5.57562 27.4488C5.69067 27.3338 5.77861 27.1945 5.83302 27.0412L6.62933 24.7924Z"
                  fill="url(#paint0_linear_254_13945)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_254_13945"
                    x1="0"
                    y1="0.700001"
                    x2="35"
                    y2="35.7"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#49FFA7" />
                    <stop offset="1" stopColor="#1976D2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-center">
              Logout of Course Compass?
            </h3>
            <p className=" text-sm font-normal text-center">
              You can always log back in at any time.
            </p>
            <div className=" place-items-center space-y-4 w-full px-8 mt-8">
              <button
                onClick={logOut}
                className="bg-black w-full text-white py-2 px-6 rounded-lg"
              >
                Log out
              </button>
              <br />
              <button
                onClick={cancelLogout}
                className="bg-gray-300 text-black w-full py-2 px-6 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsDropdown;