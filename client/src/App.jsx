// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CampgroundsList from "./CampgroundsList";
import CampgroundDetail from "./CampgroundDetail";
import Register from "./Register";
import Login from "./Login";
import Navbar from "./Navbar";
import NewCampgroundForm from "./NewCampgroundForm";
import Container from "@mui/material/Container";

export default function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campgrounds" element={<CampgroundsList />} />
          <Route path="/campgrounds/new" element={<NewCampgroundForm />} />
          <Route path="/campgrounds/:id" element={<CampgroundDetail />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Container>
    </Router>
  );
}
