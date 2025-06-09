import { useEffect, useState } from 'react';
import axios from 'axios';
import CampgroundCard from './CampgroundCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MainHeader from "./MainHeader"

export default function CampgroundsList(){
  const [campgrounds, setCamps] = useState([]);

  useEffect(() => {
    axios.get('/api/campgrounds').then((res) => setCamps(res.data));
  }, []);

  return (
    <div>
    <MainHeader/>
      <Box sx={{
        display:"flex",
        flexWrap:'wrap',
         flexDirection:{xs:"column", md:"row"},
         pt:4,
         alignItems:'center',
         justifyContent:"space-around",
         gap:4}}>
          {campgrounds.map((campground) => (
          <CampgroundCard key={campground._id} campground={campground} />
        ))}
      </Box>      
    </div>
  );
}