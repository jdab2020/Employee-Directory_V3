import React, { useContext } from "react";
import InfoCard from "../InfoCard"
import employeesData from "../../employee.js"
import FilteredContext from "../../contexts/FilteredContext";

function Home(props) {
    const filtered = useContext(FilteredContext)
    // console.log(data)
    // console.log(filtered)
    // console.log(filtered.filter)
    function compare(a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        let comparison = 0;
        if (nameA > nameB) {
            comparison = 1;
        } else if (nameA < nameB) {
            comparison = -1;
        }
        return comparison;
    }

    const employee = employeesData.sort(compare).map(employee =>
        <InfoCard key={employee.id} employee={employee} />)

    let searchProfile;
    if (filtered.filter) {
        let employee = filtered.filter
        console.log(employee, "========employee insede search profile ==========")
        console.log(employee[0])
        searchProfile = employee.map(employee => <InfoCard key={employee.id} employee={employee} />)
        console.log(searchProfile)
    }

    return (
        <div style={{ backgroundColor: "teal" }} className="row">
            {!searchProfile ? employee : searchProfile}
        </div>
    )
}
export default Home;