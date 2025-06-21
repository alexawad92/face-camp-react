import { useAuth } from "./context/AuthContext";
import Link from "@mui/material/Link";
import LoginButton from "./LoginButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate(); // ✅ This must be inside the component
  const { auth, setAuth } = useAuth();
  function handleLogin() {
    navigate("/login");
  }
  async function handleLogout() {
    try {
      const response = await axios.post("/api/logout", null, {
        withCredentials: true, // <- moved here
      });

      console.log(response.data.message);

      // Clear client-side auth state
      setAuth({
        isAuthenticated: false,
        user: null,
        loading: false,
      });
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  }
  function handleRegister() {
    navigate("/register");
  }
  console.log("here");

  return (
    <nav>
      {auth.isAuthenticated ? (
        <>
          <span>Welcome, {auth.user.username}</span>
          <LoginButton text="Logout" OnClick={handleLogout} />
        </>
      ) : (
        <>
          <LoginButton text="Login" OnClick={handleLogin} />
          <LoginButton text="Register" OnClick={handleRegister} />

          {/* <Link to="/login">Login</Link>
          <Link to="/register">Register</Link> */}
        </>
      )}
    </nav>
  );
}
