import React, { useEffect, useState } from 'react';
import './LeftContent.css';
import Social from "../Social/Social";

const LeftContent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 100);
    }, []);

    return (
        <div className={`left-content ${animate ? 'animate' : ''}`}>
            <h1 className="left-title">This text should slide</h1>
            <div className="left-buttons">
                <button className="left-button">REEL</button>
                <button className="left-button">Speak out to us</button>
            </div>
            <div className={`social-container ${animate ? 'animate' : ''}`}>
                <Social />
            </div>
        </div>
    );
};

export default LeftContent;
