import React, { useEffect, useState } from 'react';
import '../styles/Slideshow.scss';
import Collapse from '../components/Collapse';
import StarRating from './StarRating';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';


function Slideshow({ property }) {
    // Déclare une fonction nommée "Slideshow" qui prend une prop "property".
    // "property" est un objet contenant les informations sur une propriété à afficher dans le diaporama.

    const [currentIndex, setCurrentIndex] = useState(0);
    // Utilise le hook "useState" pour définir un état local "currentIndex" qui garde la trace de l'image actuelle affichée.
    // "setCurrentIndex" est une fonction pour mettre à jour cet état.

    const { pictures, title, host, location, tags, rating, description, equipments } = property;
    // Déstructure les propriétés de l'objet "property" pour accéder directement aux champs nécessaires.

    const toPrevious = () => {
        // Fonction pour naviguer vers l'image précédente.
        const isFirstSlide = currentIndex === 0;
        // Vérifie si l'image actuelle est la première.
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        // Si c'est la première image, on va à la dernière, sinon on décrémente l'indice actuel.
        setCurrentIndex(newIndex);
        // Met à jour l'état avec le nouvel indice.
    };

    const toNext = () => {
        // Fonction pour naviguer vers l'image suivante.
        const isLastSlide = currentIndex === pictures.length - 1;
        // Vérifie si l'image actuelle est la dernière.
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        // Si c'est la dernière image, on revient à la première, sinon on incrémente l'indice actuel.
        setCurrentIndex(newIndex);
        // Met à jour l'état avec le nouvel indice.
    };

    const HostName = ( { host }) => {
        // Composant fonctionnel "HostName" qui prend en prop un objet "host".
        const [firstName, lastName] = host.name.split(' ');
        // Déstructure le nom du propriétaire en séparant le prénom et le nom de famille.
        return (
            <p className='hostName'>
                <span>{firstName}</span>
                <span>{lastName}</span>
            </p>
        );
    };

    useEffect(() => {
        // Utilise le hook "useEffect" pour exécuter un effet secondaire.
        window.scrollTo(0, 0);
        // Fait défiler la fenêtre vers le haut lors du rendu du composant.
    }, []);

    return (
        // Retourne le JSX qui définit l'apparence et le comportement du composant "Slideshow".
        <div className="slideshow">
            <div className="carousel-container">
                <img className="carousel-picture" src={pictures[currentIndex]} alt="Slideshow" />
                {/* Affiche l'image actuelle du diaporama en utilisant l'indice "currentIndex" pour accéder à "pictures". */}

                {pictures.length > 1 && (
                    // Vérifie si il y a plus d'une image.
                    <>
                        <img src={leftArrow} onClick={toPrevious} className="left-arrow" alt="left-arrow" />
                        {/* Affiche une flèche gauche qui, au clic, appelle la fonction "goToPrevious". */}
                        <img src={rightArrow} onClick={toNext} className="right-arrow" alt="right-arrow" />
                        {/* Affiche une flèche droite qui, au clic, appelle la fonction "goToNext". */}
                        <div className="numeration">
                            {currentIndex + 1} / {pictures.length}
                            {/* Affiche le numéro de l'image actuelle sur le total d'images. */}
                        </div>
                    </>
                )}
            </div>
            <div className="carousel-description">
                {/* Section pour afficher les informations sur la propriété. */}
                <div className="carousel-description--infos-part">
                    <div className="title-and-location-and-tags">
                        <h2>{title}</h2>
                        {/* Affiche le titre de la propriété. */}
                        <p>{location}</p>
                        {/* Affiche la localisation de la propriété. */}
                        <div className='tags-container'>
                            <ul className='tags-list'>
                                {tags.map(tag => (
                                    <li className='tags-list-tag' key={tag}>{tag}</li>
                                    // Pour chaque tag, crée un élément de liste avec la classe "tags-list-tag".
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="host-infos-and-ratings">
                        {/* Section pour afficher les informations sur l'hôte et les notes. */}
                        <div className="host-infos">
                            <HostName host={host} />
                            {/* Affiche le nom de l'hôte en utilisant le composant "HostName". */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                                {/* Définit un élément SVG pour afficher l'image de l'hôte dans un cercle. */}
                                <defs>
                                    <pattern id="imgpattern" patternUnits="userSpaceOnUse" width="64" height="64">
                                        <image href={host.picture} x="0" y="0" width="64" height="64" />
                                        {/* Utilise l'image de l'hôte comme motif de remplissage. */}
                                    </pattern>
                                </defs>
                                <circle cx="32" cy="32" r="32" fill="url(#imgpattern)" />
                                {/* Crée un cercle avec le motif de l'image de l'hôte comme remplissage. */}
                            </svg>
                        </div>
                        <div className="ratings">
                            <StarRating rating={rating} />
                            {/* Affiche les étoiles de notation en utilisant le composant "StarRating". */}
                        </div>
                    </div>
                </div>
                <div className='collapse-container'>
                    <Collapse title="Description" children={description} />
                    {/* Affiche une section pour la description de la propriété, utilisant le composant "Collapse". */}
                    <Collapse title="Équipements" children={
                        <ul className='equipments-list'>
                            {equipments.map(equipment => (
                                <li className='equipments-list-equipment' key={equipment}>{equipment}</li>
                                // Pour chaque équipement, crée un élément de liste avec la classe "equipments-list-equipment".
                            ))}
                        </ul>
                    } />
                    {/* Affiche une section pour les équipements, également en utilisant le composant "Collapse". */}
                </div>
            </div>
        </div>
    );
}

export default Slideshow;