import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { GoDot } from "react-icons/go";
import { FaCircleHalfStroke, FaCircleCheck } from "react-icons/fa6";
import { BiLock } from "react-icons/bi";

const CourseStructure = ({ course, courseProgress }) => {

    const determineLockedStatus = (courseProgress) => {
        const result = {
          month1: {
            week1: { locked: false, days: [] },
            projectWeeks: []
          },
          month2: {
            weeks: [],
            week5Test: { locked: true }
          }
        };
      
        // Month 1, Week 1
        if (courseProgress.month1 && courseProgress.month1.week1) {
          courseProgress.month1.week1.days.forEach((day, index) => {
            result.month1.week1.days[index] = {
              locked: index > 0 && !courseProgress.month1.week1.days[index - 1].attended,
              completed: day.attended && day.quizSubmitted
            };
          });
      
          // Lock miniTest if not all days are completed
          result.month1.week1.miniTestLocked = !result.month1.week1.days.every(day => day.completed);
        }
      
        // Month 1, Project Weeks
        if (courseProgress.month1 && courseProgress.month1.projectWeek) {
          courseProgress.month1.projectWeek.forEach((week, index) => {
            result.month1.projectWeeks[index] = {
              locked: index > 0 && !courseProgress.month1.projectWeek[index - 1].attended,
              completed: week.attended && week.projectStatus === "accepted"
            };
          });
        }
      
        // Month 2
        if (courseProgress.month2) {
          courseProgress.month2.weeks.forEach((week, index) => {
            result.month2.weeks[index] = {
              locked: index > 0 && !courseProgress.month2.weeks[index - 1].attended,
              completed: week.attended && week.assignmentStatus === "accepted"
            };
          });
      
          // Week 5 Test
          result.month2.week5Test.locked = !result.month2.weeks.every(week => week.completed);
        }
        console.log(result)
        return result;
      };

  const [expandedSections, setExpandedSections] = useState({});
  const lockedStatus = determineLockedStatus(courseProgress);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderDay = (day, monthIndex, weekIndex, dayIndex) => {
    const dayStatus = lockedStatus.month1.week1.days[dayIndex];
    const icon = dayStatus.completed ? <FaCircleCheck className="my-auto" size={15} /> :
                 dayStatus.locked ? <BiLock size={15} /> : <FaCircleHalfStroke size={15} />;

    return (
      <Link to={dayStatus.locked ? "#" : "modulevideo"} key={dayIndex}>
        <li className={`w-full border-b-2 pl-3 p-2 flex justify-between ${dayStatus.locked ? 'opacity-50' : ''}`}>
          {monthIndex}.{weekIndex}.{dayIndex + 1} Day {dayIndex + 1}
          {icon}
        </li>
      </Link>
    );
  };

  const renderWeek = (week, monthIndex, weekIndex, isProjectWeek = false) => {
    const weekKey = `month${monthIndex + 1}_week${weekIndex + 1}`;
    const isExpanded = expandedSections[weekKey];
    const toggleWeek = () => toggleSection(weekKey);

    let weekStatus;
    if (isProjectWeek) {
      weekStatus = lockedStatus.month1.projectWeeks[weekIndex];
    } else if (monthIndex === 0) {
      weekStatus = { locked: false }; // Week 1 is always unlocked
    } else {
      weekStatus = lockedStatus.month2.weeks[weekIndex];
    }

    const icon = weekStatus.completed ? <FaCircleCheck /> :
                 weekStatus.locked ? <BiLock size={20} /> : <FaCircleHalfStroke />;

    return (
      <div key={weekIndex} className="mb-4">
        <li
          onClick={weekStatus.locked ? null : toggleWeek}
          className={`cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ${weekStatus.locked ? 'opacity-50' : ''}`}
        >
          {isProjectWeek ? `Project Week ${weekIndex + 1}` : `Week ${weekIndex + 1}`}
          {icon}
        </li>
        {isExpanded && !weekStatus.locked && (
          <ul className="border-2 py-2 space-y-3 text-sm rounded-xl shadow-2xl font-medium">
            {week.day && week.day.map((day, dayIndex) => renderDay(day, monthIndex, weekIndex, dayIndex))}
            {week.miniTest && (
              <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                Mini Test
                {lockedStatus.month1.week1.miniTestLocked ? <BiLock size={15} /> : <FaCircleHalfStroke size={15} />}
              </li>
            )}
            {isProjectWeek && week.smallTest && (
              <li className="w-full border-b-2 pl-3 p-2 flex justify-between">
                Small Test
                <FaCircleHalfStroke className="my-auto" size={15} />
              </li>
            )}
          </ul>
        )}
      </div>
    );
  };

  const renderMonth = (month, monthIndex) => {
    const monthKey = `month${monthIndex + 1}`;
    const isExpanded = expandedSections[monthKey];
    const toggleMonth = () => toggleSection(monthKey);

    return (
      <div key={monthIndex} className="mt-5">
        <h3
          className="text-lg text-white bg-secondary p-3 rounded-xl flex justify-between cursor-pointer"
          onClick={toggleMonth}
        >
          Month {monthIndex + 1} <GoDot className="my-auto" size={22} />
        </h3>
        {isExpanded && (
          <ul className="pl-5 py-2 space-y-4">
            {monthIndex === 0 && month.week1 && renderWeek(month.week1, monthIndex, 0)}
            {monthIndex === 0 && month.projectWeeks && month.projectWeeks.map((week, index) => 
              renderWeek(week, monthIndex, index + 1, true)
            )}
            {monthIndex === 1 && month.weeks && month.weeks.map((week, index) => 
              renderWeek(week, monthIndex, index)
            )}
            {monthIndex === 1 && month.week5_test && (
              <li className={`cursor-pointer p-3 border-2 rounded-xl shadow-xl flex justify-between font-medium ${lockedStatus.month2.week5Test.locked ? 'opacity-50' : ''}`}>
                Week 5 Test
                {lockedStatus.month2.week5Test.locked ? <BiLock size={20} /> : <FaCircleHalfStroke />}
              </li>
            )}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <p>Author: {course.author}</p>
      <p>Duration: {course.duration} hours</p>
      <p>Certification: {course.certification}</p>
      {renderMonth(course.month1, 0)}
      {renderMonth(course.month2, 1)}
    </div>
  );
};

export default CourseStructure;