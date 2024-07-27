import "../assets/styles/SelectBoost.css";
import {useContext, useEffect} from "react";
import {PageContext} from "../context/PageContext";
import Loading from "../components/Loading";
import {tg} from "../App";

export default function SelectBoost() {
    const { nextPage, setPage } = useContext(PageContext);

    useEffect(() => {
        tg.MainButton.text = "Next";
        tg.MainButton.onClick(nextPage);
        tg.MainButton.show();

        tg.BackButton.text = "Back";
        tg.BackButton.onClick(setPage(2));
        tg.BackButton.show();
    }, [nextPage, setPage]);

    return (
        <div className="boost-page">
            <h2>Boost Page</h2>
            <Loading/>
            {/*<div className="navigate-button-block">*/}
            {/*    <button className="navigate-button" onClick={prevPage}>Prev</button>*/}
            {/*    <button className="navigate-button" onClick={nextPage}>Next</button>*/}
            {/*</div>*/}
        </div>
    );


}

