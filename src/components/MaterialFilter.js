import React from 'react';

const MaterialFilter = ({ materials, selectedMaterial, onSelectMaterial }) => {
    return (
        <div className="material-filter">
            <h3>Materials</h3>
            <ul>
                {materials.map((material, index) => (
                    <li key={index} className={selectedMaterial === material ? 'selected' : ''}
                        onClick={() => onSelectMaterial(material)}>{material}</li>
                ))}
            </ul>
        </div>
    );
};

export default MaterialFilter;
