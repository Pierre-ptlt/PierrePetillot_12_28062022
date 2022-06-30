import "../style/lateralBar.css";
import icons from "../assets/images/icons.png";

function LateralBar()
{
    return (
        <div className="lateral-bar">
            <img src={icons} alt="icons" className="icons" />
            <p className="copyright">Copyright, SportSee 2020</p>
        </div>
    )
}

export default LateralBar;