import React from 'react';
import './App.scss';
import { Promo } from './components/Promo';
// import { Banner } from './components/Banner';

function App() {

  return (
    <div className="app">
        <iframe
        width='1280px'
        height='720px'  
        src="https://www.youtube.com/embed/M7FIvfx5J10" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen />
        <Promo />
    </div>
  );
}

export default App;
