import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, CardActions, Container, IconButton } from '@mui/material';
import MainHeader from "./MainHeader"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import axios from "axios";
import { blue } from "@mui/material/colors";

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
    <>
 <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',   // horizontally center
        alignItems: 'center',       // vertically center
        height: '100vh',            // full viewport height
      }}
    >    
  <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue}} aria-label="campground">
           {campground.title[0]}
          </Avatar>
        }
       
        title={campground.title}
        subheader={campground.location}
      />
          <Box sx={{ position: 'relative', width: '100%', maxWidth: 600, mx: 'auto' }}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={campground.images[0].url}
          alt={`Campground Image ${0 + 1}`}
        />
      </Card>

      {/* Overlay Navigation Buttons */}
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          left: 16,
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.5)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          right: 16,
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.5)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {campground.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button variant="outlined" >Info</Button>
        <Box sx={{ ml: 'auto' }}>
          <Button variant="text" startIcon={<DeleteIcon />}>
            Delete
          </Button>
      </Box>
      </CardActions>
      </Card>

  
    </Box>
      </>
  );
}
