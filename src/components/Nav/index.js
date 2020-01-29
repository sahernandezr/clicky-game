import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <ul className="nav">
            <li className="navbar-brand" href="https://sahernandezr.github.io/Responsive-Portfolio/" target="_blank">Sandra Hernández</li>
            <li className="nav-item">Score: {props.score} | Top score: {props.topScore}</li>
        </ul>
    )
};

export default Nav;