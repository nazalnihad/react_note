import React, { useState } from "react";

function MyComponent() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };
        setCars(c => [...cars, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

    function handleRemoveCar(index) {
        setCars(c=>c.filter((_,i)=>i!==index))
    }

    function handleYearChange(event) {
        setCarYear(event.target.value)
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value)
    }

    function handleModelChange(event) {
        setCarModel(event.target.value)
    }

    return (
        <div>
            <h2>List of cars </h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={()=>handleRemoveCar(index)}>
                        {car.make} {car.model} {car.year}
                </li>
                )}
            </ul>
            <input type="number" name="" id="" value={carYear} onChange={handleYearChange}/>
            <input type="text" name="" id="" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/>
            <input type="text" name="" id="" value={carModel} onChange={handleModelChange} placeholder="Enter car model"/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}

export default MyComponent;