import React, {useState} from "react";
import {EditPopup} from "./menus";

export const Task = ({id, title, description, btn_text, type}) =>
{
    const taskClassName = getTaskClassName(type);
    const [task, setTask] = useState({id: id, title: title, description: description, type: type});

    const [isEditShowing, setEditShow] = useState(false);
    //const task = ;
    //console.log("Within the task: " + task.id)
    const editEventHandler = () =>{
        setEditShow(true);
    }
    return (
        <div id={id} className={taskClassName}>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={editEventHandler}>Edit</button>
            {isEditShowing && (
                <EditPopup task={task} setTask={setTask} isEditShowing={isEditShowing} setEditShow={setEditShow} />
            )}
        </div>
    );
};

function getTaskClassName(type)
{
    switch (type)
    {
        case 'To Do':
            return "task_toDo";
        case 'In Progress':
            return "task_inProgress"
        case 'Done':
            return "task_done"
        default:
            return "task";
    }
}