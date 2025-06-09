import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CampgroundCard({ campground }) {
     const navigate = useNavigate(); // ✅ This must be inside the component
  if (!campground || !campground.title) return null;
  const handleEditClick = () => {
    navigate(`/campgrounds/${campground._id}`);
  };
  function getRandomColor() {
 // Range from 50 to 180 to avoid very dark (0) and very bright (255) colors
  const r = Math.floor(Math.random() * 130) + 50;
  const g = Math.floor(Math.random() * 130) + 50;
  const b = Math.floor(Math.random() * 130) + 50;
  
  return `rgb(${r}, ${g}, ${b})`;
}
   return (
<Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: getRandomColor() }} aria-label="campground">
           {campground.title[0]}
          </Avatar>
        }
       
        title={campground.title}
        subheader={campground.location}
      />
      <CardMedia
        component="img"
        height="194"
        image={campground.images[0].url}
        alt="campground image"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {campground.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon  sx={{ fontSize:"inherit",color:  getRandomColor()  }}/>
      </IconButton>
      </CardActions>
      </Card>
  );
}
