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
    //Editing form elements
    const inputTitle = useRef(null);
    const inputDescription = useRef(null);
    const inputType = useRef(null);

    console.log(isEditShowing);
    const innerCloseHandler = () =>{
        setEditShow(!isEditShowing);
    }

    const validateUserInput = () =>
    {
        let hasErrors = false;
        const inputFields = [
            {
                ref: inputTitle,
                validate: value => value.trim().length >= 5 && value.trim().length <= 14
            },
            {
                ref: inputDescription,
                validate: value => value.trim().length >= 5 && value.trim().length <= 100
            },
            {
                ref: inputType,
                validate: value => value.trim().length > 0,
            },
        ];

        inputFields.forEach(({ ref, validate }) => {
            const value = ref.current.value;
            const isValid = validate(value);

            if (!isValid) {
                ref.current.classList.add('invalid');
                hasErrors = true;
            } else {
                ref.current.classList.remove('invalid');
            }
        });

        return !hasErrors;
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            outsideIsClicked(event, editMenuRef, innerCloseHandler);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [innerCloseHandler]);


    /**
     * On edit button clicked, user validation is taken place, if valid then update the task state keeping original task id
     *   and the rest to be updated.
     */
    const handleAddTask = ()=>{
        if(validateUserInput())
            setTask({id: task.id, title: inputTitle.current.value,
                description: inputDescription.current.value, type: inputType.current.value});
    }

    return (
        <div>
            {isEditShowing && (
                <div className="popup" ref={editMenuRef}>
                    <h2>Edit Task</h2>
                    <label>
                        Title:
                        <input type="text" defaultValue={task.title} ref={inputTitle}/>
                    </label>
                    <label>
                        Description:
                        <textarea defaultValue={task.description} ref={inputDescription}/>
                    </label>
                    <label>
                        Task Type:
                        <select defaultValue={task.type} ref={inputType}>
                            <option value="">Select a task type</option>
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </label>
                    <button onClick={handleAddTask}>Edit</button>
                    <button onClick={innerCloseHandler}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export function RemovePopup({confirmHandler})
{

    const [isShowing, setShowing] = useState(true);
    const refMenu = useRef(null);

    const closeMenu= ()=>{
        setShowing(!isShowing);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            outsideIsClicked(event, refMenu, closeMenu);
        };
        document.addEventListener("mousedown", handleClickOutside);
        // let timer;
        // if (!isShowing) {
        //     timer = setTimeout(() => {
        //         setShowing(true);
        //     }, 500); // 500ms delay before resetting the state
        // }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            // clearTimeout(timer);
        };
    }, [closeMenu]);

    const cancel = ()=>{
        console.log("cancel");
    }
    const confirm = ()=>{
        console.log("confirm");
        confirmHandler();
    }
    return (
        <div ref={refMenu}>
            {isShowing && (
                <div>
                    <input type="button" value="Cancel" onClick={cancel}/>
                    <input type="button" value="Confirm" onClick={confirm}/>
                </div>
            )}
        </div>
    );
}

function outsideIsClicked(event, refMenu, callBackFunction)
{
    //If the ref to menu is not null and the clicked element is not a child within the ref menu then close the menu.
    if(refMenu.current && !refMenu.current.contains(event.target))
        callBackFunction();
}

/*  onChange={(event) => { setTask(prevTask => ({ ...prevTask, description: event.target.value }))}}  */