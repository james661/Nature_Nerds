import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h4 className="small-nav-logo">
                    <span>NATURE. </span> <br /> <span>NERDS. </span> <br />
                    <span></span>
                </h4>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse container-fluid"
                    id="navbarNav"
                    style={{ justifyContent: 'space-between' }}
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link"
                            >
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/search"
                                className="nav-link"
                            >
                                SEARCH
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/aboutus"
                                className="nav-link"
                            >
                                ABOUT US
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/login"
                                className="nav-link"
                            >
                                LOGIN
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/signup"
                                className="nav-link"
                            >
                                SIGNUP
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link
                                to="/savedparks"
                                className="nav-link"
                            >
                                SAVED PARKS
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
