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
      {/* {sticky ? <img src="https://drive.google.com/uc?id=1V-B6GzMF3PEUBXeDxJOwONfgNztKP_6P"
        alt="logo" className="navbar--logo" /> : null} */}
      <h1>Bu Ganesh</h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">The Artist</li>
      <li className="navbar--link-item">Awards</li>
      <li className="navbar--link-item">Concerts</li>
      <li className="navbar--link-item">Albums</li>
      <li className="navbar--link-item">Contacts</li>
    </ul>
  </nav>
);

export default Navbar;