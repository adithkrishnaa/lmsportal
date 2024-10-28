import React, { useState, useEffect } from "react";
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
import { auth } from "../firebase";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [readStatus, setReadStatus] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const token = await auth.currentUser.getIdToken();
      console.log(token)
      try {
        const response = await fetch(
          `https://course-compass-backend-zh7c.onrender.com/api/student/notifications`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) throw new Error(`Failed to fetch notifications`);

        const data = await response.json();
        setNotifications(data.notificationArray);
        setReadStatus(new Array(data.notificationArray.length).fill(false));
      } catch (error) {
        console.error("Error fetching notifications:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

  const deleteNotification = async (index) => {
    const token = await auth.currentUser.getIdToken();
    try {
      await fetch(
        `https://course-compass-backend-zh7c.onrender.com/api/student/notifications/${index}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setNotifications((prev) => prev.filter((_, i) => i !== index));
      setReadStatus((prev) => prev.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting notification:", error.message);
    }
  };

  const markAsRead = async (index) => {
    const token = await auth.currentUser.getIdToken();
    try {
      await fetch(
        `https://course-compass-backend-zh7c.onrender.com/api/student/notifications/${index}/read`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ marksRead: true }),
        }
      );
      setReadStatus((prev) => {
        const newStatus = [...prev];
        newStatus[index] = true;
        return newStatus;
      });
    } catch (error) {
      console.error("Error marking notification as read:", error.message);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNotifications = notifications.filter((notification) =>
    new RegExp(searchTerm, "i").test(notification.content)
  );

  return (
    <>
      <Navbar />
      <Search onSearch={handleSearch} />
      <Aicalender />
      <div className="pt-24">
        <div className="relative">
          <div className="absolute left-7">
            <Link className="flex text-nowrap" to="/dashboard">
              <IoIosArrowBack size={20} />
              <p className="text-sm font-inter font-medium">Back to Previous</p>
            </Link>
          </div>
          <div className="w-1/2 container mx-auto -mt-2">
            <div className="flex justify-between">
              <h2 className="text-3xl font-semibold font-inter leading-10">
                Notifications
              </h2>
              
            </div>
            <span className="text-secondary px-3 py-2 bg-four rounded-xl text-[15px] font-semibold">
              All
            </span>
            {loading ? (
              <p>Loading notifications...</p>
            ) : filteredNotifications.length === 0 ? (
              <div className="bg-four h-[641px] rounded-lg mt-5 flex justify-center items-center">
                <div className="text-center space-y-5">
                  <IoIosNotificationsOutline
                    className="text-secondary bg-notbg rounded-full mx-auto"
                    size={60}
                  />
                  <h2 className="text-3xl font-bold">No new alerts</h2>
                  <p className="text-secondary">We'll inform you if needed</p>
                </div>
              </div>
            ) : (
              <div className="bg-four rounded-lg mt-5">
                {filteredNotifications.map((notification, index) => (
                  <div
                    key={notification.id || index}
                    className={`flex justify-between items-center w-full border-b-2 p-6 ${
                      readStatus[index]
                        ? "bg-gray-100 text-gray-400"
                        : "bg-white"
                    }`}
                  >
                    <div className="flex space-x-10">
                      <IoPersonSharp size={20} />
                      <h1 className="text-base font-semibold">
                        {notification.content}
                      </h1>
                    </div>
                    <div className="relative group">
                      <BsThreeDots size={20} />
                      <div className="hidden group-hover:block absolute right-2 bg-white rounded-2xl shadow-xl py-3 px-3 w-48">
                        <button
                          className="flex items-center text-sm font-medium"
                          onClick={() => deleteNotification(index)}
                        >
                          <RiDeleteBinLine className="mr-2" size={20} />
                          Delete notification
                        </button>
                        <button
                          className="flex items-center mt-2 text-sm font-medium"
                          onClick={() => markAsRead(index)}
                        >
                          <HiMailOpen className="mr-2" size={20} />
                          Mark as read
                        </button>
                      </div>
                      <p className="text-sm">
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