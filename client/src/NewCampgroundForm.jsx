import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Avatar from "@mui/material/Avatar";
import { InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import axios from "axios";
export default function NewCampgroundForm() {
  const navigate = useNavigate();
  // const [preview, setPreview] = useState(null);
  const { setAuth } = useAuth(); // <-- get setAuth from context here
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    images: [],
    price: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "title") {
      console.log("setting title");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <Container maxWidth="sm">
      <Paper elevation={5} sx={{ padding: 4, mt: 8, height: "60%" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Create New Campground
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid flexDirection={"column"} display={"flex"} container spacing={5}>
            <Grid item>
              <TextField
                name="title"
                type="text"
                label="title"
                fullWidth
                required
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <TextField
                fullWidth
                type="file"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </Grid>
            <Grid
              flexDirection={"row"}
              display={"flex"}
              container
              spacing={3}
              alignItems={"center"}
            >
              <Grid item size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">/night</InputAdornment>
                      ),
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                name="description"
                label="Description"
                multiline
                required
                minRows={5}
                fullWidth
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" fullWidth>
                Create
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
