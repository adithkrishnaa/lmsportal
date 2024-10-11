import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../Searchbar/searchbar";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiMailOpen } from "react-icons/hi";
import { useState } from "react";

const Notification = () => {
  const [notifications, ] = useState([
    // {
    //   id: 1,
    //   message: "Profile created successfully",
    //   time: "3h",
    // },
    // {
    //   id: 2,
    //   message: "Password changed successfully",
    //   time: "5h",
    // },
    // Add more notifications as needed
  ]);

  return (
    <>
      <Navbar />
      <Search />
      <Aicalender />

      <div className="pt-24">
        {/* Back to Previous Section */}
        <div className="relative">
          <div className="left-7 absolute">
            <Link className="flex text-nowrap" to={"/dashboard"}>
              <IoIosArrowBack size={20} />
              <p className="text-sm container font-inter font-medium">
                Back to Previous
              </p>
            </Link>
          </div>

          <div className="w-1/2 -mt-2 container mx-auto">
            <div className="flex justify-between">
              <h2 className="text-3xl mb-2 text-black font-semibold font-inter leading-10">
                Notifications
              </h2>
              <IoSettingsOutline className="mt-3" size={25} />
            </div>

            {/* Notification Filter */}
            <span className="text-secondary px-3 py-2 rounded-xl bg-four text-[15px] font-semibold font-['Inter'] leading-[21px]">
              All
            </span>

            {/* No new alerts section (conditionally rendered) */}
            {notifications.length === 0 && (
              <div className="bg-four h-[641px] rounded-lg mt-5 flex justify-items-center">
                <div className="place-content-center space-y-5 mx-auto text-center justify-items-center">
                  <IoIosNotificationsOutline
                    className="text-secondary bg-notbg rounded-full mx-auto justify-items-center place-content-center"
                    size={60}
                  />
                  <h2 className="text-3xl font-inter font-bold">
                    No new alerts
                  </h2>
                  <p className="font-inter text-secondary">
                    Well inform you if something needs attention
                  </p>
                </div>
              </div>
            )}

            {/* Notifications Section */}
            {notifications.length > 0 && (
              <div className="bg-four rounded-lg mt-5">
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="flex justify-between w-full border-b-2 bg-white justify-items-center">
                    <div className="p-6 flex space-x-10">
                      <IoPersonSharp size={20} />
                      <h1 className="text-base font-inter font-semibold">
                        {notification.message}
                      </h1>
                    </div>

                    {/* Hover for three dots */}
                    <div className="p-6 relative group">
                      <BsThreeDots size={20} />

                      {/* Hidden dropdown (shows on hover) */}
                      <div className="hidden group-hover:block absolute w-48 right-2 bg-white rounded-2xl shadow-xl py-3 px-3">
                        <button className="flex my-auto text-sm font-medium font-inter">
                          <RiDeleteBinLine className="mr-2" size={20} />
                          Delete notification
                        </button>
                        <br />
                        <button className="flex my-auto text-sm font-medium font-inter">
                          <HiMailOpen className="mr-2" size={20} />
                          Mark as read
                        </button>
                      </div>
                      <p className="font-inter text-sm">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Notification;
