import './App.css';
import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'
import AboutOurselves from './components/AboutOurselves';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Hero/>
      <AboutOurselves/>
    </div>
  );
}

export default App;
