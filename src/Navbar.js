// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="logo">Logo</div>
//         <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Services</a></li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//         </div>
//         <div className="hamburger" onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";

const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      <h1>B U Ganesh Prasad</h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item"><a href="#artist-section">The Artist</a></li>
      <li className="navbar--link-item"><a href="#awards-section">Awards</a></li>
      <li className="navbar--link-item"><a href="#playlist-music-container">Albums</a></li>
      <li className="navbar--link-item"><a href="#gallery-section-container">Gallery</a></li>
      <li className="navbar--link-item"><a href="#concerts-section">Concerts</a></li>
      <li className="navbar--link-item"><a href="#contact-section">Contacts</a></li>
    </ul>
  </nav>
);

export default Navbar;