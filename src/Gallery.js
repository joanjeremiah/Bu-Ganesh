// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// const imgs = [
//     'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
//     'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
//     'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//     'https://images.unsplash.com/photo-1555626906-fcf10d6851b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//     'https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//     'https://images.unsplash.com/photo-1490641815614-b45106d6dd04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//   ];

// export default class Responsive extends Component {
//     render() {
//         var settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             lazyLoad: true,            
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             initialSlide: 0,
//         };
//         return (
//             <div id="gallery-section">
//                 <Slider {...settings}>
//                     {imgs.map((num) => (
//                         <img key={num} src={num} alt="" />
//                     ))}
//                 </Slider>
//             </div>
//         );
//     }
// }

import React, {Component} from 'react'
import CarouselSlider from 'react-carousel-slider';

import img1 from "./assets/1.jpg"
import img2 from "./assets/2.jpg"
import img3 from "./assets/3.jpg"
import img4 from "./assets/4.jpg"
import img5 from "./assets/5.jpg"
 
class Gallery extends Component {
    render() {
    
        let data = [
            {
                des: "1",
                imgSrc: img1
            },
            {
                des: "2",
                imgSrc: img2
            }
        ];
        
        return <div id='gallery-section' className='mobile-gallery-container'><CarouselSlider className="mobile-gallery" slideItems = {data} />;</div>
    }
}

export default Gallery;