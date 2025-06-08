// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EditCamp from './EditCamp';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camps/:id/edit" element={<EditCamp />} />
      </Routes>
    </Router>
  );
}