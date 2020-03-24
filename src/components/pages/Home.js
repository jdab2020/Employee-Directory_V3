import React, {useState} from "react";
import InfoCard from "../InfoCard"
import employeesData from "../../employee.js"

function Home(props) {
    console.log(props.search)
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

    // const employee = employeesData.sort(compare).map(employee =>
    //     <InfoCard key={employee.id} employee={employee} />)
    let employee;


    if (props.search !=="") {
        employee = employeesData.filter(employee => 
            <InfoCard employee={employee.name.toLowerCase().includes(props.search)} key={employee.id}/>)
    } else {
        employee = employeesData.sort(compare).map(employee =>
            <InfoCard key={employee.id} employee={employee} />)
    }

    return (
        <div style={{ backgroundColor: "teal" }} className="row">
            {employee}
        </div>
    )
}
export default Home;