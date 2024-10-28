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

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
