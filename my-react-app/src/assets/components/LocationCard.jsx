import React from "react";

function LocationCard({ title, imageUrl, description, location, price_per_night }) {
    console.log(imageUrl);
    return (
        <div className="card">
            <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{location}</p>
                <p>Prix par nuit: {price_per_night}€</p>
            </div>
        </div>
    );
}

export default LocationCard;