import { createContext, useState, useContext } from "react";

const CourseContext = createContext();

export const useCourse = () => {
  return useContext(CourseContext);
};

export const CourseProvider = ({ children }) => {
  const [joinedCourse, setJoinedCourse] = useState(null);
  const [currentCourses, setCurrentCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null); // Add state for the selected course
  const [courseProgress, setCourseProgress] = useState(null);

  const joinCourse = (course) => {
    setJoinedCourse(course);
  };

  const selectCourse = (courseId) => {
    const course = currentCourses.find((c) => c.courseId === courseId);
    setSelectedCourse(course); // Update the selected course
  };

  return (
    <CourseContext.Provider
      value={{
        joinedCourse,
        joinCourse,
        currentCourses,
        setCurrentCourses,
        selectedCourse,
        selectCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
