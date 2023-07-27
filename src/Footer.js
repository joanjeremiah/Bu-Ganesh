import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="navbar--logo-holder">
                <h1>Bu Ganesh Prasad</h1>
            </div>
            <ul className="navbar--link">
                <li className="navbar--link-item"><a href="#artist-section">The Artist</a></li>
                <li className="navbar--link-item"><a href="#awards-section">Awards</a></li>
                <li className="navbar--link-item"><a href="#playlist-music-container">Albums</a></li>
                <li className="navbar--link-item"><a href="#gallery-section">Gallery</a></li>
                <li className="navbar--link-item"><a href="#concerts-section">Concerts</a></li>
                <li className="navbar--link-item"><a href="#contact-section">Contacts</a></li>
            </ul>
        </footer>
    )
}

export default Footer;