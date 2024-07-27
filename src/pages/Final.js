import '../assets/styles/Final.css';
import {useContext, useEffect} from "react";
import { DataContext } from "../context/DataContext";
import useCalculator from "../hooks/useCalculator";
import { PageContext } from "../context/PageContext";
import {tg} from "../App";

export default function Final() {
    const { setPage } = useContext(PageContext);
    const { deleteData } = useContext(DataContext);
    const { selectedExplosives, selectedItems } = useContext(DataContext);
    const { list, sulfur } = useCalculator(selectedExplosives, selectedItems);

    function handleTryAgain (){
        deleteData();
        setPage(2);
    }

    useEffect(() => {
        tg.MainButton.text = "Try Again";
        tg.MainButton.onClick(handleTryAgain);
        tg.MainButton.show();

        tg.BackButton.hide();
    }, []);

    return (
        <div>
            <div className="title-block">
                <h2 className="title-style">Result</h2>
            </div>
            <div className="audit-container">
                <ul className="audit-list">
                    {list.map((item, index) => (
                        <li key={index} className="audit-list-item">{item}</li>
                    ))}
                </ul>
            </div>
            <div className="sulfur-info">
                Total sulfur: {sulfur}
            </div>
        </div>
    );
}
