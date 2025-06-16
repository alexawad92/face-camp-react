// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CampgroundsList from "./CampgroundsList";
import CampgroundDetail from "./CampgroundDetail";
import Register from "./Register";

import Container from "@mui/material/Container";

export default function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campgrounds" element={<CampgroundsList />} />
          <Route path="/campgrounds/:id" element={<CampgroundDetail />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </Container>
  );
}
