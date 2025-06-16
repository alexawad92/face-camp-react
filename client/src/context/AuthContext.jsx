import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext(); // Create the context

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
    loading: true,
  });

  // Check auth status when app loads
  useEffect(() => {
    axios
      .get("/api/check-auth", { withCredentials: true })
      .then((res) => {
        console.log("IN HERE TES" + res.data.user);
        setAuth({
          isAuthenticated: res.data.authenticated,
          user: res.data.user || null,
          loading: false,
        });
      })
      .catch(() => {
        console.log("IN HERE NONONONOO");
        setAuth({ isAuthenticated: false, user: null, loading: false });
      });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the context easily
export const useAuth = () => useContext(AuthContext);
