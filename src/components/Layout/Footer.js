import React from "react";
import LinkedIn from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <a href="https://www.linkedin.com/company/maedesa/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <LinkedIn />
          </a>
          
          <a href="https://instagram.com/maedesa_info?" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <InstagramIcon />
          </a>
          
          <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <TwitterIcon />
          </a>
          
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <GitHubIcon />
          </a>
          
          <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <YouTubeIcon />
          </a>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; 2023 Maedesa Info
        </Typography>
      </Box>
    </>
  );
};

export default Footer;