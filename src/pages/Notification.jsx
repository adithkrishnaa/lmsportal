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

  // Fetch notifications on component mount
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

        if (!response.ok)
          throw new Error(`Failed to fetch notifications: ${response.status}`);

        const data = await response.json();
        setNotifications(data.notificationArray);
        if (!response.ok) throw new Error(`Failed to fetch notifications: ${response.status}`);

      } catch (error) {
        console.error("Error fetching notifications:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  // Delete a notification
  const deleteNotification = async (index) => {
    const token = await auth.currentUser.getIdToken();

    try {
      const response = await fetch(
        `https://course-compass-backend-zh7c.onrender.com/api/student/notifications/${index}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok)
        throw new Error(`Failed to delete notification: ${response.status}`);

      console.log("Notification deleted successfully");

      // Update the notification array by removing the deleted one
      setNotifications((notificationArray) =>
        notificationArray.filter((_, i) => i !== index)
      );
    } catch (error) {
      console.error("Error deleting notification:", error.message);
    }
  };

  // Mark a notification as read
  const markAsRead = async (index) => {
    const token = await auth.currentUser.getIdToken();
    const userId = auth.currentUser.uid;

    try {
      const response = await fetch(
        `https://course-compass-backend-zh7c.onrender.com/api/student/notifications/${index}/read`,
        {
          method: "PUT", // Use PUT for marking as read
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ marksRead: true }), // Update only the read status
        }
      );

      if (!response.ok)
        throw new Error(
          `Failed to mark notification as read: ${response.status}`
        );

      console.log("Notification marked as read");

      // Update the state to reflect the read status
      setNotifications((notificationArray) =>
        notificationArray.map((notification, i) =>
          i === index ? { ...notification, marksRead: true } : notification
        )
      );
    } catch (error) {
      console.error("Error marking notification as read:", error.message);
    }
  };

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
              <p>Loading notifications...</p>
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
                    key={notification.id || index} // Prefer a unique ID if available
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
                        <button
                          className="flex my-auto text-sm font-medium font-inter"
                          onClick={() => deleteNotification(index)}
                        >
                          <RiDeleteBinLine className="mr-2" size={20} />
                          Delete notification
                        </button>
                        <br />
                        <button
                          className="flex my-auto text-sm font-medium font-inter"
                          onClick={() => markAsRead(index)}
                        >
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
