import React, { Component } from 'react'
import CarouselSlider from 'react-carousel-slider';

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

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

let data = [
    {
        des: "2006 US Tour with O S Thyagarajan",
        imgSrc: img1
    },
    {
        des: "At the age of 7",
        imgSrc: img2
    }, {
        des: "At the age of 7",
        imgSrc: img3
    },
    {
        des: "Award ceremony concert from All India Radio after winning the 1st prize",
        imgSrc: img4
    }, {
        des: "Blessings from Sri.Kunnukudi Vaidyanathan",
        imgSrc: img5
    },
    {
        des: "Concert at Shakthi  stal New Delhi",
        imgSrc: img6
    }, {
        des: "Concert with Chitraveena Sri Ravikiran",
        imgSrc: img7
    },
    {
        des: "Concert with my Guru Sri V.V. Subramanyam",
        imgSrc: img8
    }, {
        des: "Concert with Sangeetha Kalanidhi T.V.Sankarnarayanan",
        imgSrc: img9
    },
    {
        des: "Concert with Smt.Bombay Jayashree",
        imgSrc: img10
    }, {
        des: "Late Prime Minister  Indira Gandi's rememberance day concert at New Delhi",
        imgSrc: img11
    },
    {
        des: "My first Guru Sri Basavanagudi G.Nataraj",
        imgSrc: img12
    }, {
        des: "Practice session with my father on Tambura",
        imgSrc: img13
    },
    {
        des: "Receiving award from Veena Doraswamy Iyengar",
        imgSrc: img14
    },
    {
        des: "Violin Duet with my disciple B.K.Raghu",
        imgSrc: img15
    },
    {
        des: "Vocal Concert in Gokule Institute Bangalore",
        imgSrc: img16
    },
    {
        des: "With Guru Sri PSN at Bhartiya Vidya Bhavan Chennai",
        imgSrc: img17
    },
    {
        des: "With Guru Sri PSN",
        imgSrc: img18
    },
    {
        des: "With Legendary Smt. D.K.Pattamal",
        imgSrc: img19
    },
    {
        des: "With Sangeetha Kalanidhi Sri Trichur Ramachandran",
        imgSrc: img20
    },
    {
        des: "With Sangeetha Kalanidhi Sri. K.V.Narayanaswamy",
        imgSrc: img21
    },
    {
        des: "With Sri Sanjay Subramanyam",
        imgSrc: img22
    },
    {
        des: "With young Abhishek Raghuram",
        imgSrc: img23
    },
    {
        des: "with Sangeetha Kalanidhi Sri R K Srikantan",
        imgSrc: img24
    }
];
export default class extends React.Component {
    render() {
        return (
            <div id='gallery-section' className='mobile-gallery-container'>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={data.length}
                >
                    <Slider>
                        {data.map((d,i) => {
                            return <Slide index={i}><Image src={d.imgSrc} /><p style={{
                              color: "white",
                              fontSize: ".9rem",
                              marginTop: "-5vh",
                              textAlign: "center",
                            }}>{d.des}</p></Slide>
                        })}
                    </Slider>
                    <div className='slider-mobile-control-container'>
                        <ButtonBack className='slider-mobile-control'>Back</ButtonBack>
                        <ButtonNext className='slider-mobile-control'>Next</ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        );
    }
}