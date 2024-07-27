import '../assets/styles/Check.css';
import {useContext, useEffect} from "react";
import { DataContext } from "../context/DataContext";
import { PageContext } from "../context/PageContext";
import "../assets/styles/Check.css";
import {tg} from "../App";
export default function Check() {
    const { prevPage, nextPage } = useContext(PageContext);
    const { selectedItems, selectedExplosives } = useContext(DataContext);

    useEffect(() => {
        tg.MainButton.text = "Next";
        tg.MainButton.onClick(nextPage);
        tg.MainButton.show();

        tg.BackButton.text = "Back";
        tg.BackButton.onClick(prevPage);
        tg.BackButton.show();
    }, []);

    return (
        <div className="check-page">
            <div className={"title-block"}>
                <h2 className={"title-style"}>Check if everything is correct</h2>
            </div>
            <div className="select-blocks">
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
            </div>
            {/*<div className="navigate-button-block">*/}
            {/*    <button className="navigate-button" onClick={prevPage}>Prev</button>*/}
            {/*    <button className="navigate-button" onClick={nextPage}>Next</button>*/}
            {/*</div>*/}
        </div>
    );
}
