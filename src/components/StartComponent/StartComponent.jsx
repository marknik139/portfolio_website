import React from 'react';
import "./StartComponent.css"
import SideMedia from "./SideMedia/SideMedia";
import LeftContent from "./LeftContent/LeftContent";
const StartComponent = () => {
    return (
        <div>
            <LeftContent/>
            <SideMedia/>
        </div>
    );
};

export default StartComponent;