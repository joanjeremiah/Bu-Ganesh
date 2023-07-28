import React from "react";
import img1 from "./assets/awards/madras_academy.jpg";
import img2 from "./assets/awards/vani_kala.jpg";
import img3 from "./assets/awards/naada_oli.jpg";
import img4 from "./assets/awards/naada_vipanchi.jpg";
import img5 from "./assets/5.jpg"
import img6 from "./assets/awards/place.jpg"

const Awards = () => {
    return (
        <div className="awards-new-container" id="awards-section">
            <h1> Awards </h1>
            <p>His mellifluous bowing and vocalised renditions on the Violin
                have earned him accolades from a wide range of music lovers
                and he has performed at prestigious international venues like
                Paul Getty Center Los Angeles, Esplanade-Theatres on the Bay
                Singapore, Theatre de la Ville Paris, to name a few.
                He is also the recipient of several awards from renowned
                music Institutions.</p>
            <div className="team">
                <ul className="auto-grid" role="list">
                    <li>
                        <a  className="profile">
                            <h2 className="profile__name">  Best violinist from Madras Music Academy </h2>
                            <img alt="" src={img1} />
                        </a>
                    </li>
                    <li>
                        <a  className="profile">
                            <h2 className="profile__name">Vani Kala Nipuna from Thyaga Brahma Gana Sabha</h2>
                            <img alt="" src={img2} />
                        </a>
                    </li>
                    <li>
                        <a  className="profile">
                            <h2 className="profile__name">Naada Oli</h2>
                            <img alt="" src={img3} />
                        </a>
                    </li>
                    <li>
                        <a  className="profile">
                            <h2 className="profile__name">Naada Vipanchi</h2>
                            <img alt="" src={img4} />
                        </a>
                    </li >
                    <li>
                        <a  className="profile">
                            <h2 className="profile__name">Maharajapuram Santhanam Endowment award</h2>
                            <img alt="" src={img5} />
                        </a>
                    </li >
                    <li>
                        <a  className="profile">
                            <h2 className="profile__name">Ananya yuva puraskara</h2>
                            <img alt="" src={img6} />
                        </a>
                    </li >
                </ul >
            </div >
        </div >
    );
}

export default Awards;