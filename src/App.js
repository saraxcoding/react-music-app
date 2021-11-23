import {useState} from 'react';

function App() {
  const [songs, setSongs] = useState([
    {
      title: "Song 1", /* place holders */
      artist: "Artist 1"
      img_src: "./images/song-1.jpg",
      src: "./music/song1.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2"
      img_src: "./images/song-2.jpg",
      src: "./music/song2.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3"
      img_src: "./images/song-3.jpg",
      src: "./music/song3.mp3"
    },
  ])
  
  return (
    <div className="App">
      COMPONENTS HERE!
    </div>
  );
}

export default App;
