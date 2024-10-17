import { useEffect, useState } from "react";
import axios from "axios";
import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../Searchbar/searchbar";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline, IoPersonSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiMailOpen } from "react-icons/hi";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Notifications based on Role
  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");

      if (!token) {
        throw new Error("No token found. Please log in.");
      }

      const endpoint =
        role === "student"
          ? "http://localhost:5173/api/student/update/notifications"
          : "http://localhost:5173/api/instructor/update/notifications";

      console.log("Fetching notifications from:", endpoint); // Debug endpoint

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("API Response:", response.data); // Debug full response
      setNotifications(response.data.notifications || []);
    } catch (err) {
      console.error("Error fetching notifications:", err);
      setError(
        err.response?.status === 401
          ? "Unauthorized! Please log in."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  };

  // Fetch notifications on component mount
  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <>
      <Navbar />
      <Search />
      <Aicalender />

      <div className="pt-24">
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

            <span className="text-secondary px-3 py-2 rounded-xl bg-four text-[15px] font-semibold font-['Inter'] leading-[21px]">
              All
            </span>

            {loading ? (
              <p className="text-center mt-10">Loading notifications...</p>
            ) : error ? (
              <div className="text-center mt-10 text-red-500">{error}</div>
            ) : notifications.length === 0 ? (
              <div className="bg-four h-[641px] rounded-lg mt-5 flex justify-items-center">
                <div className="place-content-center space-y-5 mx-auto text-center">
                  <IoIosNotificationsOutline
                    className="text-secondary bg-notbg rounded-full mx-auto"
                    size={60}
                  />
                  <h2 className="text-3xl font-inter font-bold">
                    No new alerts
                  </h2>
                  <p className="font-inter text-secondary">
                    We'll inform you if something needs attention
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-four rounded-lg mt-5">
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="flex justify-between w-full border-b-2 bg-white"
                  >
                    <div className="p-6 flex space-x-10">
                      <IoPersonSharp size={20} />
                      <h1 className="text-base font-inter font-semibold">
                        {notification.content}
                      </h1>
                    </div>
                    <div className="p-6 relative group">
                      <BsThreeDots size={20} />
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
                      <p className="font-inter text-sm">
                        {new Date(notification.timestamp).toLocaleString()}
                      </p>
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
