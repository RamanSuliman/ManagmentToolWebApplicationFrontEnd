import React, {useState} from 'react';
import {Task} from "./task";

export function SectionRender() {
    //Receive api data and convert it into json object.
    const {sections} = JSON.parse(data());
    return (
        <div className="taskContainer">
            {/*Map through the sections*/}
            {sections.map(section => {
                // For each section, add the title and
                return <Section key={section.id} id={section.id} title={section.title} tasks={section.tasks} />
            })}
        </div>
    );
}

function Section({id, title, tasks}) {
    return (
        <div className="section" id={id}>
            <h2 className="sectionTitle"> {title} </h2>
            {tasks.map(task => (
                <Task key={task.id} id={task.id} title={task.title} description={task.description} btn_text={task.btn_text} type={title} />
            ))}
        </div>
    );
}


function data(){
    const json = {
        "sections": [
            {
                "id": "section_ToDo",
                "title": "To Do",
                "tasks": [
                    {
                        "id": "1",
                        "title": "Task 1",
                        "description": "Description for Task 1",
                        "btn_text": "Button text for Task 1"
                    },
                    {
                        "id": "2",
                        "title": "Task 2",
                        "description": "Description for Task 2",
                        "btn_text": "Button text for Task 2"
                    }
                ]
            },
            {
                "id": "section_InProgress",
                "title": "In Progress",
                "tasks": [
                    {
                        "id": "3",
                        "title": "Task 3",
                        "description": "Description for Task 3",
                        "btn_text": "Button text for Task 3"
                    },
                    {
                        "id": "4",
                        "title": "Task 4",
                        "description": "Description for Task 4",
                        "btn_text": "Button text for Task 4"
                    }
                ]
            },
            {
                "id": "section_Done",
                "title": "Done",
                "tasks": [
                    {
                        "id": "5",
                        "title": "Task 5",
                        "description": "Description for Task 5",
                        "btn_text": "Button text for Task 5"
                    },
                    {
                        "id": "6",
                        "title": "Task 6",
                        "description": "Description for Task 6",
                        "btn_text": "Button text for Task 6"
                    }
                ]
            }
        ]
    }
    // Convert into json
    return JSON.stringify(json);
}


/*

function Tasks() {
    const tasks = [
        { title: "Task Header 1", descr: "This is description for task 1", btn_text: "..." },
        { title: "Task Header 2", descr: "This is description for task 2", btn_text: "..." },
        { title: "Task Header 3", descr: "This is description for task 3", btn_text: "..." }
    ];

    const taskComponents = [];

    tasks.forEach((task, index) => {
        taskComponents.push(
            <Task
                key={index}
                title={task.title}
                descr={task.descr}
                btn_text={task.btn_text}
            />
        );
    });

    return <div>{taskComponents}</div>;
}




export function Popup()
{
    const [showPopup, setShowPopup] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [taskType, setTaskType] = useState('');
    const handleAddTask = () => {
        console.log(taskType)
        const targetSection = getTargetSection(taskType);
        if (targetSection) {
            AddNewTask({ title, description, type: taskType, targetSection});
            setShowPopup(false);
        } else {
            console.error(`Invalid task type: ${taskType}`);
        }
    };

    const getTargetSection = (type) => {
        switch (type) {
            case 'To Do':
                return document.querySelector('#section_ToDo');
            case 'In Progress':
                return document.querySelector('#section_InProgress');
            case 'Done':
                return document.querySelector('#section_Done');
            default:
                return null;
        }
    };

    return (
        <div>
            <button onClick={() => setShowPopup(true)}>Add Task</button>
            {showPopup && (
                <div className="popup">
                    <h2>Add Task</h2>
                    <label>
                        Title:
                        <input
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </label>
                    <label>
                        Task Type:
                        <select value={taskType} onChange={(event) => setTaskType(event.target.value)}>
                            <option value="">Select a task type</option>
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </label>
                    <button onClick={handleAddTask}>Add Task</button>
                    <button onClick={() => setShowPopup(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
}


export function AddNewTask({ title, description, type, targetSection }) {
    const task = <Task title={title} descr={description} type={type} />;
    const container = document.createElement('div');
    //Render the task into the container.
    const root = ReactDOM.createRoot(container);
    root.render(task);
    targetSection.appendChild(container);
}
 */