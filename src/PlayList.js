import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Player from './Player';
import song1 from "./assets/01 Track 1.mp3";
import song2 from "./assets/02 Track 2.mp3";
import song3 from "./assets/03 Track 3.mp3";
import song4 from "./assets/04 Track 4.mp3";
import song5 from "./assets/05 Track 5.mp3";
import song6 from "./assets/06 Track 6.mp3";
import song7 from "./assets/07 Track 7.mp3";
import song8 from "./assets/08 Track 8.mp3";

import thumbnail1  from './assets/albums/thumbnail1.JPG';
import thumbnail2  from './assets/albums/thumbnail2.jpg';
import thumbnail3  from './assets/albums/thumbnail3.jpg';
import thumbnail4  from './assets/albums/thumbnail4.jpg';
import thumbnail5  from './assets/albums/thumbnail5.JPG';
import thumbnail6  from './assets/albums/thumbnail6.JPG';
import thumbnail7  from './assets/albums/thumbnail7.png';
import thumbnail8  from './assets/albums/thumbnail8.jpg';

const playlistData = [
  {
    image: thumbnail1,
    song: song1,
    name: "Karunimpa Sahana",
    tag: "Varnam - Adi - Thiruvottiyur. - Thyagayya",
    duration: "5:46",
  },
  {
    image: thumbnail2,
    song: song2,
    name: "Sree Maha Ganapathi",
    tag: "Gowlai - Misra chapu - Muthuswamy Dixithar",
    duration: "9:31",
  },
  {
    image: thumbnail3,
    song: song3,
    name: "Sri Shankara",
    tag: "Nagaswaravali - Rupakam - Mahavaidyanatha Sivan",
    duration: "4:41",
  },
  {
    image: thumbnail4,
    song: song4,
    name: "Shankari Shankuru",
    tag: "Saveri - Tisra nadai - Adi - ShayamaShastri",
    duration: "17:35",
  },
  {
    image: thumbnail5,
    song: song5,
    name: "Seethama Mayamma",
    tag: "Vasantha - Roopakam - Tyagaraja",
    duration: "4:52",
  },
  {
    image: thumbnail6,
    song: song6,
    name: "Ethavunara",
    tag: "Kalyani - Adi - Tyagaraja",
    duration: "25:06",
  },
  {
    image: thumbnail7,
    song: song7,
    name: "Govardhana giridhara",
    tag: "Dharbhari - Kanda - Adi - Narayanatheertha",
    duration: "4:08",
  },
  {
    image: thumbnail8,
    song: song8,
    name: "Thillana",
    tag: "Khamas - Adi - Patnam - Subramanya Iyer",
    duration: "2:37",
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
          // margin: -190,
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
    </div>
  );
};

export default PlayList;