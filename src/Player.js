import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Player({song, handleSongChange, i}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: ""
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: ""
  });

  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(song.song);

  useEffect(() => {
    console.log(song.song);
    if (duration) {
      
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      console.log(min);
      console.log(secRemain);
      setTime({
        min: min,
        sec: secRemain
      });
    }
  }, [isPlaying, duration]);

  useEffect(() => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    }
  }, [song])

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  const playNext = () => {
    handleSongChange(i+1);
  }

  const playPrevious = () => {
    handleSongChange(i-1);
  }

  return (
    <div className="component">
      <div>
        <h3 className="title">{song.name}</h3>
        <p className="subTitle">{song.tag}</p>
      </div>
      <div>
        <div className="time">
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {time.min}:{time.sec}
          </p>
        </div>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      </div>
      <div>
        <button className="playButton" onClick={playPrevious}>
          <IconContext.Provider value={{ size: "3em", color: "#1a1a1a" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#1a1a1a" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#1a1a1a" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton" onClick={playNext}>
          <IconContext.Provider value={{ size: "3em", color: "#1a1a1a" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}
