import React from "react";
import employeesData from "../../employee";
import InfoCard from "../InfoCard";

function Role () {
    function compare (a,b) {
        let roleA = a.role.toUpperCase();
        let roleB = b.role.toUpperCase();

        let comparison = 0;
        if (roleA > roleB) {
            comparison = 1;
        } else if (roleA < roleB) {
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

export default Role;