import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Apply from './pages/Apply';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/apply" element={<Apply/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
