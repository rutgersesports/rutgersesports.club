import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./HomePage.css";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import AboutOurselves from "../components/AboutOurselves";
import MeetOurClubs from "../components/MeetOurClubs";
import Footer from "../components/Footer";

export default function HomePage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
