import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Nav = ({active, handleActive}) => {
    console.log("active is: " + active);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="mr-auto">
                <Link className="navbar-brand" to="/">
                    Google Book Search
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="collapse navbar-collapse" id="navbar-content">
                <ul className="navbar-nav ml-auto">
                    <li className={`nav-item ${active === "search" && "active"}`}>
                        <Link 
                            className="nav-link" 
                            to="/"
                            value={"search"}
                            onClick={handleActive}
                            >
                                Search {active === "search" && <span className="sr-only">(current)</span>}
                            </Link>
                    </li>
                    <li className={`nav-item ${active === "saved" && "active"}`}>
                        <Link 
                            className="nav-link" 
                            to="/saved"
                            value={"saved"}
                            onClick={handleActive}
                            >
                                Saved {active === "saved" && <span className="sr-only">(current)</span>}
                            </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}