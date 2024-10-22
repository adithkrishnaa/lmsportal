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
    fetchCourseProgress(course._id);
  };

  const selectCourse = (courseId) => {
    const course = currentCourses.find((c) => c.courseId === courseId);
    setSelectedCourse(course); // Update the selected course
  };

  const fetchCourseProgress = async (courseId) => {
    try {
      const response = await fetch(
        `https://course-compass-backend-zh7c.onrender.com/course-progress/course/${courseId}`
      );
      if (!response.ok) {
        throw new Error(`Error fetching course progress: ${response.status}`);
      }
      const data = await response.json();
      setCourseProgress(data.progress);
    } catch (error) {
      console.error("Error fetching course progress:", error);
      setCourseProgress(null);
    }
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
        courseProgress,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
