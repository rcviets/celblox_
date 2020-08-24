import React from "react";
import Image from "react-bootstrap/Image";
import WaveLogo from '../../images/wave.svg';
import "./style.css";

const Angle = () => {
    return (
        <div>
            <Image className="wave-image vw-100" src={WaveLogo} fluid />
        </div>
    );
};

export default Angle;