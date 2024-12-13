import React from 'react';
import "./Social.css"

import ArtStationIcon from "./icons_social_svg/artstation.svg";
import LinkedInIcon from "./icons_social_svg/linkedin.svg";
import BehanceIcon from "./icons_social_svg/behance.svg";
import InstagramIcon from "./icons_social_svg/instagram.svg";
import ThreadsIcon from "./icons_social_svg/threads.svg";
import TwitterIcon from "./icons_social_svg/twitter.svg";
import YouTubeIcon from "./icons_social_svg/youtube.svg";

const Social = () => {
    return (
        <div className="social-media">
            <a
                href="https://www.artstation.com/?sort_by=community&dimension=all"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Art Station"
            >
                <img src={ArtStationIcon} alt="Art station" />
            </a>
            <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
            >
                <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
            <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Behance"
            >
                <img src={BehanceIcon} alt="Behance" />
            </a>
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
            >
                <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a
                href="https://www.threads.net/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Threads"
            >
                <img src={ThreadsIcon} alt="Threads" />
            </a>
            <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
            >
                <img src={TwitterIcon} alt="Twitter" />
            </a>
            <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Youtube"
            >
                <img src={YouTubeIcon} alt="Youtube" />
            </a>
        </div>
    );
};

export default Social;