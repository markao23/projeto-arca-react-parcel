import React from "react";
import './Home.css';
import LogoArca from "../assets/logo.png"

function Home() {
    return(
    <header>
        <nav className="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Pefil</a></li>
                <li><a href="#">Calendario</a></li>
                <li><a href="#">Pagamentos</a></li>
            </ul>
        </nav>
        <div className="logo-container">
            <img src={LogoArca} alt="logo" className="logo"/>
        </div>
    </header>
    )
}
export default Home;