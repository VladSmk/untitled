import '../assets/styles/Final.css';
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import useCalculator from "../hooks/useCalculator";
import { PageContext } from "../context/PageContext";

export default function Final() {
    const { setPage } = useContext(PageContext);
    const { deleteData } = useContext(DataContext);
    const { selectedExplosives, selectedItems } = useContext(DataContext);
    const { list, sulfur } = useCalculator(selectedExplosives, selectedItems);

    function tryAgain() {
        deleteData();
        setPage(2);
    }

    return (
        <div className="audit-page">
            <h2 className="audit-header">Result</h2>
            <div className="audit-container">
                <ul className="audit-list">
                    {list.map((item, index) => (
                        <li key={index} className="audit-list-item">{item}</li>
                    ))}
                </ul>
            </div>
            <div className="navigate-button-block">
                <button className="navigate-button" onClick={tryAgain}>Try Again</button>
            </div>
            <div className="sulfur-info">
                Total sulfur: {sulfur}
            </div>
        </div>
    );
}
