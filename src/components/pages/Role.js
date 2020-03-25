import React, { useContext } from "react";
import employeesData from "../../employee";
import InfoCard from "../InfoCard";
import FilteredContext from "../../contexts/FilteredContext";

function Role() {
    const filtered = useContext(FilteredContext)
    function compare(a, b) {
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

    let searchProfile;
    if (filtered.filter) {
        let employee = filtered.filter
        searchProfile = <InfoCard employee={employee[0]} />
    }

    return (
        <div style={{ backgroundColor: "teal" }} className="row">
            {!searchProfile ? employee : searchProfile}
        </div>
    )
}

export default Role;