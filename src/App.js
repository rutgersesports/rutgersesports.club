import './App.css';
import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'
import AboutOurselves from './components/AboutOurselves';
import MeetOurClubs from './components/MeetOurClubs';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Hero/>
      <AboutOurselves/>
      <MeetOurClubs/>
    </div>
  );
}

export default App;
