import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, CardActions, IconButton } from "@mui/material";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import CampgroundDetail from "./CampgroundDetail";

export default function CampgroundCard({ campground }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // ✅ This must be inside the component
  if (!campground || !campground.title) return null;
  const handleEditClick = () => {
    setOpen(true);
    //navigate(`/campgrounds/${campground._id}`);
  };
  const handleClose = () => {
    console.log("handleClose");
    setOpen(false);
  };

  function getRandomColor() {
    // Range from 50 to 180 to avoid very dark (0) and very bright (255) colors
    const r = Math.floor(Math.random() * 130) + 50;
    const g = Math.floor(Math.random() * 130) + 50;
    const b = Math.floor(Math.random() * 130) + 50;

    return `rgb(${r}, ${g}, ${b})`;
  }
  const [deleteIconColor] = useState(getRandomColor());
  const [avatarIconColor] = useState(getRandomColor());

  return (
    <>
      <Card sx={{ width: "100%", maxWidth: 345, mx: "auto" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: avatarIconColor }} aria-label="campground">
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
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {campground.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Button variant="outlined" onClick={handleEditClick}>
            Info
          </Button>
          <Box sx={{ ml: "auto" }}>
            <Button variant="text" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </Box>
        </CardActions>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          sx={{ width: "100vw" }}
          onClick={handleClose} // to allow model to close if click is within this box (but outside inner one)
        >
          <CampgroundDetail
            campground={campground}
            avatarIconColor={avatarIconColor}
            onClose={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
}
