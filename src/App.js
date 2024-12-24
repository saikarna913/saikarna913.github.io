import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { Box, Typography, IconButton, AppBar, Toolbar, Link, Grid } from "@mui/material";
import Brightness2Icon from "@mui/icons-material/Brightness2"; // Moon Icon
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Sun Icon
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./App.css"; 

import IITGNPage from './pages/IITGN'; 
import BlogsPage from './pages/Blogs'; 
import ResumePage from './pages/Resume';

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: { default: "#f8f9fa", paper: "#ffffff" },
    text: { primary: "#000000", secondary: "#4f4f4f" },
    primary: { main: "#1e88e5" }, // Light blue accent
  },
  typography: { fontFamily: "'Inter', sans-serif" },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#121212", paper: "#1e1e1e" },
    text: { primary: "#ffffff", secondary: "#bbbbbb" },
    primary: { main: "#64b5f6" }, // Slightly lighter blue accent
  },
  typography: { fontFamily: "'Inter', sans-serif" },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh", // Full page height
          backgroundColor: (theme) => theme.palette.background.default,
          color: (theme) => theme.palette.text.primary,
        }}
      >
        <Router>
          <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
              {/* Navigation Links */}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Karna Pardheev
              </Typography>
              <Box>
                <Link component={RouterLink} to="/" sx={{ margin: "0 16px", textDecoration: "none", color: "inherit" }}>
                  Home
                </Link>
                <Link component={RouterLink} to="/iitgn" sx={{ margin: "0 16px", textDecoration: "none", color: "inherit" }}>
                  IITGN
                </Link>
                <Link component={RouterLink} to="/blogs" sx={{ margin: "0 16px", textDecoration: "none", color: "inherit" }}>
                  Blogs
                </Link>
                <Link component={RouterLink} to="/resume" sx={{ margin: "0 16px", textDecoration: "none", color: "inherit" }}>
                  Resume
                </Link>
              </Box>

              {/* Social Icons */}
              <Box>
                <IconButton href="https://github.com/saikarna913" target="_blank" color="inherit">
                  <GitHubIcon />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/pardheev-sai-karna-a47906223" target="_blank" color="inherit">
                  <LinkedInIcon />
                </IconButton>
                <IconButton onClick={toggleDarkMode} color="inherit">
                  {darkMode ? <WbSunnyIcon /> : <Brightness2Icon />}
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>

          {/* Main Content */}
          <Box sx={{ padding: "32px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <Routes>
              <Route path="/" element={
                <>
                  <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
                    About Me
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "background.paper",
                      borderRadius: "8px",
                      padding: "24px",
                      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                      textAlign: "left",
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    {/* Avatar with profile image */}
                    <img alt="Karna Pardheev"   
                    src={`${process.env.PUBLIC_URL}/profile.jpeg`} 
                    style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        marginBottom: '16px',
                      }}
                    />
                    <Typography variant="h6" gutterBottom sx={{ fontFamily: "'Fira Code', monospace" }}>
                      👋 Hi there!
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: "1.6", color: "text.secondary", marginBottom: "16px" }}>
                      I am <strong>Karna Pardheev</strong>, an AI and Open Source enthusiast with a background in Computer Science Engineering. I specialize in building scalable applications, contributing to open-source projects, and crafting intelligent AI solutions.
                    </Typography>

                    <Box
                      sx={{
                        backgroundColor: darkMode ? "#1e1e1e" : "#f5f5f5",
                        padding: "16px",
                        borderRadius: "6px",
                        fontFamily: "'Fira Code', monospace",
                        fontSize: "0.9rem",
                        color: darkMode ? "#f5f5f5" : "#333333",
                        overflowX: "auto",
                        width: '100%',
                      }}
                    >
                      {`About me:
const karna_Pardheev_Sai = {
  profession: "Software Developer & Open Source Contributor",
  skills: ["C++", "Python", "Machine Learning", "HTML","CSS"],
  hobbies: ["Coding", "Exploring new tech", "Swimming"],
};`}
                    </Box>

                    <Box sx={{ marginTop: "32px", width: '100%' }}>
                      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
                        Professional Contributions
                      </Typography>
                      <Typography variant="body1" sx={{ lineHeight: "1.6", color: "text.secondary", marginBottom: "16px" }}>
                        Check out some of my professional contributions and open-source projects on GitHub:
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Link href="https://github.com/saikarna913/my-project" target="_blank" sx={{ textDecoration: "none" }}>
                            <Typography variant="body1" sx={{ color: darkMode ? "#64b5f6" : "#1e88e5" }}>
                              My Project - A description of what this project is about.
                            </Typography>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link href="https://github.com/saikarna913/another-project" target="_blank" sx={{ textDecoration: "none" }}>
                            <Typography variant="body1" sx={{ color: darkMode ? "#64b5f6" : "#1e88e5" }}>
                              Another Project - A description of what this project is about.
                            </Typography>
                          </Link>
                        </Grid>
                        {/* Add more project links as needed */}
                      </Grid>
                    </Box>
                  </Box>
                </>
              } />
              <Route path="/iitgn" element={<IITGNPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
