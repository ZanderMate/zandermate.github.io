import React from "react";
import "../styles/style.css";

const Navbar = () => {
    return (
        <nav class="navbar navbar-default bg-dark">
            <h1 class="navbar-brand">
                Alex's Personal MtG Hub
         </h1>
            <ul className="nav">
                <li>
                    <a href="index.html" className="navbarLinks">Hub Home</a>
                </li>
                <li>
                    <a href="commander.html" className="navbarLinks">Commander</a>
                </li>
                <li>
                    <a href="modern.html" className="navbarLinks">Modern</a>
                </li>
                <li>
                    <a href="standard.html" className="navbarLinks">Standard</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
