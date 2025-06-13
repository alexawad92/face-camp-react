import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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
import Stack from "@mui/material/Stack";
import Map from "./Map/Map";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 800,
  bgcolor: "background.paper",
  boxShadow: 15,
  p: 4,
};

export default function CampgroundDetail({
  campground,
  avatarIconColor,
  onClose,
}) {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifySelf={"center"}
        height={"100vh"}
      >
        <Card
          sx={{
            maxHeight: "90vh",
            width: { xs: "90vw", sm: 600, md: 800, lg: 1200 }, // responsive widths
            maxWidth: "100%", // never overflow viewport width
            display: "flex",
            flexDirection: "column",
            bgcolor: "pink",
            height: "1000px",
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: avatarIconColor }} aria-label="recipe">
                {campground.title[0]}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={campground.title}
            subheader={campground.location}
          />
          <Box
            display="grid"
            sx={{
              gridTemplateColumns: {
                sm: "1fr", // 1 column on extra-small (mobile)
                md: "1fr 1fr", // 2 columns on small screens and up
              },
              overflowY: "auto",
              flexGrow: 1,
              maxHeight: 500, // limit height
            }}
            gap={1}
            margin={0.5}
          >
            <Box sx={{ gridRow: "span 2", bgcolor: "lightblue" }}>
              <ImageList
                // sx={{ sm: 600, md: 800, lg: 1200 }}
                cols={1}
                rowHeight={300}
              >
                {campground.images.map((image) => (
                  <ImageListItem key={image.url}>
                    <img
                      // width={{ sm: 600, md: 500 }}
                      srcSet={`${image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${image.url}?w=164&h=164&fit=crop&auto=format`}
                      alt="d"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
            <Box sx={{ bgcolor: "black" }}>ONEBOX</Box>
            <Box sx={{ bgcolor: "lightblue" }}>TWOBOX</Box>
          </Box>
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon
                onClick={() => {
                  onClose();
                }}
              />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

{
  /* <Grid container spacing={2}>
        <Grid item size={{ xs: 12, lg: 4 }}>
          Left (full width on small, half on medium+)
        </Grid>
        <Grid item size={{ xs: 12, lg: 4 }}>
          Right (same behavior)
        </Grid>
        <Grid item size={{ xs: 12, lg: 4 }}>
          Left (full width on small, half on medium+)
        </Grid>
        <Grid item size={{ xs: 12, lg: 4 }}>
          Right (same behavior)
        </Grid>
        <Grid item size={{ xs: 12, lg: 4 }}>
          Right (same behavior)
        </Grid>
      </Grid> */
}

{
  /* <Box
        display="grid"
        gridTemplateColumns="1fr 2fr 1fr"
        gridAutoRows="150px"
        gap={2}
      >
        <Box sx={{ gridRow: "span 2", bgcolor: "lightblue" }}>Spans 2 rows</Box>
        <Box sx={{ bgcolor: "lightgreen" }}>Item 2</Box>
        <Box sx={{ bgcolor: "lightcoral" }}>Item 3</Box>
        <Box sx={{ bgcolor: "lightgoldenrodyellow" }}>Item 4</Box>
        <Box sx={{ bgcolor: "lightpink" }}>Item 5</Box>
        <Box sx={{ bgcolor: "lightsalmon" }}>Item 6</Box>
      </Box> */
}

{
  /* <Box sx={style}>
        <Typography variant="h4">{campground.title}</Typography>
        <Box>
          <img
            srcSet={`${campground.images[0].url}`}
            src={`${campground.images[0].url}`}
            alt="image"
            width={800}
            loading="lazy"
          />
          <IconButton
            sx={{
              position: "absolute",
              top: "30%",
              left: 35,
              transform: "translateY(-50%)",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.3)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            sx={{
              position: "absolute",
              top: "30%",
              right: 35,
              transform: "translateY(-50%)",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box> */
}

{
  /* <ImageList
                sx={{ width: 500, height: 450 }}
                cols={1}
                rowHeight={164}
              >
                {campground.images.map((image) => (
                  <ImageListItem key={image.url}>
                    <img
                      srcSet={`${image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${image.url}?w=164&h=164&fit=crop&auto=format`}
                      alt="d"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList> */
}
