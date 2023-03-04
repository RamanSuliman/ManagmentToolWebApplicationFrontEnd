import React, {useState} from "react";
import {EditPopup, RemovePopup} from "./menus";
import {FetchTasks} from "../ajax_calls/ajaxer";

export const Task = ({id, title, description, type}) =>
{
    const taskClassName = getTaskClassName(type);
    const [task, setTask] = useState({id: id, title: title, description: description, type: type});
    const [isEditMenuShowing, setEditMenuShowing] = useState(false);
    const [isTaskRemoved, setTaskRemove] = useState(false);
    const [isRemoveMenuShowing, setRemoveMenuShowing] = useState(false);

    const setEditMenuVisibility = ()=>{
        setEditMenuShowing(!isEditMenuShowing);
    }
    const setRemoveMenuVisibility = ()=>{
        console.log("Task");
        setRemoveMenuShowing(!isRemoveMenuShowing);
    }
    const removeTask = ()=>{
        setTaskRemove(!isTaskRemoved);
        console.log("Task with id: " + task.id + " and title: " + task.title + " is removed");
    }

    return (
        <div>
            {!isTaskRemoved && (
                <div id={task.id} className={taskClassName}>
                    <button onClick={setRemoveMenuVisibility}> X </button>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <button onClick={setEditMenuVisibility}>Edit</button>
                    {isEditMenuShowing && (<EditPopup task={task} setTask={setTask} isEditShowing={isEditMenuShowing} setEditShow={setEditMenuShowing} />)}
                    {isRemoveMenuShowing && (<RemovePopup confirmHandler={removeTask}/>)}
                </div>
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
