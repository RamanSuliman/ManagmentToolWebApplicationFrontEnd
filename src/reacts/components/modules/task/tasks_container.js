import React from 'react';
import {SectionRender} from './controller';
import {AddNewTask} from "./operations";

export const TaskContainer = () =>
{
    return (
        <div className="mainSection">
            <h1>The Container</h1>
            <AddNewTask/>
            <br/>
            <SectionRender/>
        </div>
    );
}