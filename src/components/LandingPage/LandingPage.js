import "./LandingPage.css";
// import React from "react";
import cheers from "../../assets/cheers.webp";
import { Link } from "react-router-dom";

const LandingPage = () => {

  console.log(process.env.REACT_APP_MAPS_KEY)

  let greeting =
    "On the next page, enter your preferred beer style, the city you are in, and the radius you want the search to return. Then head to the brewery that features your favorite style!";
  return (
    <div className="home-container">
      <div className="greeting">
        <h1 className="welcome">Welcome To Malt Matcher!</h1>
        <h2 className="greeting-msg">{greeting}</h2>
        <Link to="/maltfinder">
          <button className="landing-page-home-button">Find Some Brews!</button>
        </Link>
      </div>
      <div className="home-img-container">
        <img src={cheers} className="cheers-image" alt="cheers" />
      </div>
    </div>
  );
};

export default LandingPage;
