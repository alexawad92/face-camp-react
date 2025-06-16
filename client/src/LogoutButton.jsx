import axios from "axios";
import { useAuth } from "./context/AuthContext";

const LogoutButton = () => {
  const { setAuth } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.post("/api/logout", {}, { withCredentials: true });
      setAuth({ isAuthenticated: false, user: null, loading: false });
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
