import React from "react";
import YoutubeCard from "./YoutubeCard";
import img1 from "./assets/1.jpg"
import img2 from "./assets/2.jpg"
import img3 from "./assets/3.jpg"
import img4 from "./assets/4.jpg"


const Videos = () => {
    return (
        <div className="video-section">
            <h1 className="section-title">Link to Videos</h1>
            <div>
                <YoutubeCard url={'oUZCNq94KGg'} thumbnail={img1} />
                <YoutubeCard url={'7jTUzshU4ws'} thumbnail={img2} />
                <YoutubeCard url={'aW5LaRHspyM'} thumbnail={img3} />
                <YoutubeCard url={'Lb_aLBRygE0'} thumbnail={img4} />
                <YoutubeCard url={'HMXHYJ_cce0'} thumbnail={img4} />
            </div>
        </div>
    )
}

export default Videos;