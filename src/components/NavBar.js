import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {

    const location = useLocation();

    return (

        <ul className="nav nav-tabs nav-pills nav-fill bg-light">
            <li className="nav-item">
                <Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/department" className={location.pathname === "/department" ? "nav-link active" : "nav-link"}>
                    Department
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/role" className={location.pathname === "/role" ? "nav-link active" : "nav-link"}>
                    Role
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/damage" className={location.pathname === "/damage" ? "nav-link active" : "nav-link"}>
                    Damage
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/add" className={location.pathname === "/add" ? "nav-link active" : "nav-link"}>
                    Add new employee
                </Link>
            </li>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
        </ul>
    )
}

export default NavBar;

{/* <nav className="navbar navbar-light" style={{ backgroundColor: "teal" }}>
                <span className="navbar-brand mb-0 h1">Mahouka Koukou no Rettousei</span>
            </nav> */}