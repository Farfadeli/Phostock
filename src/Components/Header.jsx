import React from "react";
import '../styles/header.css'
const Header = () => {
    return(
        <header>
            <div className="header_title"><a href="#"><h1>PHOSTOCK</h1></a></div>
            <div className="header_list">
                <ul>
                    <a href="">
                        <li>Mes photos</li>
                    </a>
                    <a href="">
                        <li>dernières photos</li>
                    </a>
                    <a href="">
                        <li>Albums</li>
                    </a>
                    <a href="">
                        <li>Créer albums</li>
                    </a>
                </ul>
            </div>
            <div className="header_btn">
                <a href="">Inscription</a>
                <a href="">Connexion</a>
            </div>
        </header>
    )
}

export default Header