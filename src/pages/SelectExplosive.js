import {useContext, useEffect} from "react";
import {DataContext} from "../context/DataContext";
import {PageContext} from "../context/PageContext";
import {explosiveImages, explosives} from "../data/explosivesData";
import Explosive from "../components/Explosive";
import "../assets/styles/SelectExplosive.css";
import {tg} from "../App";

export default function SelectExplosive() {
    const {selectedExplosives, setSelectedExplosives} = useContext(DataContext);
    const { nextPage } = useContext(PageContext);

    useEffect(() => {
        tg.MainButton.text = "Next";
        tg.MainButton.onClick(nextPage);
        tg.BackButton.hide();
    }, []);

    useEffect(() => {
        if (selectedExplosives.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [selectedExplosives]);

    const handleClick = (exp) => {
        setSelectedExplosives(prevSelectedItems =>
            prevSelectedItems.includes(exp)
                ? prevSelectedItems.filter(item => item !== exp)
                : [...prevSelectedItems, exp]
        );
    };

    return (
        <div className="select-exp-container">
            <div className="title-block">
                <h2 className="title-style">Choose explosive you have</h2>
            </div>
            <div className="explosives-grid">
                {explosives.map((exp, index) => (
                    <Explosive
                        key={index}
                        name={exp}
                        image={explosiveImages[index]}
                        onClick={() => handleClick(exp)}
                        selected={selectedExplosives.includes(exp)}
                    />
                ))}
            </div>
        </div>
    );
}
