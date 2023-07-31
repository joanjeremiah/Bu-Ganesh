import React from "react";
import img1 from "./assets/awards/madras_academy.jpg";
import img2 from "./assets/awards/vani_kala.jpg";
import img3 from "./assets/awards/naada_oli.jpg";
import img4 from "./assets/awards/naada_vipanchi.jpg";
import img5 from "./assets/5.jpg"
import img6 from "./assets/awards/place.jpg"
import img7 from "./assets/awards/Kellogg.jpg"
import img8 from "./assets/awards/Concerto.jpg"


const Awards = () => {

    const modal= React.useRef(null);
    const modalImg = React.useRef(null);
    const captionText = React.useRef(null);

    const handleImageOpen = (img, alt) => {
        // console.log("hello", e.target)
        modal.current.style.display = "block";
        modalImg.current.src = img;
        captionText.current.innerHTML = alt;
    }

    const handleImageClose = () => {
        modal.current.style.display = "none";
    }


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
                    <li onClick={() => handleImageOpen(img1, "Best violinist from Madras Music Academy")}>
                        <a className="profile">
                            <h2 className="profile__name">  Best violinist from Madras Music Academy </h2>
                            <img loading="lazy" alt="" src={img1} />
                        </a>
                    </li>
                    <li onClick={() => handleImageOpen(img2, "Vani Kala Nipuna from Thyaga Brahma Gana Sabha")}>
                        <a className="profile">
                            <h2 className="profile__name">Vani Kala Nipuna from Thyaga Brahma Gana Sabha</h2>
                            <img loading="lazy" alt="" src={img2} />
                        </a>
                    </li>
                    <li onClick={() => handleImageOpen(img3, "Naada Oli")}>
                        <a className="profile">
                            <h2 className="profile__name">Naada Oli</h2>
                            <img loading="lazy" alt="" src={img3} />
                        </a>
                    </li>
                    <li onClick={() => handleImageOpen(img4, "Naada Vipanchi")}>
                        <a className="profile">
                            <h2 className="profile__name">Naada Vipanchi</h2>
                            <img loading="lazy" alt="" src={img4} />
                        </a>
                    </li >
                    <li onClick={() => handleImageOpen(img5, "Air first prize receiving from Veena Doraisway Iyengar")}>
                        <a className="profile">
                            <h2 className="profile__name">Air first prize receiving from Veena Doraisway Iyengar</h2>
                            <img loading="lazy" alt="" src={img5} />
                        </a>
                    </li >
                    <li onClick={() => handleImageOpen(img6, "Ananya yuva puraskara")}>
                        <a className="profile">
                            <h2 className="profile__name">Ananya yuva puraskara</h2>
                            <img loading="lazy" alt="" src={img6} />
                        </a>
                    </li>
                    <li onClick={() => handleImageOpen(img7, "Kellogg Violin Accompanist")}>
                        <a className="profile">
                            <h2 className="profile__name">Kellogg Violin Accompanist</h2>
                            <img loading="lazy" alt="" src={img7} />
                        </a>
                    </li >
                    <li onClick={() => handleImageOpen(img8, "All India radio award")}>
                        <a className="profile">
                            <h2 className="profile__name">All India radio award</h2>
                            <img loading="lazy" alt="" src={img8} />
                        </a>
                    </li>
                </ul >
            </div >

            <div id="myModal" className="modal" ref={modal}>
                <span className="close" onClick={handleImageClose}>&times;</span>
                <img className="modal-content" ref={modalImg} id="img01" />
                    <div id="caption" ref={captionText}></div>
            </div>
        </div >
    );
}

export default Awards;