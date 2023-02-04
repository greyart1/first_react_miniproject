
import React from "react"
import logo from "./React-icon.svg.png"


export default function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="div-logo"><img src={logo}  className="nav-logo"/></div>
                <h1 className="logoheading">ReactFacts</h1>
                <ul className="nav-items">
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Api</li>
                </ul>
            </nav>
        </header>

    )
}