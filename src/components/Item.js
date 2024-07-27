import {useContext, useState} from "react";
import "../assets/styles/Item.css";
import CustomButton from "./CustomButton";
import {DataContext} from "../context/DataContext";

import block4 from '../assets/img/items/block1.jpg';

export default function Item({material, name, image}) {
    const {plusItem, minusItem, getItemCount} = useContext(DataContext);
    const [number, setNumber] = useState(getItemCount(material, name));

    function plusOne() {
        setNumber(number + 1);
        plusItem ({material: material, name: name});
    }

    function minusOne() {
        if (number > 0) {
            setNumber(number - 1);
            minusItem ({material: material, name: name});
        }
    }

    return (
        <div className={"block"}>
            <div className={"image-block"} onClick={plusOne}>
                <img className={"image"} src={block4} alt={"..."}/>
                {number > 0 && (
                    <div className={"number-block"} style={{padding: number > 9 ? '5px 6.5px' : '5px 10px'}}>
                        <span className={"number"}>{number}</span>
                    </div>
                )}
            </div>
            <div style={{fontFamily: 'Calibri, sans-serif'}}>
                <a className={'text-style'}>{name}</a>
            </div>
            <div className={"buttons-block"}>
                {number > 0 ? (
                    <>
                        <CustomButton fun={minusOne} text="-" w={"45px"}/>
                        <div style={{margin: '0 0 0 10px'}}>
                            <CustomButton fun={plusOne} text="+" w={"45px"}/>
                        </div>
                    </>
                ) : (
                    <CustomButton fun={plusOne} text="Add" w={"100px"}/>
                )}
            </div>
        </div>
    );
}
