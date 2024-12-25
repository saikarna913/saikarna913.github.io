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
                Karna Pardheev Sai
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
                    <Typography
                    variant="body1"
                    sx={{ lineHeight: "1.6", color: "text.secondary", marginBottom: "16px" }}
                  >
                    I am <strong>Karna Pardheev Sai</strong>,
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
    width: "100%",
    whiteSpace: "pre", // This ensures the text respects newlines and spacing
  }}
>
  {`const karna_Pardheev_Sai = {
  <strong>profession: "Software Developer",
  skills: ["C++", "Python", "Machine Learning", "HTML", "CSS"],
  hobbies: ["Coding", "Exploring new tech", "Swimming"],
  about: "A passionate software developer with a strong foundation in problem-solving, data structures, and algorithms. 
  I enjoy contributing to open-source projects, building innovative solutions, and constantly exploring new technologies."
};`}
</Box>


                  <Box sx={{ marginTop: "32px", width: "100%" }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", marginBottom: "16px" }}
                    >
                      About Me
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: "1.6", color: "text.secondary", marginBottom: "16px" }}
                    >
                      I am Karna Pardheev Sai, a highly motivated software developer and open-source contributor. I specialize in C++, Python, and Machine Learning, with hands-on experience in developing applications and exploring cutting-edge technologies. My passion lies in solving challenging problems, contributing to impactful projects, and continuously improving my skills.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: "1.6", color: "text.secondary", marginBottom: "16px" }}
                    >
                      I am skilled in designing efficient solutions using modern programming paradigms, and I have experience working on both front-end and back-end technologies like HTML and CSS. Beyond programming, I enjoy swimming and learning about emerging trends in technology.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: "1.6", color: "text.secondary", marginBottom: "16px" }}
                    >
                      My goal is to contribute to the tech community by building solutions that solve real-world problems and empower others through knowledge sharing. I strongly believe in continuous learning and always strive to explore, experiment, and expand my skillset.
                    </Typography>
                  </Box>


                  </Box>
                  <Box sx={{ marginTop: "32px", width: "100%" }}>
  {/* Section Title */}
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      marginBottom: "16px",
      textAlign: "center",
      color: darkMode ? "#ffffff" : "#333333",
    }}
  >
    LeetCode Stats
  </Typography>

  {/* LeetCode Stats Box */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: darkMode ? "#1E1E1E" : "#F5F5F5",
      padding: "24px",
      borderRadius: "12px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    }}
  >
    {/* Left Side: Stats Details */}
    <Box sx={{ marginRight: "24px", textAlign: "left" }}>
      <Typography
        variant="body1"
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
          color: darkMode ? "#ffffff" : "#333333",
          marginBottom: "12px",
        }}
      >
        🏆 Questions Solved:
        <strong style={{ marginLeft: "8px", color: "#4CAF50" }}>450</strong>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
          color: darkMode ? "#ffffff" : "#333333",
        }}
      >
        📊 Rank:
        <strong style={{ marginLeft: "8px", color: "#2196F3" }}>
          Top 500
        </strong>
      </Typography>
    </Box>

    {/* Right Side: LeetCode Badge */}
    <Box>
      <img
        src="https://leetcard.jacoblin.cool/saikarna?theme=dark"
        alt="LeetCode Stats"
        style={{
          width: "220px",
          borderRadius: "12px",
          border: `2px solid ${darkMode ? "#4CAF50" : "#2196F3"}`,
        }}
      />
    </Box>
  </Box>
</Box>



                  <Box sx={{ marginTop: "32px", width: "100%" }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", marginBottom: "16px" }}
                    >
                      GitHub Contributions
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: "1.6", color: "text.secondary", marginBottom: "16px" }}
                    >
                      Here's my GitHub contribution calendar:
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: darkMode ? "#1e1e1e" : "#f5f5f5",
                        padding: "16px",
                        borderRadius: "6px",
                        overflowX: "auto",
                        width: "100%",
                      }}
                    >
                      <img
                        src="https://ghchart.rshah.org/saikarna913"
                        alt="Karna Pardheev Sai's GitHub Contribution Chart"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
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
