import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Player from './Player';
import song1 from "./assets/B.U. GANESH PRASAD DARBARI KAANADA with Neyveli Narayan Chandrasekar Sharma [TubeRipper.com].mp3";
import song2 from "./assets/Behag [TubeRipper.com].mp3";
import song3 from "./assets/Deva deva [TubeRipper.com].mp3";
import song4 from "./assets/neenyako ninna hangyako [TubeRipper.com].mp3";
import song5 from "./assets/Glimpses of Pahadi [TubeRipper.com].mp3";
import song6 from "./assets/Hamsadwani Alapana [TubeRipper.com].mp3";

const playlistData = [
  {
    image: "https://picsum.photos/300/?image=51",
    song: song1,
    name: "Darbari Kaanada",
    tag: "Instrumental",
    duration: "3:29",
  },
  {
    image: "https://picsum.photos/300/?image=52",
    song: song2,
    name: "Behag",
    tag: "Cover ",
    duration: "0:59",
  },
  {
    image: "https://picsum.photos/300/?image=53",
    song: song3,
    name: "Deva deva",
    tag: "Audition",
    duration: "1:00",
  },
  {
    image: "https://picsum.photos/300/?image=54",
    song: song4,
    name: "Neenyako ninna hangyako",
    tag: "Concert",
    duration: "1:00",
  },
  {
    image: "https://picsum.photos/300/?image=55",
    song: song5,
    name: "Glimpses of Pahadi",
    tag: "Cover",
    duration: "0:58",
  },
  {
    image: "https://picsum.photos/300/?image=55",
    song: song6,
    name: "Hamsadwani Alapana",
    tag: "Cover",
    duration: "1:00",
  }
];


const PlayList = ({ }) => {
  const containerRef = useRef(null);
  const [curSong, setCurSong] = useState(0);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.to(containerRef.current, { duration: 0.4, backgroundColor: "#fff" });
      // gsap.to(containerRef.current, { duration: 0.4, perspective: 700, backgroundColor: "#fff" });
      // or refs
      // gsap.to(circle.current, { rotation: 360 });

      const playlistBoxes = document.querySelectorAll('.playlist-box');

      function getCurrentRotationY(transformString) {
        if (!transformString) return 0; // If the transform string is empty, assume rotationY is 0 degrees

        // Extract the rotationY value from the transform string using regex
        const regex = /rotateY\((-?\d+)deg\)/;
        const match = transformString.match(regex);

        if (match && match.length === 2) {
          const rotationY = parseFloat(match[1]);
          return rotationY;
        } else {
          return 0; // If there's no match or something went wrong, assume rotationY is 0 degrees
        }
      }

      const rotateToIndex = (index) => {
        let rotationY = getCurrentRotationY(playlistBoxes[index].style.transform);
        // if (rotationY > 180) {
        //   rotationY = 360 - rotationY;
        // }
        playlistBoxes.forEach((box, i) => {
          if(i === index) {
            gsap.to(box, { rotationY: `-=${rotationY}`, scale: 0.47 });
          }else{
            gsap.to(box, { rotationY: `-=${rotationY}`, scale: 0.4 });
          }
        });
      };

      playlistBoxes.forEach((box, i) => {
        gsap.set(box, {
          right: "50%",
          top: "50%",
          margin: -190,
          // width: 400,
          // height: 400,
          borderRadius: "20%",
          backgroundImage: `url(${playlistData[i % playlistData.length].image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          clearProps: "transform",
          backfaceVisibility: "hidden",
        });

        box.tl = gsap
          .timeline({ paused: true, defaults: { immediateRender: true } })
          .fromTo(
            box,
            {
              scale: (i == 0) ? 0.47 : 0.40,
              // scale: 0.4,
              rotationY: (i / playlistBoxes.length) * 360, // - 90,
              transformOrigin: String("50% 50% -500%"),
            },
            {
              rotationY: "+=360",
              ease: "none",
            }
          )
          .timeScale(0.05);

        // box.addEventListener('mouseover', (e) => {
        //   gsap.to(e.currentTarget, {
        //     opacity: 0.40,
        //     scale: 0.47,
        //     duration: 0.4,
        //     ease: "expo",
        //   });
        // });
      });

      // playlistBoxes.forEach(box => {
      //   box.addEventListener('mouseout', (e) => {
      //     gsap.to(e.currentTarget, {
      //       opacity: 1,
      //       scale: 0.40,
      //       duration: 0.2,
      //       ease: "back.out(3)",
      //       overwrite: "auto",
      //     });
      //   });
      // });

      playlistBoxes.forEach((box, i) => {
       
        box.addEventListener('click', (e) => {
          console.log(i);
          rotateToIndex(i);
          setCurSong(i % playlistData.length);

        });
      })

    }, containerRef);

    return () => {
      const playlistBoxes = document.querySelectorAll('.playlist-box');
      playlistBoxes.forEach(box => {
        box.removeEventListener('click');
        box.removeEventListener('mouseover');
        box.removeEventListener('mouseout');
      });
      ctx.revert();
    }
  }, []);

  const renderBoxes = () => {
    const divs = [];
    for (let i = 0; i < 15; i++) {
      divs.push(<div key={i} className='playlist-box'></div>);
    }
    return divs;
  }

  const handleSongChange = (i) => {
    if( i < 0){
      i = playlistData.length + i;
    }
    const playlistBoxes = document.querySelectorAll('.playlist-box');
    playlistBoxes[i].click();
    setCurSong(i % playlistData.length);
  }

  return (
    <div id="playlist-music-container">
      {/* <div className='front-drop'> */}
      <h1 className='section-title'>Albums</h1>
      <div className='grid'>
        <div id="playlist-music-list">
          {playlistData.map((playlist, i) => {
            return (
              <div key={i} className='playlist-music' onClick={() => handleSongChange(i)}>
                <h4>{playlist.name}</h4>
                <h5 className='duration'>{playlist.duration}</h5>
                <h5>{playlist.tag}</h5>
              </div>
            )
          })}
        </div>
        <div className='music-section'>
          <div ref={containerRef} id="playlist-slide-container" >
            {renderBoxes()}
          </div>
          <div className='music-player-container'>
            <Player i={curSong} song={playlistData[curSong]} handleSongChange={handleSongChange} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default PlayList;
