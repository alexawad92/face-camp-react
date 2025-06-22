import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Stack from "@mui/material/Stack";
import Map from "./Map/Map";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 50,
  height: "100vh",
};

export default function CampgroundDetail({
  campground,
  avatarIconColor,
  onClose,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handleRightArrowClick() {
    if (currentImageIndex >= campground.images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  function handleLeftArrowClick() {
    console.log(currentImageIndex);
    setCurrentImageIndex((prevValue) => {
      console.log(prevValue);
      prevValue -= 1;
      if (prevValue < 0) {
        return campground.images.length - 1;
      } else {
        return prevValue;
      }
    });
  }

  return (
    <>
      <Box
        style={style}
        display={"flex"}
        bgcolor={"background.paper"}
        flexDirection="column"
        onClick={(e) => e.stopPropagation()} // to prevent model from closing if click is within this box
        sx={{
          width: { xs: "100vw", sm: 600, md: 900, lg: 1100 },
          maxHeight: "90vh",
          overflowY: "auto", // scroll if content too tall
        }}
      >
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            margin="10px 0"
            height={"80px"}
          >
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  bgcolor: avatarIconColor,
                  marginRight: 1,
                }}
                aria-label="recipe"
              >
                {campground.title[0]}
              </Avatar>

              <Box display="flex" flexDirection="column">
                <Typography variant="h6" sx={{ margin: 0 }}>
                  {campground.title}
                </Typography>
                <Box display={"flex"}>
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.5, marginRight: "2px" }}
                  >
                    {campground.location}.
                  </Typography>
                  <Typography
                    display={"flex"}
                    alignItems={"center"}
                    variant="body2"
                    sx={{ opacity: 0.5 }}
                  >
                    <AttachMoneyIcon
                      fontSize="inherit"
                      sx={{ marginRight: "-2px" }}
                    />{" "}
                    {campground.price}/Day
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Button variant="text" onClick={onClose}>
              Close
            </Button>
          </Box>
          <Box
            position="relative"
            display={"flex"}
            boxShadow={1}
            sx={{
              justifyContent: "center",
            }}
          >
            <img
              srcSet={`${campground.images[currentImageIndex].url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${campground.images[currentImageIndex].url}?w=164&h=164&fit=crop&auto=format`}
              alt={campground.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "50vh",
                objectFit: "contain",
              }}
            />
            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                left: 15,
                transform: "translateY(-50%)",
                color: "white",
                backgroundColor: "rgba(0,0,0,0.3)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
              }}
              onClick={handleRightArrowClick}
            >
              <ArrowBackIosNewIcon />
            </IconButton>

            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                right: 15,
                transform: "translateY(-50%)",
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
              }}
              onClick={handleLeftArrowClick}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
          <Container>
            <Box my={4}>
              <Typography variant="h5" gutterBottom align="center">
                Description
              </Typography>
              <Typography variant="body1">{campground.description}</Typography>
            </Box>
            <Divider sx={{ margin: "10px 0" }} />
            <Box sx={{ height: 300, width: "100%" }}>
              <Typography variant="h5" gutterBottom align="center">
                Map Location
              </Typography>
              <Map campground={campground} />
            </Box>
            <Divider sx={{ margin: "10px 0" }} />
            <Box sx={{ height: 100, width: "100%" }}>
              <Typography variant="h5" gutterBottom align="center">
                Reviews
              </Typography>
              <Typography>{campground.description}</Typography>
            </Box>
          </Container>
        </Container>
      </Box>
    </>
  );
}
