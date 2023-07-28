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

const slides = [
  // {
  //     city: 'Musician',
  //     country: 'Dec 91',
  //     img: img1,
  // },
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
    city: 'An Inspiring Vegada',
    country: 'B U Ganesh',
    img: img4,
  },
  {
    city: 'Complete Rappord With Audience',
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
  return (
    <div>
      <Navbar sticky={isSticky} />
      <CitiesSlider slides={slides} />
      <Artist stickyRef={stickyRef} />
      <Awards />
      <PlayList />
      <Videos />
      <div id="gallery-section-container">
        <PhoneDetector />
        <Gallery/>
      </div>
      <div className="back-drop"><div></div></div>
      <Schedule />
      <Contact/>
      <Footer />
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
