import React, { useState } from 'react';
import '../styles/Collapse.scss';
import Arrow from '../assets/arrow-logo.png';


function Collapse({ title, children }) { // Déclare un composant fonctionnel nommé Collapse qui prend en argument "title" et "children".
    const [isOpen, setIsOpen] = useState(false); // Déclare un état local "isOpen" avec la fonction "setIsOpen" pour le modifier. Il est initialisé à "false".

    const toggleCollapse = () => { // Déclare une fonction qui inverse la valeur de "isOpen".
        setIsOpen(!isOpen); // Modifie l'état : passe de "false" à "true" et vice-versa.
    };

    return ( // Retourne le JSX du composant.
        <div className="collapse-button"> {/* Définis une div avec une classe CSS pour gérer l'ensemble du composant. */}
            <button className="collapse-title" onClick={toggleCollapse}> {/* Un bouton qui déclenche "toggleCollapse" lors du clic. */}
                {title} {/* Affiche le titre passé en prop. */}
                <span className={`arrow ${isOpen ? 'open' : 'closed'}`}> {/* Ajoute une classe dynamique basée sur l'état "isOpen" (open/closed). */}
                    <img src={Arrow} alt='arrow logo'></img> {/* Affiche l'image de l'icône de flèche. */}
                </span>
            </button>
            {isOpen && ( // Si "isOpen" est vrai, le contenu est affiché.
                <div className="collapse-content"> {/* Div qui contient les enfants passés en prop. */}
                    {children} {/* Affiche le contenu passé à l'intérieur du Collapse. */}
                </div>
            )}
        </div>
    );
}

export default Collapse; // Exporte le composant Collapse pour l'utiliser ailleurs.