//Import hook function to manage the state of a variable.
import React, { useState } from 'react';
import LoginPage from "./login";

export const Counter = () =>
{
    const [counter, setCounter] = useState(0);

    function increment()
    {
        setCounter(counter + 1);
    }

    return(
        <div>
            <h1>Counter</h1>
            <p>Count: {counter}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
