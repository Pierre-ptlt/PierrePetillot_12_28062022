import "../style/header.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header()
{
    return(
        <div className="header">
            <Link className="logo" to="/"><img src={logo} alt="logo" className="logo" /></Link>
            <div className="header-items-wrapper">
            <Link to="/"><h2 className="header-item">Accueil</h2></Link>
            <h2 className="header-item">Profil</h2>
            <h2 className="header-item">Réglages</h2>
            <h2 className="header-item">Communauté</h2>
            </div>
        </div>
    )
}

export default Header;