import React, { useContext } from "react";
import employeesData from "../../employee";
import InfoCard from "../InfoCard";
import FilteredContext from "../../contexts/FilteredContext";

function Damage () {
    const filtered = useContext(FilteredContext)
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
        let searchProfile;
        if (filtered.filter) {
            let employee = filtered.filter
            searchProfile = employee.map(employee => <InfoCard key={employee.id} employee={employee} />)
        }
    
    return (
        <div style={{ backgroundColor: "teal" }} className="row">
              {!searchProfile ? employee : searchProfile}
        </div>
    )
}

export default Damage;