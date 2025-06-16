import { useAuth } from "./context/AuthContext";
import Link from "@mui/material/Link";
import LogoutButton from "./LogoutButton";
export default function Navbar() {
  const { auth } = useAuth();

  return (
    <nav>
      {auth.isAuthenticated ? (
        <>
          <span>Welcome, {auth.user.username}</span>
          <LogoutButton />
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
