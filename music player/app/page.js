"use client"
import React, { useState } from "react";
import PlayList from "./components/PlayList";
import Player from "./components/Player";
import data from "./data/data"

export default function Home() {
  const [currentSong, setCurrentSong] = useState(data[0]);

  // console.log(data[0])

  const handleSongSelect = (song) => {
    setCurrentSong(song);
  };

  return (
    <main className="min-h-screen flex root text-white">
      <div className="w-[25%]">
        <PlayList onSongSelect={handleSongSelect} data={data} />
      </div>
      <div className="w-[75%]">
        <Player song={currentSong} />
      </div>
    </main>
  );
}
