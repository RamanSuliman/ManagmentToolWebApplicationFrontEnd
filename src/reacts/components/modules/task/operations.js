import React, {useState} from 'react';
import {Task} from "./task";
import {AddPopup} from "./menus"
import ReactDOM from "react-dom";

export const AddNewTask = () => {
    const [showMenu, setShowMenu] = useState(false);

    const showMenuWindow= () => {
        setShowMenu(!showMenu);
    };
    const handleClick = (task, targetSection) => {
        AddTask({title: task.title, description: task.description, type: task.taskType}, targetSection);
        showMenuWindow();
    };

    return (
        <div>
            <button onClick={showMenuWindow}>New</button>
            {showMenu && (
                <div>
                    <AddPopup eventHandler={handleClick} closeHandler={showMenuWindow}/>
                </div>
            )}
        </div>
    );
};

function AddTask(task, targetSection) {
    const taskElement = <Task title={task.title} description={task.description} type={task.type} />;
    const container = document.createElement('div');
    //Render the task into the container.
    const root = ReactDOM.createRoot(container);
    root.render(taskElement);
    targetSection.appendChild(container);
}