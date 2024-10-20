import LuctherNavbar from "../../components/Instructor/LuctherNavbar";
import { useCalendarApp } from "@schedule-x/react";
import {
  createViewDay,
  createViewWeek,
  createViewMonthGrid,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io"; // Icon for the plus sign
import { HiCalendar } from "react-icons/hi"; // Import calendar icon

const CalanderPage = () => {
  const plugins = [createEventsServicePlugin()];

  const [events, setEvents] = useState([
    {
      id: "1",
      title: "GA_D2: Topic name",
      start: "2023-09-18T09:00",
      end: "2023-09-18T10:00",
    },
    {
      id: "2",
      title: "GA_D3: Topic name",
      start: "2023-09-18T11:00",
      end: "2023-09-18T12:00",
    },
    {
      id: "3",
      title: "GA_D5: Topic name",
      start: "2023-09-18T12:00",
      end: "2023-09-18T13:00",
    },
    {
      id: "4",
      title: "GA_D4: Topic name",
      start: "2023-09-18T14:00",
      end: "2023-09-18T15:00",
    },
    {
      id: "5",
      title: "GA_D6: Topic name",
      start: "2023-09-18T17:00",
      end: "2023-09-18T18:00",
    },
  ]);

  const calendar = useCalendarApp(
    {
      views: [createViewDay(), createViewWeek(), createViewMonthGrid()],
      events: events,
    },
    plugins
  );

  useEffect(() => {
    // Optional: Add code to fetch events from an API and set them in the calendar
  }, []);

  const handleAddEvent = () => {
    const title = prompt("Enter event title:");
    const date = prompt("Enter event date (YYYY-MM-DD):");
    const startTime = prompt("Enter start time (HH:MM, 24-hour format):");
    const endTime = prompt("Enter end time (HH:MM, 24-hour format):");

    if (title && date && startTime && endTime) {
      const newEvent = {
        id: (events.length + 1).toString(),
        title: title,
        start: `${date}T${startTime}`,
        end: `${date}T${endTime}`,
      };

      setEvents((prevEvents) => [...prevEvents, newEvent]);
    } else {
      alert("Please provide all details for the event.");
    }
  };

  return (
    <>
      <LuctherNavbar />
      <div
        className="flex flex-col items-start mb-4"
        style={{ marginLeft: "150px", marginTop: "20px" }}>
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
              lineHeight: "31px", // 131.579%
              letterSpacing: "-0.156px",
            }}>
            My Calendar
          </h2>
        </div>

        <button
          onClick={handleAddEvent}
          className="flex items-center text-black font-semibold text-[25px] leading-[21px] tracking-[-0.32px] bg-white p-2 rounded-full shadow hover:bg-blue-100"
          style={{ width: "150.557px", height: "53px", flexShrink: 0 }}>
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
              lineHeight: "21px", // 95.455%
              letterSpacing: "-0.32px",
            }}>
            Upcoming Classes
          </h2>

          <div className="flex flex-col space-y-4">
            {/* Class Items */}
            {Array.from({ length: 5 }, (_, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                <div>
                  <p className="font-semibold">Generative AI</p>
                  <p className="text-sm text-gray-600">
                    Week 1: Day {index + 3}
                  </p>
                  <p className="text-sm text-gray-600">Fundamentals of AI</p>
                  <p className="text-sm text-red-600">
                    {10 + index} Sept, {index + 11}:00 AM
                  </p>
                </div>
                <IoIosAdd className="text-blue-600 cursor-pointer" size={25} />
              </div>
            ))}
          </div>
        </div>

        {/* Main Calendar Section */}
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
                    }}>
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
                    }}>
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
                    }}>
                    {time}
                  </td>
                  {Array(7)
                    .fill(0)
                    .map((_, dayIndex) => (
                      <td key={dayIndex} className="p-2 border">
                        {events.map((event, eventIndex) => {
                          const eventStartTime = event.start.split("T")[1];
                          const eventDay = new Date(event.start).getDay();
                          const formattedTime = new Date(
                            `1970-01-01T${eventStartTime}`
                          ).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          });

                          if (
                            formattedTime === time &&
                            eventDay === (dayIndex + 1) % 7
                          ) {
                            return (
                              <div
                                key={eventIndex}
                                className="bg-black text-white p-2 rounded-md">
                                {event.title} <br /> {formattedTime}
                              </div>
                            );
                          }
                          return null;
                        })}
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
