import React from "react";
import ".././../styles/Banner.scss";


const Banner= ({ imageUrl, text }) => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
            {text && <h1 className="banner-text">{text}</h1>}
        </div>
    );
};

export default Banner;