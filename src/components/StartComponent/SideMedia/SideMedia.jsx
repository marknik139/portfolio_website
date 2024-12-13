import React from 'react';
import "./SideMedia.css";
import SideGif from "./side_media.gif"

const SideMedia = () => {
    return (
        <div className="side-media">
            <img
                className="diagonal-gif"
                src={SideGif}
                alt="Diagonal GIF"
            />
        </div>
    );
};

export default SideMedia;
