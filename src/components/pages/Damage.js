import React from "react";
import employeesData from "../../employee";
import InfoCard from "../InfoCard";

function Damage () {
    function compare (a,b) {
        let damageA = a.damage;
        let damageB = b.damage;

        let comparison = 0;
        if (damageA > damageB) {
            comparison = 1;
        } else if (damageA < damageB) {
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

export default Damage;