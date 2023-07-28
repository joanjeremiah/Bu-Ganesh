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


// class Gallery extends Component {
//     render() {

//         let data = [
//             {
//                 des: "1",
//                 imgSrc: img1
//             },
//             {
//                 des: "2",
//                 imgSrc: img2
//             },{
//                 des: "3",
//                 imgSrc: img3
//             },
//             {
//                 des: "4",
//                 imgSrc: img4
//             },{
//                 des: "5",
//                 imgSrc: img5
//             },
//             {
//                 des: "6",
//                 imgSrc: img6
//             },{
//                 des: "7",
//                 imgSrc: img7
//             },
//             {
//                 des: "8",
//                 imgSrc: img8
//             },{
//                 des: "9",
//                 imgSrc: img9
//             },
//             {
//                 des: "10",
//                 imgSrc: img10
//             },{
//                 des: "11",
//                 imgSrc: img11
//             },
//             {
//                 des: "12",
//                 imgSrc: img12
//             },{
//                 des: "13",
//                 imgSrc: img13
//             },
//             {
//                 des: "14",
//                 imgSrc: img14
//             },
//             {
//                 des: "15",
//                 imgSrc: img15
//             },
//             {
//                 des: "16",
//                 imgSrc: img16
//             },
//             {
//                 des: "17",
//                 imgSrc: img17
//             },
//             {
//                 des: "18",
//                 imgSrc: img18
//             },
//             {
//                 des: "19",
//                 imgSrc: img19
//             },
//             {
//                 des: "20",
//                 imgSrc: img20
//             },
//             {
//                 des: "21",
//                 imgSrc: img21
//             },
//             {
//                 des: "22",
//                 imgSrc: img22
//             },
//             {
//                 des: "23",
//                 imgSrc: img23
//             },
//             {
//                 des: "24",
//                 imgSrc: img24
//             }
//         ];

//         return <div id='gallery-section' className='mobile-gallery-container'><CarouselSlider className="mobile-gallery" slideItems = {data} />;</div>
//     }
// }

// export default Gallery;


import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

let data = [
    {
        des: "1",
        imgSrc: img1
    },
    {
        des: "2",
        imgSrc: img2
    }, {
        des: "3",
        imgSrc: img3
    },
    {
        des: "4",
        imgSrc: img4
    }, {
        des: "5",
        imgSrc: img5
    },
    {
        des: "6",
        imgSrc: img6
    }, {
        des: "7",
        imgSrc: img7
    },
    {
        des: "8",
        imgSrc: img8
    }, {
        des: "9",
        imgSrc: img9
    },
    {
        des: "10",
        imgSrc: img10
    }, {
        des: "11",
        imgSrc: img11
    },
    {
        des: "12",
        imgSrc: img12
    }, {
        des: "13",
        imgSrc: img13
    },
    {
        des: "14",
        imgSrc: img14
    },
    {
        des: "15",
        imgSrc: img15
    },
    {
        des: "16",
        imgSrc: img16
    },
    {
        des: "17",
        imgSrc: img17
    },
    {
        des: "18",
        imgSrc: img18
    },
    {
        des: "19",
        imgSrc: img19
    },
    {
        des: "20",
        imgSrc: img20
    },
    {
        des: "21",
        imgSrc: img21
    },
    {
        des: "22",
        imgSrc: img22
    },
    {
        des: "23",
        imgSrc: img23
    },
    {
        des: "24",
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
                            return <Slide index={i}><Image src={d.imgSrc} /></Slide>
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