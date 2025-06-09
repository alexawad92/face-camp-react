import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CampgroundDetail() {
  const { id } = useParams(); // gets the :id from the URL
  const [campground, setCampground] = useState(null);

  function temp(data){
    console.log("in data");
  }

  useEffect(() => {
    console.log("useEffect");
    axios.get(`/api/campgrounds/${id}/`).then(res => {
      setCampground(res.data);
    });
  }, [id]);

  if (!campground) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Campground: {campground.title}</h2>
      {/* You can now render a form pre-filled with campground.title, price, etc. */}
    </div>
  );
}
