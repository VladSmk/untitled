import '../assets/styles/Check.css';
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { PageContext } from "../context/PageContext";
import "../assets/styles/Check.css";

export default function Check() {
    const { prevPage, nextPage } = useContext(PageContext);
    const { selectedItems, selectedExplosives } = useContext(DataContext);

    return (
        <div className="check-page">
            <h2>Check if everything is correct</h2>
            <div className="selected-section">
                <h3>Selected Explosives</h3>
                <ul>
                    {selectedExplosives.map((exp, index) => (
                        <li key={index}>{exp}</li>
                    ))}
                </ul>
            </div>
            <div className="selected-section">
                <h3>Selected Items</h3>
                <ul>
                    {selectedItems.map((item, index) => (
                        <li key={index}>
                            <span className="item-left">{item.material + " " + item.name}</span>
                            <span className="item-right">{item.number}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navigate-button-block">
                <button className="navigate-button" onClick={prevPage}>Prev</button>
                <button className="navigate-button" onClick={nextPage}>Next</button>
            </div>
        </div>
    );
}
