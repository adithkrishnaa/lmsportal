import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null); // To store user role if applicable
  const [loading, setLoading] = useState(true);
  const [hasNavigated, setHasNavigated] = useState(false); // Prevent multiple navigations
  const navigate = useNavigate();

  useEffect(() => {
    // Set persistence for Firebase Auth
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        // Set up onAuthStateChanged listener
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            const token = await user.getIdTokenResult();
            const role = token?.claims?.role || "student"; // Default to "student"

            setCurrentUser(user);
            setUserRole(role);

            // Ensure navigation happens only once
            if (!hasNavigated) {
              setHasNavigated(true);
              role === "instructor"
                ? navigate("/luctherhomelayout/luctherlogin")
                : navigate("/dashboard");
            }
          } else {
            // User is signed out
            setCurrentUser(null);
            setUserRole(null);

            // Ensure navigation happens only once
            if (!hasNavigated) {
              setHasNavigated(true);
              navigate("/");
            }
          }
          setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
        setLoading(false);
      });
  }, [navigate, hasNavigated]);

  const value = { currentUser, userRole };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only when not loading */}
    </AuthContext.Provider>
  );
};
