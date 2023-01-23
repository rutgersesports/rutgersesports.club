import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Apply.css";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import JobOpenings from "../components/JobOpenings";
import JobOpeningsHeader from "../components/JobOpeningsHeader";

export default function Apply() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="Apply">
      <NavigationBar />
      <JobOpeningsHeader />
      <JobOpenings />
      <Footer />
    </div>
  );
}
