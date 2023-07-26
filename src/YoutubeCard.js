import React from "react";
import ReactPlayer from 'react-player'

// const YoutubeCard = ({url}) => {
//     return (
//         <iframe src={`https://www.youtube.com/embed/${url}?rel=0&showinfo=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
//     );
// }

const YoutubeCard = ({ url, thumbnail }) => {
    return (
        <ReactPlayer style={{
            borderRadius: "8px",
            width: "100%",
            aspectRatio: "3 / 2",
            maxWidth: "100%"
        }} className="yt-video" light={<img className="yt-video" src={thumbnail}></img>} url={`https://www.youtube.com/watch?v=${url}`} />
    );
}

export default YoutubeCard;