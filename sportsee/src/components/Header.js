import "../style/header.css";
import logo from "../assets/images/logo.png";

function Header()
{
    return(
        <div className="header">
            <img src={logo} alt="logo" className="logo" />
            <div className="header-items-wrapper">
            <h2 className="header-item">Accueil</h2>
            <h2 className="header-item">Profil</h2>
            <h2 className="header-item">Réglages</h2>
            <h2 className="header-item">Communauté</h2>
            </div>
        </div>
    )
}

export default Header;