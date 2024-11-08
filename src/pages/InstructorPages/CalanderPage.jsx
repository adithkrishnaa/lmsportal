import LuctherNavbar from "../../components/Instructor/LuctherNavbar";
import { useCalendarApp } from "@schedule-x/react";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { HiCalendar } from "react-icons/hi";
import { auth } from "../../firebase";

const CalendarPage = () => {
  const plugins = [createEventsServicePlugin()];
  const [events, setEvents] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

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
        console.log("Fetched data:", data); // Log data for debugging

        // Convert start and end to Date objects
        if (Array.isArray(data.classSchedule)) {
          const mappedEvents = data.classSchedule.map((event, index) => ({
            id: `${event.courseId}-${index}`,
            title: event.courseId.name || "No Title",
            start: new Date(event.startTime),
            end: new Date(event.endTime),
            eventLink: event.eventLink,
          }));
          setEvents(mappedEvents);
        } else {
          console.error("Unexpected data format for classSchedule:", data);
        }
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
    setSelectedMonth(parseInt(event.target.value));
  };

  // Filter events by selected month
  const filteredEvents = events.filter(
    (event) =>
      event.start instanceof Date && event.start.getMonth() === selectedMonth
  );

  const handleAddEvent = async () => {
    const courseId = prompt("Enter course ID:");
    const date = prompt("Enter event date (YYYY-MM-DD):");
    const startTime = prompt("Enter start time (HH:MM, 24-hour format):");
    const endTime = prompt("Enter end time (HH:MM, 24-hour format):");

    // Validate the input date and time format
    if (courseId && date && startTime && endTime) {
      // Check if the date and time format is valid
      const startDate = new Date(`${date}T${startTime}`);
      const endDate = new Date(`${date}T${endTime}`);

      if (isNaN(startDate) || isNaN(endDate)) {
        alert("Invalid date or time format. Please check the inputs.");
        return;
      }

      const newEvent = {
        courseId: courseId,
        startTime: startDate.toISOString(),
        endTime: endDate.toISOString(),
        eventLink: "https://your-event-link.com", // Replace with the actual link or variable
      };

      setEvents((prevEvents) => [
        ...prevEvents,
        {
          id: `${newEvent.courseId}-${prevEvents.length + 1}`,
          title: newEvent.title,
          start: startDate,
          end: endDate,
          eventLink: newEvent.eventLink,
        },
      ]);

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
            body: JSON.stringify(newEvent),
          }
        );

        if (response.ok) {
          const data = await response.json();
          newEvent.eventLink = data.meetingLink; // Update with the actual meeting link from the response
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
            style={{ color: "#0455BF", flexShrink: 0 }}
          />
          <h2
            className="ml-2"
            style={{
              width: "144.46px",
              color: "#000",
              fontFamily: "Inter",
              fontSize: "23.56px",
              fontWeight: "700",
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
              fontWeight: "600",
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
                      style={{ color: "#0832FF", fontWeight: "700" }}
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
                    className="p-2 font-bold border border-gray-300"
                    style={{ color: "#000" }}
                  >
                    {time}
                  </td>
                  {Array(7)
                    .fill(0)
                    .map((_, dayIndex) => (
                      <td
                        key={dayIndex}
                        className="p-2 border border-gray-300"
                        style={{ color: "#0832FF", cursor: "pointer" }}
                      >
                        {filteredEvents
                          .filter(
                            (event) =>
                              event.start.getDay() === dayIndex + 1 &&
                              event.start.getHours() === timeIndex + 9
                          )
                          .map((event) => (
                            <p
                              key={event.id}
                              className="text-sm bg-blue-200 p-1 rounded"
                            >
                              {event.title}
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

export default CalendarPage;
