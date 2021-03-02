import React from "react";
import { NavLink } from "react-router-dom";
function AddPhoneNo() {
    return (
        <div className="container">
            <input
                type="text"
                placeholder="add phone no..."
                className="input"
            ></input>
            <NavLink to="/ready">
                <button className="btn">Add Phone no and Save</button>
            </NavLink>
        </div>
    );
}
export default AddPhoneNo;
