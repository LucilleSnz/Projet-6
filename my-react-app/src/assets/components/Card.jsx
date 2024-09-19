import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Card.scss';

const Card = ({ id, title, cover }) => {
    return (
        <Link to={`/logement/${id}`} className="card">
            <img src={cover} alt={title} className="card-img" />
                <div className="card-title">{title}</div>
        </Link>
    );
};

export default Card;
