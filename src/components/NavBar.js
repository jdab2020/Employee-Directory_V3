import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import employeesData from "../employee";
import SearchContext from "../contexts/SearchContext";
import FilteredContext from "../contexts/FilteredContext"


function NavBar(props) {
    const onePerson = useContext(FilteredContext)
    const data = useContext(SearchContext)
    // console.log(onePerson.filter,"==========one person========")
    // console.log(props)
    // console.log(props.setSearch)
    // console.log(props.setFiltered)
    function employeeSearch(props) {
        let filter = employeesData.filter(employee => employee.name.toLocaleLowerCase().includes(data.name))
        // console.log(filter)
        // console.log(props)
        props.setFiltered({  filter  })
    }

    const handleClick = event => {
        event.preventDefault();
        employeeSearch(props);
    }

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
            <form className="form-inline my-2 my-lg-0" >
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                    onChange={event => props.setSearch({ name: event.target.value })}
                />
                <button onClick={handleClick} className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
        </ul>
    )
}

export default NavBar;