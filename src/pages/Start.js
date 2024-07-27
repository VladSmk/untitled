import {useContext, useEffect} from "react";
import {PageContext} from "../context/PageContext";
import "../assets/styles/Start.css";
import { tg } from "../App";

export default function Start() {
    const { setPage } = useContext(PageContext);

    useEffect(() => {
        tg.MainButton.text = "Start";
        tg.MainButton.onClick(setPage(2));
        tg.MainButton.show();
        tg.BackButton.hide();
    }, []);

    return (
        <div className="start-page">
            <h2>Calculator</h2>
            <h2>LEGOTM</h2>
        </div>
    );
}
