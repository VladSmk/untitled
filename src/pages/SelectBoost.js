import "../assets/styles/SelectBoost.css";
import {useContext} from "react";
import {PageContext} from "../context/PageContext";
import Loading from "../components/Loading";

export default function SelectBoost() {
    const { nextPage, prevPage } = useContext(PageContext);

    return (
        <div className="boost-page">
            <h2>Boost Page</h2>
            <Loading/>
            <div className="navigate-button-block">
                <button className="navigate-button" onClick={prevPage}>Prev</button>
                <button className="navigate-button" onClick={nextPage}>Next</button>
            </div>
        </div>
    );


}

