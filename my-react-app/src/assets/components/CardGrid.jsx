import './../../styles/CardGrid.scss'; // Fichier SASS pour styliser la grille
import Card from '../components/Card.jsx'
import React, { useEffect, useState } from "react"; // Correct import statement


const CardGrid = () => {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        // Fetch data from the provided JSON link
        fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End-V2/P9-React-1/logements.json")
            .then((response) => response.json())
            .then((data) => setLogements(data.slice(0, 6))) // Take only the first 6 locations
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="card-grid">
            {logements.map((logement) => (
                <Card
                    key={logement.id}
                    title={logement.title}
                    image={logement.cover}
                    description={logement.description}
                />
            ))}
        </div>
    );
};

export default CardGrid;