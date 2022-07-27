import React from 'react';
import { DotLoader } from "react-spinners";
import logo from "../assets/images/icon.png"

export default function Loader() {
    return (
        <div style={{
            height: "100vh",
            background: "#f5f5f5",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <img src={logo} alt="Bongola Chat logo" style={{ width: "50px", marginBottom: "30px" }} />
            <DotLoader color={"blue"} loading={true} size={50} />
        </div>
    );
}