import React from "react";
import './navBar.css';
import Logo from '../../imgs/logo.png';
export default function NavBar() {
    return (
        <div className="navContainerDiv">
            <nav className="navBar">
                <div className="logoAndName">
                    <img className="logo" src={Logo} alt="Logo" />
                    <h1>Meme Generator</h1>
                </div>
                <div className="type">
                    <p>React Course - Project 3</p>
                </div>
            </nav>
        </div>
    )

}