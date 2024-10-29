import { createContext, useState, useContext } from "react";
import { auth } from "../firebase";

const CourseContext = createContext();

export const useCourse = () => {
  return useContext(CourseContext);
};

export const CourseProvider = ({ children }) => {
  const [joinedCourse, setJoinedCourse] = useState(null);
  const [currentCourses, setCurrentCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null); // Add state for the selected course
  const [courseProgress, setCourseProgress] = useState(null);

  // Function to join a course using the PUT request
  const joinCourse = async (course) => {
    const currentUser = auth.currentUser; // Get the current user from Firebase auth

    if (!currentUser) {
      console.error("No user is currently signed in");
      return;
    }

    try {
      const token = await currentUser.getIdToken(); // Fetch the token for authorization

      const response = await fetch(
        `https://course-compass-backend-zh7c.onrender.com/api/student/enroll-course/course/${course._id}`,
        {
          method: "PUT", // Use PUT method to enroll the course
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error enrolling course: ${response.status}`);
      }

      const data = await response.json();
      console.log("Successfully enrolled in course:", data);

      setJoinedCourse(course); // Set the joined course in state
      fetchCourseProgress(course._id); // Fetch the progress for the enrolled course
    } catch (error) {
      console.error("Error enrolling in course:", error);
    }
  };

  const selectCourse = (courseId) => {
    const course = currentCourses.find((c) => c.courseId === courseId);
    setSelectedCourse(course); // Update the selected course
  };

  const fetchCourseProgress = async (courseId) => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      console.error("No user is currently signed in");
      return;
    }

    try {
      const token = await currentUser.getIdToken();
      const response = await fetch(
        `https://course-compass-backend-zh7c.onrender.com/api/student/course-progress/course/${courseId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server response:", errorData); // Log server response
        throw new Error(`Error fetching course progress: ${response.status}`);
      }

      const data = await response.json();
      setCourseProgress(data.progress);
    } catch (error) {
      console.error("Error fetching course progress:", error);
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
