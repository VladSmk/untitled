import {useContext} from "react";
import {DataContext} from "../context/DataContext";
import {PageContext} from "../context/PageContext";
import {explosiveImages, explosives} from "../data/explosivesData";
import Explosive from "../components/Explosive";
import "../assets/styles/SelectExplosive.css";

export default function SelectExplosive() {
    const {selectedExplosives, setSelectedExplosives} = useContext(DataContext);
    const { nextPage } = useContext(PageContext);

    const handleClick = (exp) => {
        setSelectedExplosives(prevSelectedItems =>
            prevSelectedItems.includes(exp)
                ? prevSelectedItems.filter(item => item !== exp)
                : [...prevSelectedItems, exp]
        );
    };

    return (
        <div className="select-exp-container">
            <h2>Choose explosive you have</h2>
            <div className="explosives-grid">
                {explosives.map((exp, index) => (
                    <Explosive
                        key={index}
                        name={exp}
                        pathToImage={explosiveImages[index]}
                        onClick={() => handleClick(exp)}
                        selected={selectedExplosives.includes(exp)}
                    />
                ))}
            </div>
            <div className="navigate-button-block">
                <button className="navigate-button" onClick={nextPage}>Next</button>
            </div>
        </div>
    );
}