import React, {useState} from 'react';
import {Task} from "./task";
import {FetchTasks} from "../ajax_calls/ajaxer";

export function SectionRender() {
    //Receive api data and convert it into json object.
    const {sections} = JSON.parse(data());

    //FetchTasks("http://localhost:8080/ManagmentToolApplication/api/tasks");
    /*
    const { isLoading, tasks, error, responseState} = FetchTasks("http://localhost:8080/ManagmentToolApplication/api/tasks");
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error fetching data. {responseState}</div>;
    }else
        console.log("----------------- Tasks: " + tasks.sections[0].title);
    */

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
