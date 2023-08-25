import { useState } from "react";
import "./Card.css"






const Crad = ({ title, par, id ,val}) => {
    const [clicked1, setClick] = useState(false);
    const clicked = () => {
        let btn = document.getElementById(id);
        if (clicked1 === false) {
            btn.style.backgroundColor = "rgba(0,100,0,0.9)";
            setClick(true);
        }
        else {
            setClick(false);
            btn.style.backgroundColor = "rgba(0,0,0,0.5)";
        }
    }
    return <button alt="asnjkd" id={id} className="Card" onClick={clicked}>
        <h3>{title}</h3>
        <p>{par}</p>
        <p>{val}</p>
    </button>;



}
export default Crad;