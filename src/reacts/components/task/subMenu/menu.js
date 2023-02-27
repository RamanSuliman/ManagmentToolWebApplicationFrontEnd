import React from 'react';

export const Menu = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div>
            <input type="text" placeholder="Enter text here" />
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};