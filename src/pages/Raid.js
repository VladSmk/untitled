import "../assets/styles/Raid.css";
import {useContext, useEffect, useState} from "react";
import {PageContext} from "../context/PageContext";
import { data } from "../data/itemsData";
import Item from "../components/Item";
import { getUniqueMaterials } from "../utils/DataHelper";
import {DataContext} from "../context/DataContext";
import {tg} from "../App";

export default function Raid() {
    const { selectedItems } = useContext(DataContext);
    const { nextPage, prevPage } = useContext(PageContext);
    const materials = getUniqueMaterials(data);
    const [material, setMaterial] = useState();

    useEffect(() => {
        tg.MainButton.text = "Next";
        tg.MainButton.onClick(nextPage);
        tg.BackButton.text = "Back";
        tg.BackButton.onClick(prevPage);
        tg.BackButton.show();
    }, [nextPage]);

    useEffect(() => {
        if (selectedItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [selectedItems]);

    return (
        <div className={"raid-main-block"}>
            <div className={"title-block"}>
                <h2 className={"title-style"}>What do you want to blow up?</h2>
            </div>
            <div className="material-button-container">
                {materials.map((m) => (
                    <button key={m} onClick={() => setMaterial(m)}>{m}</button>
                ))}
            </div>
            <div className="items-container">
                {data.map((item) => (
                    item.material === material && (
                        <div className="item">
                            <Item material={item.material} name={item.name} path={item.path}/>
                        </div>
                    )
                ))}
            </div>
            {/*<div className="navigate-button-block">*/}
            {/*    <button className="navigate-button" onClick={prevPage}>Prev</button>*/}
            {/*    {selectedItems.length > 0 && (*/}
            {/*        <button className="navigate-button" onClick={nextPage}>Next</button>*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>
    );
}
