import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
function ScanningQr() {
    return (
        <div>
            <div className="container">
                <div className="scanningQr-heading">Scanning-QR....</div>
                <NavLink to="/phnNo">
                    <button className="btn">Enter Phone number</button>
                </NavLink>
            </div>
        </div>
    );
}
export default ScanningQr;
