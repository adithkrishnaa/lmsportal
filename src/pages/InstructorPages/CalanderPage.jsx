import LuctherNavbar from "../../components/Instructor/LuctherNavbar";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import Footer from "../../components/Footer";
import { useEffect } from "react";

const CalanderPage = () => {
  const plugins = [createEventsServicePlugin()];

  const calendar = useCalendarApp(
    {
      views: [
        createViewDay(),
        createViewWeek(),
        createViewMonthGrid(),
        createViewMonthAgenda(),
      ],
      events: [
        {
          id: "1",
          title: "Event 1",
          start: "2023-12-16",
          end: "2023-12-16",
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
      <div className="w-full min-h-screen bg-gray-50 pt-10 px-4 md:px-16 lg:px-32">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Schedule Calendar
        </h1>
        <div className="bg-white flex p-5 rounded-lg shadow-lg border border-gray-200">
          <ScheduleXCalendar calendarApp={calendar} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CalanderPage;
