import React from "react";
import img1 from "./assets/1.jpg"
import img2 from "./assets/2.jpg"
import img3 from "./assets/3.jpg"
import img4 from "./assets/4.jpg"
import img5 from "./assets/5.jpg"

// const Awards = ({stickyRef}) => {
//     return (
//         <div id="awards-container" ref={stickyRef}>
//             <div className='front-drop'>
//                 <div className="grid">
//                     <div className="awards-image-container">
//                         <div className="image-overlay-container grid">
//                             <img src="https://picsum.photos/300/?image=12" />
//                             <img src="https://picsum.photos/300/?image=11" />
//                         </div>
//                     </div>
//                     <div className="awards-content">
//                         <p>His mellifluous bowing and vocalised renditions on the Violin have earned him accolades from a wide range of music lovers and he has performed at prestigious international venues like Paul Getty Center Los Angeles, Esplanade-Theatres on the Bay Singapore, Theatre de la Ville Paris, to name a few. He is also the recipient of several awards from renowned music Institutions including:
//                         </p>
//                         <span>1) The best Violinist award from Music Academy of Madras</span>
//                         <span>2) Title of Nada Oli given by Nada Inbam Chennai
//                         </span>
//                         <span>3) Title of Nada Kala Vipanchi presented by Dr.M.Balamuralikrishna
//                         </span>
//                         <span>
//                             4) Ananya Yuva Puraskara award from Ananya Bangalore
//                         </span>
//                         <span>5) Rasika Kala Ratna from Rasika Priya Sydney Australia</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

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
                            {/* <p>1998</p> */}
                            <img alt="" src={img1} />
                        </a>
                    </li>
                    <li>
                        <a  className="profile">
                            <h2 className="profile__name">Vani Kala Nipuna from Thyaga Brahma Gana Sabha</h2>
                            {/* <p>1999</p> */}
                            <img alt="" src={img2} />
                        </a>
                    </li>
                    <li>
                        <a  className="profile">
                            <h2 className="profile__name">Naada Oli</h2>
                            {/* <p>2002</p> */}
                            <img alt="Profile shot for Ruby Morris" src={img3} />
                        </a>
                    </li>
                    <li>
                        <a  className="profile">
                            <h2 className="profile__name">Naada Vipanchi</h2>
                            {/* <p>2004</p> */}
                            <img alt="Profile shot for Nicholas Castro" src={img4} />
                        </a>
                    </li >
                    <li>
                        <a  className="profile">
                            <h2 className="profile__name">Maharajapuram Santhanam Endowment award</h2>
                            {/* <p>2006</p> */}
                            <img alt="Profile shot for Marc Dixon" src={img5} />
                        </a>
                    </li >
                    <li>
                        <a  className="profile">
                            <h2 className="profile__name">Ananya yuva puraskara</h2>
                            {/* <p>2020</p> */}
                            <img alt="Profile shot for Chad" src={img1} />
                        </a>
                    </li >
                </ul >
            </div >
        </div >
    );
}

export default Awards;