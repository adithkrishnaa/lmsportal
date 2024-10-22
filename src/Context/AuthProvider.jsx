import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase'; // Firebase auth setup
import { setPersistence, browserLocalPersistence } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// Create Auth Context
const AuthContext = createContext();

// Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // To avoid rendering until auth status is resolved
  const navigate = useNavigate();

  useEffect(() => {
    // Set Firebase persistence to browser local (persistent even after page reload)
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        // Listen for authentication state changes
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            setCurrentUser(user);
          } else {
            navigate('/login'); // Redirect to login if no user is found
          }
          setLoading(false); // Loading complete once auth is checked
        });

        return () => unsubscribe(); // Clean up the listener on component unmount
      })
      .catch(error => {
        console.error('Error setting persistence:', error);
      });
  }, [navigate]);

  const value = { currentUser };

  // Only render children if not loading (auth status resolved)
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
