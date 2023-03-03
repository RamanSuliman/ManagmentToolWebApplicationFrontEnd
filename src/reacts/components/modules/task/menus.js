import React, {useEffect, useRef, useState} from 'react';

export function AddPopup({eventHandler, closeHandler})
{
    const [isVisible, setIsVisible] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [taskType, setTaskType] = useState('');
    const menuRef = useRef(null);

    const handleAddTask = () => {
        console.log(taskType)
        const targetSection = getTargetSection(taskType);
        if (targetSection) {
            eventHandler({title, description,taskType}, targetSection);
            setIsVisible(false);
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

    const innerCloseHandler = () =>{
        closeHandler();
        setIsVisible(false);
    }

    useEffect(() =>
    {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                innerCloseHandler();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div>
            {isVisible && (
                <div className="popup" ref={menuRef}>
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
                    <button onClick={innerCloseHandler}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export function EditPopup({task, setTask, isEditShowing, setEditShow})
{
    const editMenuRef = useRef(null);

    console.log(isEditShowing);
    const innerCloseHandler = () =>{
        setEditShow(!isEditShowing);
    }

    useEffect(() =>
    {
        const handleClickOutside = (event) => {
            if (editMenuRef.current && !editMenuRef.current.contains(event.target)) {
                innerCloseHandler();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [editMenuRef]);

    const handleAddTask = ()=>{
        console.log(task.id + " # " + task.title + " # " + task.description + " # " + task.type);
    }

    return (
        <div>
            {isEditShowing && (
                <div className="popup" ref={editMenuRef}>
                    <h2>Edit Task</h2>
                    <label>
                        Title:
                        <input type="text" value={task.title} onChange={(event) => {
                            setTask(prevTask => ({ ...prevTask, title: event.target.value }))}} />
                    </label>
                    <label>
                        Description:
                        <textarea value={task.description} onChange={(event) => {
                            setTask(prevTask => ({ ...prevTask, description: event.target.value }))}}/>
                    </label>
                    <label>
                        Task Type:
                        <select value={task.type} onChange={(event) => {
                            setTask(prevTask => ({ ...prevTask, type: event.target.value }))}}>
                            <option value="">Select a task type</option>
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </label>
                    <button onClick={handleAddTask}>Add Task</button>
                    <button onClick={innerCloseHandler}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export function RemovePopup()
{
    return (
        <div>

        </div>
    );
}