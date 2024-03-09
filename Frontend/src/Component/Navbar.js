import React from "react";
import { useNavigate } from "react-router-dom";
import "../Component/Navbar.css"

export default function Navbar() {
    let auth = localStorage.getItem("token");
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    }

    return (

        <div className="main">
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" aria-current="page" href="/">Yndigo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {auth ?
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/logged">Logged-in</a>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/profile">profile</a>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" onClick={logout} href="/login">Signout</a>
                                </li>
                            </ul>
                        </div>

                        :
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/login">Login</a>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </nav>
        </div>
    )
}

