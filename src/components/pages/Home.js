import React from "react";
import InfoCard from "../InfoCard"
import employeesData from "../../employee.js"

function Home() {
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

    return (
        <div style={{ backgroundColor: "teal" }} className="row">
            {employee}
        </div>
    )
}
export default Home;