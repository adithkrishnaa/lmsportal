import { createContext, useState, useContext } from "react";

const CourseContext = createContext();

export const useCourse = () => {
  return useContext(CourseContext);
};

export const CourseProvider = ({ children }) => {
  const [joinedCourse, setJoinedCourse] = useState(null); 

  const joinCourse = (course) => {
    setJoinedCourse(course);
  };

  return (
    <CourseContext.Provider value={{ joinedCourse, joinCourse }}>
      {children}
    </CourseContext.Provider>
  );
};
