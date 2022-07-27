import React from 'react';
import { DotLoader } from "react-spinners";

export default function Loader() {
    return (
        <div style={{
            height: "100vh",
            background: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <DotLoader color={"blue"} loading={true} size={50} />
        </div>
    );
}