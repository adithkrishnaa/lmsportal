import LuctherNavbar from "../../components/Instructor/LuctherNavbar";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewWeek,
  createViewMonthGrid,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { IoIosAdd } from "react-icons/io"; // Icon for the plus sign
import { HiCalendar } from "react-icons/hi"; // Import calendar icon

const CalanderPage = () => {
  const plugins = [createEventsServicePlugin()];

  const calendar = useCalendarApp(
    {
      views: [createViewDay(), createViewWeek(), createViewMonthGrid()],
      events: [
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
      ],
    },
    plugins
  );

  useEffect(() => {
    // Optional: Add code to fetch events from an API and set them in the calendar
  }, []);

  return (
    <>
      <LuctherNavbar />
      <div className="flex flex-col items-start mb-4" style={{ marginLeft: "150px", marginTop: "20px" }}>
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
            }}
          >
            My Calendar
          </h2>
        </div>

        <button
          className="flex items-center text-black font-semibold text-[25px] leading-[21px] tracking-[-0.32px] bg-white p-2 rounded-full shadow hover:bg-blue-100"
          style={{ width: "150.557px", height: "53px", flexShrink: 0 }}
        >
          <IoIosAdd className="mr-2" size={43} style={{ color: "#0832FF" }} />
          Create
        </button>
      </div>

      <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50 pt-10 px-4 md:px-16 lg:px-32">
        <div className="md:w-1/4 bg-blue-50 p-4 rounded-lg shadow-md border border-blue-300">
          <h2 className="mb-4" style={{
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
                className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
              >
                <div>
                  <p className="font-semibold">Generative AI</p>
                  <p className="text-sm text-gray-600">Week 1: Day {index + 3}</p>
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
        <div className="flex-1 bg-white p-5 rounded-lg shadow-lg border border-gray-200 mt-6 md:mt-0 md:ml-6">
          <div className="flex justify-between items-center mb-4">
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

            <div className="flex-1 flex justify-between">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
                <div
                  key={index}
                  className="text-center"
                  style={{
                    marginLeft: index === 0 ? '20px' : '0', // Add left margin for Monday
                    color: "#000",
                    textAlign: "center",
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "41px",
                    letterSpacing: "-0.156px",
                  }}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Table Structure */}
          <div className="grid grid-cols-7 gap-4">
            {/* Time Blocks */}
            <div
              className="text-right"
              style={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "31px",
                letterSpacing: "-0.156px",
              }}
            >
              09:00 AM
            </div>
            <div className="col-span-6">
              <div
                style={{
                  width: "146px",
                  height: "64px",
                  flexShrink: 0,
                  borderRadius: "12px",
                  background: "#000",
                  color: "#fff", // To make the text visible on the black background
                  padding: "10px", // Add some padding for better text positioning
                }}
              >
                GD: Topic name <br />
                9am - 10am
              </div>
            </div>

            <div
              className="text-right"
              style={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "31px",
                letterSpacing: "-0.156px",
              }}
            >
              10:00 AM
            </div>
            <div className="col-span-6"></div>

            <div
              className="text-right"
              style={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "31px",
                letterSpacing: "-0.156px",
              }}
            >
              11:00 AM
            </div>
            <div className="col-span-6">
              <div
                style={{
                  width: "146px",
                  height: "64px",
                  flexShrink: 0,
                  borderRadius: "12px",
                  background: "#000",
                  color: "#fff",
                  padding: "10px",
                }}
              >
                GD: Topic name <br />
                11am - 12pm
              </div>
            </div>

            <div
              className="text-right"
              style={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "31px",
                letterSpacing: "-0.156px",
              }}
            >
              12:00 PM
            </div>
            <div className="col-span-6">
              <div
                style={{
                  width: "146px",
                  height: "64px",
                  flexShrink: 0,
                  borderRadius: "12px",
                  background: "#000",
                  color: "#fff",
                  padding: "10px",
                }}
              >
                GD: Topic name <br />
                12pm - 1pm
              </div>
            </div>

            <div
              className="text-right"
              style={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "31px",
                letterSpacing: "-0.156px",
              }}
            >
              1:00 PM
            </div>
            <div className="col-span-6"></div>

            <div
              className="text-right"
              style={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "31px",
                letterSpacing: "-0.156px",
              }}
            >
              2:00 PM
            </div>
            <div className="col-span-6">
              <div
                style={{
                  width: "146px",
                  height: "64px",
                  flexShrink: 0,
                  borderRadius: "12px",
                  background: "#000",
                  color: "#fff",
                  padding: "10px",
                }}
              >
                GD: Topic name <br />
                2pm - 3pm
              </div>
            </div>

            <div
              className="text-right"
              style={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "31px",
                letterSpacing: "-0.156px",
              }}
            >
              3:00 PM
            </div>
            <div className="col-span-6"></div>

            <div
              className="text-right"
              style={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "31px",
                letterSpacing: "-0.156px",
              }}
            >
              4:00 PM
            </div>
            <div className="col-span-6"></div>

            <div
              className="text-right"
              style={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "31px",
                letterSpacing: "-0.156px",
              }}
            >
              5:00 PM
            </div>
            <div className="col-span-6"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CalanderPage;
