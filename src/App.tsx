import React from 'react';
import './App.scss';
import { VideoPlayerContextProvider } from './microsite/context/videoplayer/videoplayerState';
import { MicroSiteApp } from './microsite/MicrositeApp';
import { VideoPlayer } from './Video';


function App() {

  const volvoYT = 'https://www.youtube.com/embed/M7FIvfx5J10';

  return (
    <VideoPlayerContextProvider>
        <VideoPlayer urlYouTube={volvoYT} />
        <MicroSiteApp />
    </VideoPlayerContextProvider>
  );
}

export default App;
