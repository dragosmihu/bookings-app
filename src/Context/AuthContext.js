import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const storedFullName = localStorage.getItem("fullName");

    if (storedIsLoggedIn === "true" && storedFullName) {
      setIsLoggedIn(true);
      setFullName(storedFullName);
    }
  }, []);

  const logIn = (name) => {
    setIsLoggedIn(true);
    setFullName(name);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("fullName", name);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setFullName("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("fullName");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, fullName, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
