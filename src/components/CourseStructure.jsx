import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { GoDot } from "react-icons/go";
import { FaCircleHalfStroke, FaCircleCheck } from "react-icons/fa6";
import { BiLock } from "react-icons/bi";

// Utility function to determine locked status
const determineLockedStatus = (courseProgress) => {
  const result = {
    month1: { week1: { locked: false, days: [], miniTestLocked : true }, projectWeeks: [] },
    month2: { weeks: [], week5Test: { locked: true } },
  };

  // Handle Month 1, Week 1 Days
  if (courseProgress.month1?.week1) {
    courseProgress.month1.week1.days.forEach((day, index) => {
      result.month1.week1.days[index] = {
        locked: index > 0 && !courseProgress.month1.week1.days[index - 1]?.attended,
        completed: day.attended && day.quizSubmitted,
      };
    });
    result.month1.week1.miniTestLocked = !result.month1.week1.days.every(day => day?.completed);
  }

  // Handle Month 1, Project Weeks
  courseProgress.month1?.projectWeek?.forEach((week, index) => {
    result.month1.projectWeeks[index] = {
      locked: index > 0 && !courseProgress.month1.projectWeek[index - 1]?.attended,
      completed: week.attended && week.projectStatus === "accepted",
    };
  });

  // Handle Month 2 Weeks
  courseProgress.month2?.weeks?.forEach((week, index) => {
    result.month2.weeks[index] = {
      locked: index > 0 && !courseProgress.month2.weeks[index - 1]?.attended,
      completed: week.attended && week.assignmentStatus === "accepted",
    };
  });

  // Week 5 Test
  if (courseProgress.month2?.week5_test) {
    result.month2.week5Test.locked = !result.month2.weeks.every(week => week?.completed);
  }
  console.log(result)
  return result;
};

// Component to render a single day
const DayItem = ({ dayStatus, monthIndex, weekIndex, dayIndex }) => {
  const icon = dayStatus.completed ? <FaCircleCheck size={15} /> :
               dayStatus.locked ? <BiLock size={15} /> : <FaCircleHalfStroke size={15} />;

  return (
    <Link to={dayStatus.locked ? "#" : "modulevideo"}>
      <li className={`w-full border-b-2 pl-3 p-2 flex justify-between ${dayStatus.locked ? 'opacity-50' : ''}`}>
        {monthIndex}.{weekIndex}.{dayIndex + 1} Day {dayIndex + 1}
        {icon}
      </li>
    </Link>
  );
};

// Component to render a week
const WeekItem = ({ week, weekStatus, isExpanded, toggleWeek, children }) => {
  const icon = weekStatus.completed ? <FaCircleCheck size={20} /> :
               weekStatus.locked ? <BiLock size={20} /> : <FaCircleHalfStroke size={20} />;

  return (
    <div className="mb-4">
      <li
        onClick={!weekStatus.locked ? toggleWeek : null}
        className={`cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ${weekStatus.locked ? 'opacity-50' : ''}`}
      >
        {children}
        {icon}
      </li>
      {isExpanded && !weekStatus.locked && (
        <ul className="border-2 py-2 space-y-3 text-sm rounded-xl shadow-2xl font-medium">
          {week.days?.map((day, dayIndex) => (
            <DayItem
              key={dayIndex}
              dayStatus={weekStatus.days[dayIndex]}
              monthIndex={1}
              weekIndex={1}
              dayIndex={dayIndex}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

// Component to render a month
const MonthItem1 = ({ month, monthStatus, expandedSections, toggleSection, monthIndex }) => {
  const isExpanded = expandedSections[`month${monthIndex}`];
  return (
    <div className="mt-5">
      <h3
        className="text-lg text-white bg-secondary p-3 rounded-xl flex justify-between cursor-pointer"
        onClick={() => toggleSection(`month${monthIndex}`)}
      >
        Month {monthIndex + 1} <GoDot className="my-auto" size={22} />
      </h3>
      {isExpanded && (
        <ul className="pl-5 py-2 space-y-4">
            <WeekItem
              week={month.week1}
              weekStatus={monthStatus.weeks[0]}
              isExpanded={expandedSections[`month${0}_week${0}`]}
              toggleWeek={() => toggleSection(`month${0}_week${0}`)}
            >
              Week {weekIndex + 1}
            </WeekItem>
        </ul>
      )}
    </div>
  );
};
const MonthItem2 = ({ month, monthStatus, expandedSections, toggleSection, monthIndex }) => {
  const isExpanded = expandedSections[`month${monthIndex}`];
  return (
    <div className="mt-5">
      <h3
        className="text-lg text-white bg-secondary p-3 rounded-xl flex justify-between cursor-pointer"
        onClick={() => toggleSection(`month${monthIndex}`)}
      >
        Month {monthIndex + 1} <GoDot className="my-auto" size={22} />
      </h3>
      {isExpanded && (
        <ul className="pl-5 py-2 space-y-4">
          {month.weeks?.map((week, weekIndex) => (
            <WeekItem
              key={weekIndex}
              week={week}
              weekStatus={monthStatus.weeks[weekIndex]}
              isExpanded={expandedSections[`month${monthIndex}_week${weekIndex}`]}
              toggleWeek={() => toggleSection(`month${monthIndex}_week${weekIndex}`)}
            >
              Week {weekIndex + 1}
            </WeekItem>
          ))}
        </ul>
      )}
    </div>
  );
};

const CourseStructure = ({ course, courseProgress }) => {
  const [expandedSections, setExpandedSections] = useState({});
  const lockedStatus = determineLockedStatus(courseProgress);
  console.log(course)
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <p>Author: {course.author}</p>
      <p>Duration: {course.duration} hours</p>
      <p>Certification: {course.certification}</p>

      <MonthItem1
        month={course.month1}
        monthStatus={lockedStatus.month1}
        expandedSections={expandedSections}
        toggleSection={toggleSection}
        monthIndex={0}
      />

      <MonthItem2
        month={course.month2}
        monthStatus={lockedStatus.month2}
        expandedSections={expandedSections}
        toggleSection={toggleSection}
        monthIndex={1}
      />
    </div>
  );
};

export default CourseStructure;
