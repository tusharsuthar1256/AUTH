import React, { createContext, useEffect, useState } from "react";
import { account } from "../Appwrite/config";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    // Get the user from local storage if available
   
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await account.get();
        console.log("User logged in:", user); // Debugging output
        setCurrentUser(user);
        // Save user to local storage
      } catch (error) {
        console.log("No user logged in:", error); // Debugging output
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  const signup = async (email, password, userName) => {
    try {
      await account.create(ID.unique(), email, password, userName);
      const user = await account.get();
      setCurrentUser(user);
    } catch (error) {
      console.error("Signup failed:", error.message);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      await account.createSession(email, password);
      const user = await account.get();
      setCurrentUser(user);
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setCurrentUser(false);
    } catch (error) {
      console.error("Logout failed:", error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, loading,setCurrentUser , signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
