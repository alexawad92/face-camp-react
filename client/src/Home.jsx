// Home.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import Camp from './Camp';

export default function Home() {
  const [campgrounds, setCamps] = useState([]);

  useEffect(() => {
    axios.get('/api/campgrounds').then((res) => setCamps(res.data));
  }, []);

  return (
    <div>
      <h2>List of Camps</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {campgrounds.map((campground) => (
          <Camp key={campground._id} campground={campground} />
        ))}
      </div>
    </div>
  );
}