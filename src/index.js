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

import img1 from "./assets/1.jpg"
import img2 from "./assets/2.jpg"
import img3 from "./assets/3.jpg"
import img4 from "./assets/4.jpg"
import img5 from "./assets/5.jpg"
import Artist from "./Artist";
import Footer from "./Footer";

const slides = [
  {
      city: 'Musician',
      country: 'Dec 91',
      img: img1,
  },
  {
      city: 'Violinist',
      country: 'Jul 99',
      img: img2,
  },
  {
      city: 'Vocalist',
      country: 'Apr 94',
      img: img3,
  },
  {
      city: 'Accompanist',
      country: 'Nov 99',
      img: img4,
  },
  {
      city: 'Soloist',
      country: 'Feb 96',
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
      <PhoneDetector />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
