import React from 'react';
import '../assets/styles/Explosive.css';

const Explosive = ({ name, pathToImage, onClick, selected }) => {
    return (
        <div
            className={`explosive-item ${selected ? 'selected' : ''}`}
            onClick={onClick}
        >
            <img src={process.env.PUBLIC_URL + "/img/exp/" + pathToImage} alt={name} />
            <div className="explosive-name">{name}</div>
        </div>
    );
};

export default Explosive;
