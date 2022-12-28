import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Apply from './pages/Apply';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="" element={<HomePage/>}/>
          <Route path="/apply" element={<Apply/>}/>
        </Routes>
    </div>
  )
}

export default App;
