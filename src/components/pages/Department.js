import React from "react";
import employeesData from "../../employee";
import InfoCard from "../InfoCard";

function Department () {
    function compare (a,b) {
        let deptA = a.department.toUpperCase();
        let deptB = b.department.toUpperCase();

        let comparison = 0;
        if (deptA > deptB) {
            comparison = 1;
        } else if (deptA < deptB) {
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

export default Department;