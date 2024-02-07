import React, { useState } from "react";

function colorPicker() {
    const [color, setColor] = useState("#ffffff")
    function changeColor(event) {
        setColor(event.target.value);
    }

    return (
        <>
        <div style={{backgroundColor:color, width:"10vw", height:"20vh"}}>
                <p>You selecet : { color}</p>
            </div>
        <label htmlFor="">Select color</label>
        <input type="color" name="" id="" value={color} onChange={changeColor}/>
        </>
    )
}
export default colorPicker;