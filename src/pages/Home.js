import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from "../assets/cityzen2.jpg";
import '../styles/home.css';

function Home() {
  return (
    <div classname="home">
      <div className="headerContainer"
      style= {{ backgroundImage: `url(${BannerImage})`}}
      >
      <h1> Cityzen</h1>
      <p>Pizza for you</p>
      <Link to="/menu">
        <button> Order now </button>
      </Link>
      </div>
    </div>
  );
}


export default Home;
