import React from 'react';
import {Task} from './task';

export const TaskContainer = () =>
{
    return (
        <div>
            <h1>The Container</h1>
            <Container/>
        </div>
    );
}

function Container() {
    return (
        <div className="container">
            <div className="section">
                <h2 className="title">Section 1</h2>
                <Component1 />
            </div>
            <div className="section">
                <h2 className="title">Section 2</h2>
                <Component2 />
            </div>
            <div className="section">
                <h2 className="title">Section 3</h2>
                <Component3 />
            </div>
        </div>
    );
}

function Component1() {
    return (
        <div className="component">
            {/* Component 1 content goes here */}
            <p className="title">...</p>
            <div>
                <Task/>
            </div>
        </div>
    );
}

function Component2() {
    return (
        <div className="component">
            {/* Component 2 content goes here */}
            <p className="title">...</p>
            <div>
                <Task/>
            </div>
        </div>
    );
}

function Component3() {
    return (
        <div className="component">
            {/* Component 3 content goes here */}
            <p className="title">...</p>
            <div>
                <Task/>
            </div>
        </div>
    );
}
