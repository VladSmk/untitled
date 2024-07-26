import {useContext} from "react";
import {PageContext} from "../context/PageContext";
import "../assets/styles/Start.css";

export default function Start() {
    const { nextPage } = useContext(PageContext);

    return (
        <div className="start-page">
            <h2>Calculator</h2>
            <h2>LEGOTM</h2>
            <div className="navigate-button-block">
                <a className="navigate-button" onClick={nextPage}>Next</a>
            </div>
        </div>
    );
}