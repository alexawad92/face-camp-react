import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
export default function Camp({ campground }) {
     const navigate = useNavigate(); // ✅ This must be inside the component
  if (!campground || !campground.title) return null;
  const handleEditClick = () => {
    navigate(`/camps/${campground._id}/edit`);
  };
   return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10, width: 300 }}>
      <img src={campground.images?.[0]?.url} width="100%" alt="" />
      <h3>{campground.title}</h3>
      <p>${campground.price}/night</p>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
}
