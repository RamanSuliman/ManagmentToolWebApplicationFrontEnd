
export const Task = ({id, title, description, btn_text, type}) =>
{
    const taskClassName = getTaskClassName(type);
    return (
        <div id={id} className={taskClassName}>
            <h2>{title}</h2>
            <p>{description}</p>
            {/*<MenuButton buttonText={btn_text} menuComponent={<Menu/>} /> */}
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