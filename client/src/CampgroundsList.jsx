import { useEffect, useState } from 'react';
import axios from 'axios';
import CampgroundCard from './CampgroundCard';
import { Grid, Container, Typography } from '@mui/material';
import MainHeader from './MainHeader';

export default function CampgroundsList() {
  const [campgrounds, setCamps] = useState([]);

  useEffect(() => {
    axios.get('/api/campgrounds')
      .then((res) => setCamps(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <MainHeader />
      {/* <Container sx={{ pt: 1 }}> */}
        {campgrounds.length === 0 ? (
          <Typography variant="h6">No campgrounds found.</Typography>
        ) : (

<Grid container spacing={2}>
 {campgrounds.map((campground) => (
              <Grid
              size={{ xs: 12, md: 6, lg:4 }}
                key={campground._id}
              >
                <CampgroundCard campground={campground} />
              </Grid>
            ))}

</Grid>

          
        )}
      {/* </Container> */}
    </>
  );
}
