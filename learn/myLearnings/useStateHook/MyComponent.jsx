import React,{useState} from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const updateName = () => {
        setName('Babu')
    }
    const updateAge = () => {
        setAge(age+1)
    }
    return (
        <div>
            <p>Name : {name} </p>
            <button onClick={updateName}>set Name</button>
            <p>Age : {age} </p>
            <button onClick={updateAge}>set Age</button>
        </div>
    )
}
export default MyComponent;