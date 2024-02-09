import React, { useContext } from "react";
import { UserContext } from "./CompA";

function CompC() {
    const user = useContext(UserContext);
    return (
        <div className="box">
            <h1>Component C</h1>
            <h2>Byr { user}</h2>
        </div>
    )
}

export default CompC;