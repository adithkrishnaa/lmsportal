import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

import {
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";


const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasNavigated, setHasNavigated] = useState(false); // Prevent multiple navigations
  const navigate = useNavigate();

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            const token = await user.getIdTokenResult();
            const role = token?.claims?.role || "student";

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
            if (!hasNavigated) {
              setHasNavigated(true);
              navigate("/");
            }
          }
          setLoading(false);
        });

        return () => unsubscribe();
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
        setLoading(false);
      });
  }, [navigate, hasNavigated]);

  const value = { currentUser, userRole };

  const [userRole, setUserRole] = useState(null); // To store user role if applicable
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set persistence for Firebase Auth
    setPersistence(auth, browserLocalPersistence).catch((error) => {
      console.error("Error setting persistence:", error);
    });

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        // Optionally get user role from claims or your database
        const token = await user.getIdTokenResult();
        const role = token?.claims?.role || "student"; // Default to "student"
        setUserRole(role);
      } else {
        // User is signed out
        setCurrentUser(null);
        setUserRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const value = { currentUser, userRole }; // Expose user role if needed


  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only when not loading */}
    </AuthContext.Provider>
  );
};
