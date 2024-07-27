import React from 'react';
import '../assets/styles/Explosive.css';

const Explosive = ({ name, image, onClick, selected }) => {
    return (
        <div className={`explosive-item ${selected ? 'selected' : ''}`} onClick={onClick}>
            <img src={image} alt={name} />
            <div className="explosive-name">{name}</div>
        </div>
    );
};

export default Explosive;
