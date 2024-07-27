import {useContext} from "react";
import {PageContext} from "./context/PageContext";
import Start from "./pages/Start";
import SelectExplosive from "./pages/SelectExplosive";
import SelectBoost from "./pages/SelectBoost";
import Raid from "./pages/Raid";
import Check from "./pages/Check";
import Final from "./pages/Final";
import './assets/styles/App.css';

import p1 from './assets/img/items/b1.png';
import p2 from './assets/img/exp/p1.jpg';

export const tg = window.Telegram.WebApp;

function App() {
    const { page } = useContext(PageContext);

    return (
        <>
            <img src={p1} alt={"..."}/>
            <img src={p2} alt={"..."}/>
            {/*{page === 1 ? (*/}
            {/*    <Start />*/}
            {/*) : page === 2 ? (*/}
            {/*    <SelectExplosive />*/}
            {/*) : page === 3 ? (*/}
            {/*    <SelectBoost />*/}
            {/*) : page === 4 ? (*/}
            {/*    <Raid />*/}
            {/*) : page === 5 ? (*/}
            {/*    <Check />*/}
            {/*) : (*/}
            {/*    <Final />*/}
            {/*)}*/}
        </>
    );
}

export default App;
