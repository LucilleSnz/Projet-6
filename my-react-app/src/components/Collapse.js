import React, { useState, useRef } from 'react';
import '../styles/Collapse.scss';
import Arrow from '../assets/arrow-logo.png';



function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false); // Etat local pour chaque liste déroulante
    const contentRef = useRef(null); // Référence pour obtenir la hauteur du contenu

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-button">
            <button className="collapse-title" onClick={toggleCollapse}>
                {title}
                <span className={`arrow ${isOpen ? 'open' : 'closed'}`}>
                    <img src={Arrow} alt="arrow logo" />
                </span>
            </button>
            <div
                className={`collapse-content ${isOpen ? 'open' : ''}`}
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
                    padding: isOpen ? '10px' : '0px', // Gère le padding en fonction de l'ouverture
                    transition: 'max-height 0.3s ease-in-out, padding 0.3s ease-in-out', // Animation douce sur le padding
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default Collapse;
 // Exporte le composant Collapse pour l'utiliser ailleurs.