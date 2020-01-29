import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                    <h1 className="display-4">{props.children}</h1>
                    <p className="lead">{props.message}</p>
            </div>
        </div>
    )
};

export default Header;