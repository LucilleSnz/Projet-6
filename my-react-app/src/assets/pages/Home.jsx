import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import Banner from '../components/Banner.jsx';


const Home = () => {
const [logements, setLogements] = useState([]);

useEffect(() => {
    fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json') 
    .then((response) => response.json())
    .then((data) => setLogements(data))
    .catch((error) => console.error('Erreur lors du chargement du fichier JSON :', error));
}, []);

return (
    <div className="home">
        <Banner imageUrl="/path/to/banner-image.jpg" text="Chez vous, partout et ailleurs" />
    <div className="logement-list">
        {logements.map((logement) => (
        <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
        ))}
    </div>
    </div>
    );
};

export default Home;