import {useState} from 'react';
import Player from './components/Player';

function App () {
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
    }
  ]);

  const [currestSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  
  return (
    <div className="App">
      <Player 
      song={songs[currentSongIndex]} 
      nextSong={songs[nextSongIndex]} />
    </div>
  );
}

export default App;
