import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import "../styles/HomeStyles.css";
import Menu from "./Menu1";
import About from "./About1";

const Home = () => {
  return (
    <Layout>
      
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1 style={{ color:'white' }}>Service Provider</h1>
          <p style={{ color:'white' }}>Put a face<br></br>
          to your business.<br></br>
          
           </p>
          <Link to="/menu">
            <button style={{color:'white', backgroundColor:'red'}}>Click For More</button>
          </Link>
        </div>
      </div><br></br>
      <About/>
      <Menu/>
    </Layout>
  );
};

export default Home;
