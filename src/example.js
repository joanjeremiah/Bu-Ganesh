/* This is a React component that renders a carousel using the "react-spring-3d-carousel" library. The carousel slides are created by an array of objects, where each object contains a unique key generated using "uuidv4" and a content component "RandomImage". The component tracks the current slide, offset radius, and whether to show the navigation in its state. It also includes touch event handlers to allow for swipe navigation on mobile devices. The component allows for dynamic control over the slide position, offset radius and navigation display, by allowing the user to input values. */

import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import img1 from "./assets/gallery/2006 US Tour with O S Thyagarajan.jpg"
import img2 from "./assets/gallery/At the age of 7.jpg"
import img3 from "./assets/gallery/At the age of 9.jpg"
import img4 from "./assets/gallery/Award ceremony concert from All India Radio after winning the 1st prize.jpg"
import img5 from "./assets/gallery/Blessings from Sri.Kunnukudi Vaidyanathan.jpg"
import img6 from "./assets/gallery/Concert at Shakthi  stal New Delhi.JPG"
import img7 from "./assets/gallery/Concert with Chitraveena Sri Ravikiran.jpg"
import img8 from "./assets/gallery/Concert with my Guru Sri V.V. Subramanyam.jpeg"
import img9 from "./assets/gallery/Concert with Sangeetha Kalanidhi T.V.Sankarnarayanan.jpg"
import img10 from "./assets/gallery/Concert with Smt.Bombay Jayashree.jpg"
import img11 from "./assets/gallery/Late Prime Minister  Indira Gandi's rememberance day concert at New Delhi.JPG"
import img12 from "./assets/gallery/My first Guru Sri Basavanagudi G.Nataraj.jpg"
import img13 from "./assets/gallery/Practice session with my father on Tambura.jpg"
import img14 from "./assets/gallery/Receiving award from Veena Doraswamy Iyengar.jpg"
import img15 from "./assets/gallery/Violin Duet with my disciple B.K.Raghu.jpg"
import img16 from "./assets/gallery/Vocal Concert in Gokule Institute Bangalore.jpg"
import img17 from "./assets/gallery/With Guru Sri PSN at Bhartiya Vidya Bhavan Chennai.jpg"
import img18 from "./assets/gallery/With Guru Sri PSN.jpg"
import img19 from "./assets/gallery/With Legendary Smt. D.K.Pattamal.jpg"
import img20 from "./assets/gallery/With Sangeetha Kalanidhi Sri Trichur Ramachandran.jpg"
import img21 from "./assets/gallery/With Sangeetha Kalanidhi Sri. K.V.Narayanaswamy.jpg"
import img22 from "./assets/gallery/With Sri Sanjay Subramanyam.jpg"
import img23 from "./assets/gallery/With young Abhishek Raghuram.jpg"
import img24 from "./assets/gallery/with Sangeetha Kalanidhi Sri R K Srikantan.jpg"
import img25 from "./assets/awards/Concerto.jpg"

const getTouches = (evt) => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  );
};

export default class Example extends Component {
  slides = [
    {
      key: uuidv4(),
      content:
        <div className="spring-3d-container">
          <img loading="lazy" src={img1} className="box" />
          <p>2006 US Tour with O S Thyagarajan</p>
        </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
        <img loading="lazy" src={img2} className="box" />
        <p>At the age of 7</p>
      </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img3} className="box" />
      <p>At the age of 9</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img4} className="box" />
      <p>Award ceremony concert from All India Radio after winning the 1st prize</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img5} className="box" />
      <p>Blessings from Sri.Kunnukudi Vaidyanathan</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img6} className="box" />
      <p>Concert at Shakthi  stal New Delhi</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img7} className="box" />
      <p>Concert with Chitraveena Sri Ravikiran</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img8} className="box" />
      <p>Concert with my Guru Sri V.V. Subramanyam</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img9} className="box" />
      <p>Concert with Sangeetha Kalanidhi T.V.Sankarnarayanan</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img10} className="box" />
      <p>Concert with Smt.Bombay Jayashree</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img11} className="box" />
      <p>Late Prime Minister  Indira Gandi's rememberance day concert at New Delhi</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img12} className="box" />
      <p>My first Guru Sri Basavanagudi G.Nataraj</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img13} className="box" />
      <p>Practice session with my father on Tambura</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img14} className="box" />
      <p>Receiving award from Veena Doraswamy Iyengar</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img15} className="box" />
      <p>Violin Duet with my disciple B.K.Raghu</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img16} className="box" />
      <p>Vocal Concert in Gokule Institute Bangalore</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img17} className="box" />
      <p>With Guru Sri PSN at Bhartiya Vidya Bhavan Chennai</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img18} className="box" />
      <p>With Guru Sri PSN</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img19} className="box" />
      <p>With Legendary Smt. D.K.Pattamal</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img20} className="box" />
      <p>With Sangeetha Kalanidhi Sri Trichur Ramachandran</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img21} className="box" />
      <p>With Sangeetha Kalanidhi Sri. K.V.Narayanaswamy</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img22} className="box" />
      <p>With Sri Sanjay Subramanyam</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img23} className="box" />
      <p>With young Abhishek Raghuram</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img24} className="box" />
      <p>With Sangeetha Kalanidhi Sri R K Srikantan</p>
    </div>
    },
    {
      key: uuidv4(),
      content: <div className="spring-3d-container">
      <img loading="lazy"src={img25} className="box" />
      <p>Concert in Italy</p>
    </div>
    },

  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  state = {
    goToSlide: 0,
    offsetRadius: 10,
    showNavigation: false,
    enableSwipe: true,
    config: config.slower,
    currentSlides: this.slides.slice(0, 5),
    currentSetStartIndex: 0, // Keep track of the start index of the current set of slides
  };

  componentDidMount() {
    this.updateCurrentSlides(0); // Initialize with the first 5 slides
    this.interval = setInterval(this.autoPlay, 3000);
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    clearInterval(this.interval);
  }

  updateCurrentSlides = (startIndex) => {
    const endIndex = startIndex + 5;
    const currentSlides = this.slides.slice(startIndex, endIndex);
    this.setState({ currentSlides });
  };

  autoPlay = () => {
    const { goToSlide, currentSetStartIndex } = this.state;
    const totalSlides = this.slides.length;
    const nextSlideIndex = (goToSlide + 1) % 5; // Calculate the next slide index within the current 5 slides

    // Update the goToSlide within the current 5 slides
    this.setState({ goToSlide: nextSlideIndex });

    if (nextSlideIndex === 0) {
      // If we have reached the end of the current 5 slides, switch to the next set of 5 slides
      const nextStartIndex = (currentSetStartIndex + 5) % totalSlides;
      const nextEndIndex = Math.min(nextStartIndex + 5, totalSlides);
      const nextSlides = this.slides.slice(nextStartIndex, nextEndIndex);

      // Update the state with the next set of slides and the new start index
      this.setState({
        currentSlides: nextSlides,
        currentSetStartIndex: nextStartIndex,
      });
    }
  };






  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  handleTouchStart = (evt) => {
    if (!this.state.enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    this.setState({
      ...this.state,
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY
    });
  };

  handleTouchMove = (evt) => {
    if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = this.state.xDown - xUp;
    let yDiff = this.state.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        this.setState({
          goToSlide: this.state.goToSlide + 1,
          xDown: null,
          yDown: null
        });
      } else {
        /* right swipe */
        this.setState({
          goToSlide: this.state.goToSlide - 1,
          xDown: null,
          yDown: null
        });
      }
    }
  };


  render() {
    const { currentSlides, goToSlide, offsetRadius, showNavigation, config } =
      this.state;

    return (
      <div
        style={{ width: "80%", height: "500px", margin: "0 auto" }}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
      >
        <Carousel
          slides={currentSlides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showNavigation}
          animationConfig={config}
        />
      </div>
    );
  }
}
