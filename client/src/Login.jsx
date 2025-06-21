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
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const { setAuth } = useAuth(); // <-- get setAuth from context here
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const response = await axios.post("/api/login", formData, {
      withCredentials: true,
    });
    console.log(response.data.message);
    setAuth({
      isAuthenticated: true,
      user: response.data.user,
      loading: false,
    });
    navigate(`/campgrounds`);
    // Add your form submission logic here (e.g., API call)
  };
  return (
    <Container maxWidth="sm">
      <Paper elevation={5} sx={{ padding: 4, mt: 8, height: "50vh" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid flexDirection={"column"} display={"flex"} container spacing={3}>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                Username
              </Typography>
              <TextField
                name="username"
                type="text"
                fullWidth
                required
                value={formData.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                Password
              </Typography>
              <TextField
                name="password"
                type="password"
                fullWidth
                required
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
