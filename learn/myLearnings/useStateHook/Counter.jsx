import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    
    const decrement = () => {
        setCount(count - 1);
    }
    
    const reset = () => {
        setCount(0);
    }
    return (
        <>
            <p>{ count}</p>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>

        </>
    )
}

export default Counter;