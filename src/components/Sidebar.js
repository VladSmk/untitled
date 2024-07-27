import React from 'react';
import '../assets/styles/Sidebar.css';

const Sidebar = ({ categories, onSelect, selectedCategory }) => {
    return (
        <div className="sidebar-container">
            <div className="categories">
                {Object.keys(categories).map((category, index) => (
                    <div key={index} className={`category ${selectedCategory === category ? 'selected' : ''}`}
                        onClick={() => onSelect(category)}>{category}</div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
