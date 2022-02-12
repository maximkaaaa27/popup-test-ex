import React from 'react';
import './style.scss';
import { VideoPlayerComponent } from './VideoPlayerComponent';

import { Banner } from './microsite/Banner';



function App() {


  const volvoYT = 'https://www.youtube.com/embed/M7FIvfx5J10';

  return (
      <>
      <VideoPlayerComponent urlYouTube={volvoYT} />
      <Banner />
      </>


  );
}

export default App;
