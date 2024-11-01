import React, { useState, useEffect } from "react";
import LuctherNavbar from "../../components/Instructor/LuctherNavbar";
import { useCalendarApp } from "@schedule-x/react";
import {
  createViewDay,
  createViewWeek,
  createViewMonthGrid,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import Footer from "../../components/Footer";
import { IoIosAdd } from "react-icons/io";
import { HiCalendar } from "react-icons/hi";
import { auth } from "../../firebase";

const CalanderPage = () => {
  const plugins = [createEventsServicePlugin()];
  const [events, setEvents] = useState([]);
  const [courseId, setCourseId] = useState(null);

  const calendar = useCalendarApp(
    {
      views: [createViewDay(), createViewWeek(), createViewMonthGrid()],
      events: events,
    },
    plugins
  );

  // Step 1: Prompt for course ID and fetch course details
  useEffect(() => {
    const fetchCourseDetails = async () => {
      const inputCourseId = prompt("Enter Course ID:");
      if (!inputCourseId) {
        alert("Course ID is required.");
        return;
      }

      try {
        const token = await auth.currentUser.getIdToken();
        const response = await fetch(
          `https://course-compass-backend-zh7c.onrender.com/api/course/get-course/course/${inputCourseId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const courseData = await response.json();
          setCourseId(courseData._id);
        } else {
          console.error("Failed to fetch course details.");
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, []);

  // Event handler to add a new event
  const handleAddEvent = async () => {
    const title = prompt("Enter event title:");
    const date = prompt("Enter event date (YYYY-MM-DD):");
    const startTime = prompt("Enter start time (HH:MM, 24-hour format):");
    const endTime = prompt("Enter end time (HH:MM, 24-hour format):");

    if (courseId && title && date && startTime && endTime) {
      const newEvent = {
        title,
        start: `${date}T${startTime}`,
        end: `${date}T${endTime}`,
      };

      try {
        const token = await auth.currentUser.getIdToken();
        const response = await fetch(
          "https://course-compass-backend-zh7c.onrender.com/api/instructor/schedule-class",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              courseId: courseId,
              title: newEvent.title,
              startTime: newEvent.start,
              endTime: newEvent.end,
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          newEvent.id = data.meetingLink;
          setEvents((prevEvents) => [...prevEvents, newEvent]);
          alert(`Event created! Join at: ${data.meetingLink}`);
        } else {
          alert("Failed to schedule class.");
        }
      } catch (error) {
        alert("An error occurred while scheduling the class.");
        console.error("Error scheduling class:", error);
      }
    } else {
      alert("Please provide all details for the event.");
    }
  };

  return (
    <>
      <LuctherNavbar />
      <div
        className="flex flex-col items-start mb-4"
        style={{ marginLeft: "150px", marginTop: "20px" }}
      >
        <div className="flex items-center mb-2">
          <HiCalendar
            size={53.938}
            style={{
              color: "#0455BF",
              flexShrink: 0,
            }}
          />
          <h2
            className="ml-2"
            style={{
              width: "144.46px",
              color: "#000",
              fontFamily: "Inter",
              fontSize: "23.56px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "31px",
              letterSpacing: "-0.156px",
            }}
          >
            My Calendar
          </h2>
        </div>

        <button
          onClick={handleAddEvent}
          className="flex items-center text-black font-semibold text-[25px] leading-[21px] tracking-[-0.32px] bg-white p-2 rounded-full shadow hover:bg-blue-100"
          style={{ width: "150.557px", height: "53px", flexShrink: 0 }}
        >
          <IoIosAdd className="mr-2" size={43} style={{ color: "#0832FF" }} />
          Create
        </button>
      </div>

      <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50 pt-10 px-4 md:px-16 lg:px-32">
        <div className="md:w-1/4 bg-blue-50 p-4 rounded-lg shadow-md border border-blue-300">
          <h2
            className="mb-4"
            style={{
              color: "#0832FF",
              fontFamily: "Inter",
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "21px",
              letterSpacing: "-0.32px",
            }}
          >
            Upcoming Classes
          </h2>

          <div className="flex flex-col space-y-4">
            {events.slice(0, 5).map((event) => (
              <div
                key={event.id}
                className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
              >
                <div>
                  <p className="font-semibold">{event.title}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(event.start).toLocaleDateString()} -{" "}
                    {new Date(event.start).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <IoIosAdd className="text-blue-600 cursor-pointer" size={25} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-white p-5 rounded-lg shadow-lg border border-gray-200 -mt-40 md:ml-6">
          <table className="w-full text-center">
            <thead>
              <tr>
                <th>
                  <h2
                    style={{
                      color: "#0832FF",
                      fontFamily: "Inter",
                      fontSize: "25px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "21px",
                      letterSpacing: "-0.32px",
                    }}
                  >
                    Sept
                  </h2>
                </th>
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day, index) => (
                  <th
                    key={index}
                    className="p-2"
                    style={{
                      color: "#0832FF",
                      fontFamily: "Inter",
                      fontWeight: "700",
                    }}
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                "09:00 AM",
                "10:00 AM",
                "11:00 AM",
                "12:00 PM",
                "01:00 PM",
                "02:00 PM",
                "03:00 PM",
                "04:00 PM",
                "05:00 PM",
              ].map((time, timeIndex) => (
                <tr key={timeIndex}>
                  <td
                    className="p-2"
                    style={{
                      color: "#000",
                      fontFamily: "Inter",
                      fontWeight: "700",
                    }}
                  >
                    {time}
                  </td>
                  {Array(7)
                    .fill(0)
                    .map((_, dayIndex) => (
                      <td key={dayIndex} className="p-2 border">
                        {events
                          .filter((event) => {
                            const eventDay =
                              (new Date(event.start).getDay() + 6) % 7; // Adjust for Mon-Sun start
                            const eventStartTime = new Date(
                              event.start
                            ).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            });
                            return (
                              eventStartTime === time && eventDay === dayIndex
                            );
                          })
                          .map((filteredEvent) => (
                            <p key={filteredEvent.id} className="text-blue-600">
                              {filteredEvent.title}
                            </p>
                          ))}
                      </td>
                    ))}
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CalanderPage;

// 6712a07bde57de8f762e9894