import React from "react";

function InfoCard(props) {
    return (
        <div className="col-sm-6 col-md-4 col-xl-3">
        <div className="card m-2 border-light" style={{ width: "18rem" }}>
            <img src={props.employee.img_url} className="card-img-top" style={{width:"100%",height:250}}/>
            <div className="card-body bg-info">
                <p className="card-text"><strong>{props.employee.name}</strong></p>
                <p className="card-text">Department: {props.employee.department}</p>
                <p className="card-text">Role: {props.employee.role}</p>
                <p className="card-text">Damage: {props.employee.damage}</p>
            </div>
        </div>
        </div>
    )
}

export default InfoCard;