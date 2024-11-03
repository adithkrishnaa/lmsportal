import LuctherNavbar from "../../components/Instructor/LuctherNavbar";
import { useCalendarApp } from "@schedule-x/react";
import {
  createEventsServicePlugin,
} from "@schedule-x/events-service";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { HiCalendar } from "react-icons/hi";
import { auth } from "../../firebase";

const CalendarPage = () => {
  const plugins = [createEventsServicePlugin()];
  const [events, setEvents] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // State to keep track of the selected month

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fetchScheduleData = async () => {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const token = await currentUser.getIdToken();
        const response = await fetch(
          "https://course-compass-backend-zh7c.onrender.com/api/instructor/get-schedule",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch schedule data");
        }

        const data = await response.json();

        const mappedEvents = data.map((event, index) => ({
          id: `${event.courseId._id}-${index}`,
          title: event.courseId.name || "No Title",
          start: new Date(event.startTime),
          end: new Date(event.endTime),
          eventLink: event.eventLink,
        }));

        setEvents(mappedEvents);
      } else {
        console.error("User is not authenticated");
      }
    } catch (error) {
      console.error("Error fetching schedule:", error);
    }
  };

  useEffect(() => {
    fetchScheduleData();
  }, []);

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value)); // Update selected month based on dropdown selection
  };

  const filteredEvents = events.filter(event => event.start.getMonth() === selectedMonth);

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
          onClick={fetchScheduleData}
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
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
              >
                <div>
                  <p className="font-semibold">{event.title}</p>
                  <p className="text-sm text-red-600">
                    {event.start.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                    ,{" "}
                    {event.start.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <a
                    href={event.eventLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline text-sm"
                  >
                    Join Class
                  </a>
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
                  <select
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    className="text-blue-600 font-semibold p-2 rounded"
                    style={{
                      fontSize: "20px",
                      color: "#0832FF",
                      fontFamily: "Inter",
                      fontWeight: "600",
                    }}
                  >
                    {months.map((month, index) => (
                      <option key={index} value={index}>
                        {month}
                      </option>
                    ))}
                  </select>
                </th>
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day, index) => (
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
                  )
                )}
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
                    className="p-2 font-bold"
                    style={{ color: "#000", fontFamily: "Inter" }}
                  >
                    {time}
                  </td>
                  {Array(7)
                    .fill(0)
                    .map((_, dayIndex) => {
                      const eventsForDayAndTime = filteredEvents.filter((event) => {
                        const eventDay = event.start.getDay();
                        const eventTime = event.start.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        });

                        return (
                          eventDay === (dayIndex + 1) % 7 && eventTime === time
                        );
                      });

                      return (
                        <td key={dayIndex} className="p-2 border">
                          {eventsForDayAndTime.map((event, eventIndex) => (
                            <div
                              key={eventIndex}
                              className="bg-blue-600 text-white p-2 rounded-md"
                            >
                              {event.title} <br />
                              {event.start.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              })}
                            </div>
                          ))}
                        </td>
                      );
                    })}
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

export default CalendarPage;
