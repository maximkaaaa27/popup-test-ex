import React from 'react';
import './App.scss';
import { Banner } from './components/Banner';

function App() {

  return (
    <div className="app">
      <div className='main'>
        <iframe
        width='1280px'
        height='740px'  
        src="https://www.youtube.com/embed/M7FIvfx5J10" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen />
        <Banner />
      </div>
    </div>
  );
}

export default App;
