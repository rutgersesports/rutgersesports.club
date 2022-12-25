import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';
import "./MeetOurClubs.css";
import { clubs } from "./ClubsInfo";
import discordIcon from '../icons/discord.svg';

const images = require.context("../images", true);

function buildClubWidget(name, getInvolved, backgroundImage, socialMedia) {
  const loadedImage = images(backgroundImage);
  return (
    <div className="club" style={{ backgroundImage: `url(${loadedImage})` }}>
      <h2>{name}</h2>
    </div>
  );
}

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

export default function MeetOurClubs() {
  return (
    <div className="meet-our-clubs">
      <h1>Meet Our Clubs</h1>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
      >
        {clubs.map((data, key) => {
          return (
            <div key={key}>
              {buildClubWidget(data.name, data.getInvolved, data.image,
              data.socialMedia)}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
