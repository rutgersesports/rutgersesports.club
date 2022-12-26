import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'
import AboutOurselves from './components/AboutOurselves';
import MeetOurClubs from './components/MeetOurClubs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Hero/>
      <AboutOurselves/>
      <MeetOurClubs/>
      <Footer/>
    </div>
  );
}

export default App;
