import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import PhoneDetector from "./mobile";
import Navbar from "./Navbar";
import PlayList from "./PlayList";
import Awards from "./Awards";
import Videos from "./Videos";
import Schedule from "./Schedule";
import Contact from "./Contact";
import CitiesSlider from "./LandingSlider";

import img1 from "./assets/home1.jpg"
import img2 from "./assets/home2.JPG"
import img3 from "./assets/home3.JPG"
import img4 from "./assets/home4.jpg"
import img5 from "./assets/home5.jpg"
import Artist from "./Artist";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Citations from "./Citations";

import concert1 from "./assets/concert1.jpg"
import concert2 from "./assets/concert2.jpg"

const slides = [
  {
    city: 'The Violinist Steals The Show',
    country: 'B U Ganesh',
    img: img2,
  },
  {
    city: 'Strings Of Sensitive Notes',
    country: 'B U Ganesh',
    img: img3,
  },
  {
    city: 'An Inspiring Begada',
    country: 'B U Ganesh',
    img: img4,
  },
  {
    city: 'Complete Rapport with the audience',
    country: 'B U Ganesh',
    img: img5,
  },
];


function App() {
  React.useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const [isSticky, setSticky] = React.useState(false);

  const stickyRef = React.useRef(null);
  const handleScroll = () => {
    window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false);
  };

  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  window.addEventListener("scroll", debounce(handleScroll));
  // return (
  //   <div>
  //     <Navbar sticky={isSticky} />
  //     <CitiesSlider slides={slides} />
  //     <Artist stickyRef={stickyRef} />
  //     <Awards />
  //     <Citations />
  //     <PlayList />
  //     <Videos />
  //     <div id="gallery-section-container">
  //       <PhoneDetector />
  //       <Gallery/>
  //     </div>
  //     <div className="back-drop"><div></div></div>
  //     <Schedule />
  //     <Contact/>
  //     <Footer />
  //   </div>
  // )

  return (
    <div>
      <Navbar sticky={isSticky} />
      <CitiesSlider slides={slides} />
      <Artist stickyRef={stickyRef} />
      <Awards />
      <Citations />
      <PlayList />
      <Videos />
      <div id="gallery-section-container">
        <PhoneDetector />
        <Gallery/>
      </div>
      <div className="back-drop"><div></div></div>
      <div style={{padding: "8rem 0", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={concert1} style={{width: '35vw'}} />
        <img src={concert2} style={{width: '35vw'}} />
      </div>
      <Contact/>
      <Footer />
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
