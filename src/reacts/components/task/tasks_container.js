import React from 'react';
import {Task} from './task';
import {Popup} from './task_controller';

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
            <div className="section" id="component1">
                <Component1 />
            </div>
            <div className="section" id="component2">
                <Component2 />
            </div>
            <div className="section" id="component3">
                <Component3 />
            </div>
        </div>
    );
}

function Component1() {
    return (
        <div className="component">
            {/* Component 1 content goes here */}
            <div>
                <Task
                    title="Task Header"
                    descr="This is description for the task"
                    btn_text="..."/>
            </div>
        </div>
    );
}

function Component2() {
    return (
        <div className="component">
            {/* Component 2 content goes here */}
            <div>
                <Task
                    title="Task Header 2"
                    descr="This is description for the task"
                    btn_text="..."/>
            </div>
            <Popup/>
        </div>
    );
}

function Component3() {
    return (
        <div className="component">
            {/* Component 3 content goes here */}
            <div>
                <Task
                    title="Task Header 3"
                    descr="This is description for the task"
                    btn_text="..."/>
            </div>
        </div>
    );
}
