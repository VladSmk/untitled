import "../assets/styles/CustomButton.css";
export default function CustomButton ({text, fun, w})  {
    return (<button className="button-84" role="button" style={{width: w}}
                    onClick={fun}>{text}</button>);
}