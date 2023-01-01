import React from "react";
import "./HomePage.css";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import AboutOurselves from "../components/AboutOurselves";
import MeetOurClubs from "../components/MeetOurClubs";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="HomePage">
      <NavigationBar />
      <Hero />
      <AboutOurselves />
      <MeetOurClubs />
      <Footer />
    </div>
  );
}
