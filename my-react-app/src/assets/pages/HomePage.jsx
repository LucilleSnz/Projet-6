import React from 'react';
import Banner from './../components/Banner.jsx'; // Importation du composant Banner
import CardGrid from './../components/CardGrid.jsx'; // Importation du composant pour les cartes
import './../../styles/HomePage.scss'; // Importation du fichier SASS
import LocationCard from '.././components/LocationCard.jsx';
import locations from '../../locations.json';
import bannerImage from './../images/IMG.png'; // L'image de la bannière
import logoImage from './../images/LOGO.png';


function HomePage() {    
    return (
        <div className="homepage">
            <header className="header">
                <img src={logoImage} alt="Kasa Logo" className="logo" />
        <nav>
            <a href="/">Accueil</a>
            <a href="/about">A Propos</a>
        </nav>

        </header>
        <Banner imageUrl={bannerImage} text="Chez vous, partout et ailleurs" />

            <section className="locations-section">
                <CardGrid />

        <div className="location-list">
            {locations.map(location => (
                <LocationCard
                key={location.id}
                title={location.title}
                description={location.description}
                imageUrl={location.cover}
                price_per_night={location.price_per_night}
                location={location.location}
                />
            ))}
        </div>
            </section>
        </div>
    );
}

export default HomePage;