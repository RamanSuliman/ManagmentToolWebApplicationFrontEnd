import {TaskContainer} from "../modules/task/tasks_container";
import React from "react";

export function Body(){
    return (
        <div id="body">
            <h1 className="sidebar">Menu</h1>
            <TaskContainer/>
        </div>
    );
}