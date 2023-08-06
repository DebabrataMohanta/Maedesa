import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box} from "@mui/material";








const About = () => {
  return (
    
    <Layout>
      <br></br>
      <Box
        sx={{
          backgroundColor: '#548df0',
        '&:hover': {
          backgroundColor: '#119af5',
          opacity: [51, 170, 51,  1],
        },
          flexGrow: 1,
          my: 2,
          textAlign: "center",
          p: 8,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "4rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "2.5rem",
            },
          },
        }}
      >
        <h4  style={{color:"white"}}>Welcome To Maedesa</h4>
        <p style={{color:"white"}}>
        At Maedesa, we go beyond helping businesses transform through the innovative idea. We help them make a meaningful difference; to their customers, and to the communities they serve.
        </p><br></br><br></br>
        <p style={{color:"white"}}>
        Maedesa Info Private Limited is an Information Technology Enabled Services Company founded in 2023.
        Focused on innovative solutions & helps to provide services in different parts of the world with 
        the help of telecommunication.
        </p><br></br><br></br>
        <p style={{color:"white"}}>
        Dealing with Customer Interaction services -including call center 
        facilities with adequate telecom infrastructure, trained consultants, access to requisite databases, 
        Internet and other online information infrastructure to provide information and support to customers 24x7.
        </p>
       </Box>
      </Layout>
  );
};

export default About;
