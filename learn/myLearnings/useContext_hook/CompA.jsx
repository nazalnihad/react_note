import CompB from "./CompB";
import react, { useState, createContext } from "react";

export const UserContext = createContext()
function CompA() {
    const [user,setUser] = useState("Babu")
    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>hello {user}</h2>
            <UserContext.Provider value={user}>
            <CompB/>
            </UserContext.Provider>
        </div>
    )
}

export default CompA;