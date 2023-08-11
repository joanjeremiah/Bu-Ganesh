import React from "react";

import img1 from "./assets/citations/ahow.png"
import img2 from "./assets/citations/rapport.jpg"
import img3 from "./assets/citations/rich.jpg"
import img4 from "./assets/citations/harvard.jpeg"
import img5 from "./assets/5.jpg"
import img6 from "./assets/citations/cd.jpeg"
import ModalImage from "react-modal-image";
import TH from "./assets/citations/th.svg"


const Citations = () => {
    return (
        <div className="citations-section-container">
            <h1> Citation  </h1>
            <div className="citations-section">
                <div className="citation-card">
                    <ModalImage
                        small={img1}
                        large={img1}
                        alt="The Hindu"
                        className="citation-card-img"
                    />
                    <div className="container">
                        <h4><b>The Hindu</b></h4>
                    </div>
                </div>

                <div className="citation-card">
                    <ModalImage
                        small={img2}
                        large={img2}
                        alt="The Hindu"
                        className="citation-card-img"
                    />
                    <div className="container">
                        <h4><b>The Hindu</b></h4>
                    </div>
                </div>

                <div className="citation-card">
                    <ModalImage
                        small={img3}
                        large={img3}
                        alt="The Hindu"
                        className="citation-card-img"
                    />
                    <div className="container">
                        <h4><b>The Hindu</b></h4>
                    </div>
                </div>

                <div className="citation-card">
                    <ModalImage
                        small={img4}
                        large={img4}
                        alt="Harvard Sangeet"
                        className="citation-card-img"
                    />
                    <div className="container">
                        <h4><b>Harvard Sangeet</b></h4>
                    </div>
                </div>

                <div className="citation-card">

                    <ModalImage
                        small={img6}
                        large={img6}
                        alt="Blissful Strings"
                        className="citation-card-img"
                    />

                    <div className="container">
                        <h4><b>Blissful Strings</b></h4>
                    </div>
                </div>

                <div className="citation-card">
                    <div className="citation-card-content">
                        <img style={{ width: '32px', height: "32px" }} src={TH} />
                        <h5>Sensitive string of sensitive notes</h5>
                        <span>It is no mean task for accompanying violinists to hold an concert together as the main artists, and keep audience interest alive through raga treatise, kriti, niraval or swarakalpana. That’s what they did at Shanmukhapriya’s Madhuradwani Isai Vizha held recently at Swamy’s Hall.
                            The young violinist B.U. Ganesh Prasad played a significant solo. His tutelage under violin maestro V.V. Subramaniam gave him the wisdom of including strength and delicacy to his offerings.....</span>
                    </div>
                    <div className="link">
                        <a href="https://www.thehindu.com/features/friday-review/music/Strings-of-sensitive-notes/article14932648.ece">View blog...</a>
                    </div>
                </div>

                <div className="citation-card">
                    <div className="citation-card-content">
                        <img style={{ width: '32px', height: "32px" }} src={TH} />
                        <h5>A well-balanced concert by Shertalai Ranganatha Sharma</h5>
                        <span>Ranganatha Sharma and violinist B.U. Ganesh Prasad exchanged some inspiring swara sallies here....</span>
                    </div>
                    <div className="link">
                        <a href="https://www.thehindu.com/entertainment/music/a-well-balanced-concert-by-shertalai-ranganatha-sharma/article38021392.ece">View blog...</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Citations;