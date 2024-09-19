import React, { useState } from 'react';
import './../../styles/Collapse'; 

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);  // Inverser l'état d'ouverture
    };

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggleCollapse}>
                <h3>{title}</h3>
                <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </div>
            <div className={`collapse-content ${isOpen ? 'show' : ''}`}>
                {children}
            </div>
        </div>
    );
}

export default Collapse;