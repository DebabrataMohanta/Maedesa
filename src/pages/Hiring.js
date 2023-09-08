import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box} from "@mui/material";








const Hiring = () => {
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
        <h4  style={{color:"white"}}>WE ARE HIRING</h4>
        <p style={{color:"white"}}>
        Job Overview
        Here at Maedesa Info Private Limited, We are hiring an experienced/fresher Customer Service Sales to help us keep growing. If you're dedicated and ambitious, Maedesa Info Private Limited is an excellent place to grow your career. Don't hesitate to apply.
        </p><br></br><br></br>
        <p style={{color:"white"}}>
        Responsibilities for Customer Service Sales<br></br>
        → Perform informal and formal needs assessments for each customer to recommend appropriate goods and services<br></br>
        → Develop a rapport with customers, demonstrating a friendly and helpful manner to put them at ease<br></br>
        → Maintain a neat and clean appearance to represent a positive image of the company and its brand at all times<br></br>
        → Participate in training and professional development and put new skills to immediate and meaningful use<br></br>
        → Foster a positive and pleasant working relationship with members of the customer service sales team<br></br>
        → Familiarize yourself with current information about services and products available for customers<br></br>
        → Accurately record customer demographics, sales orders, or other information digitally or in written form<br></br>
        → Communicate with clients in Engish language<br></br>
        </p><br></br><br></br>
        <p style={{color:"white"}}>
        Qualifications for Customer Service Sales <br></br>
        → Associate or bachelor's degree/+2 or equivalent experience preferred<br></br>
        → Ability to cooperate with and support other members of customer service team<br></br>
        → Strong verbal communication skills in the English language<br></br>
        → Willingness to interact daily with customers from a wide range of cultures and backgrounds<br></br>
        → Must be comfortable working independently and making minor decisions without direct supervision<br></br>
        → Good sense of organization and keen attention to detail<br></br>
        → Knowledge of customer service best practices and desire to participate in trainings and professional development<br></br>
        → Ability to perform well in a fast-paced working environment<br></br>
        </p><br></br><br></br>
        <p style={{color:"yellow"}}>
         Intrested Candidates can send their Resume to the given mail ID:→  hr@maedesa.com
         
        </p>
       </Box>
      </Layout>
  );
};

export default Hiring;
