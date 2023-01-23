import React from "react";
import "./AboutOurselves.css";
import jonnyholloway from "../images/jonnyholloway.jpg";
import community1 from "../images/community1.jpg";
import community2 from "../images/community2.jpg";
import community3 from "../images/community3.jpg";
import community4 from "../images/community4.jpg";

export default function AboutOurselves() {
  return (
    <div className="about-ourselves">
      <h1>About Ourselves</h1>
      <div className="community-image-grid">
        <img
          className="community-img community-img--1"
          src={jonnyholloway}
          alt="community"
        />
        <img className="community-img" src={community1} alt="community" />
        <img className="community-img" src={community2} alt="community" />
        <img className="community-img" src={community3} alt="community" />
        <img className="community-img" src={community4} alt="community" />
      </div>
      <div className="about-ourselves-desc">
        <div className="desc-col">
          <p>
            <h2>Community</h2>
            We pride ourselves on being an open, friendly, and diverse
            community. Everyone is welcome here no matter who you are or where
            you come from.
          </p>
        </div>
        <div className="desc-col">
          <p>
            <h2>Casual</h2>
            Whether you play to win or play for fun, we have a place for you
            with nearly a dozen clubs dedicated to the most popular video games.
          </p>
        </div>
        <div className="desc-col">
          <p>
            <h2>Competitive</h2>
            Our teams and players are some of the best in the nation with top
            placings in many of the most well-known collegiate esports
            tournaments.
          </p>
        </div>
      </div>
    </div>
  );
}
