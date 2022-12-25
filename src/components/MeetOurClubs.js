import "./MeetOurClubs.css";
import { clubs } from "./clubs";

const images = require.context("../images", true);

function buildClubWidget(name, getInvolved, backgroundImage, socialMedia) {
  const loadedImage = images(backgroundImage);
  return (
    <div className="club" style={{ backgroundImage: `url(${loadedImage})` }}>
      <h2>{name}</h2>
    </div>
  );
}

export default function MeetOurClubs() {
  return (
    <div className="meet-our-clubs">
      <h1>Meet Our Clubs</h1>
      <div className="clubs">
        {clubs.map((data, key) => {
          return (
            <div key={key}>
              {buildClubWidget(data.name, data.getInvolved, data.image,
              data.socialMedia)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
