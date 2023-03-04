import React, { useState, useEffect } from "react";

export function FetchTasks(url) {
    const [tasks, setTasks] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [responseState, setResponseState] = useState(null);

    useEffect(() => {
        console.log("FetchTasks");
        fetch(url,{ method: 'POST' })
            .then((response) => {
                console.log("not " + response.status + " -- " + response.statusText);
                if (!response.ok) {
                    setResponseState({
                        status: response.status,
                        message: response.statusText,
                    });
                } else {
                    console.log("ok");
                }
                return response.json();
            })
            .then((data) => {
                setTasks(data);
                setIsLoading(false);
                return data;
            })
            .catch(error => {
                console.log("Error in fetching tasks: " + error);
                setError(true);
            });

    }, [url]);

    return { tasks, isLoading, error, responseState };
}

export function AppendTask(task) {
    const [error, setError] = useState(null);
    const [responseState, setResponseState] = useState(null);
    const [serverMsg, setServerMsg] = useState(null);
    let url = "";

    useEffect(() => {
        console.log("Append task");
        fetch(url, {
            method: "POST",
            body: JSON.stringify(task),
            headers: {"Content-Type": "application/json"}
        }).then(response => {
            setResponseState({status: response.status, message: response.statusText});
            return response.json();
        })
            .then(data => setServerMsg(data))
            .catch(error => setError(error));

    }, [task, url]);

    return {serverMsg, error, responseState};
}



/*
import React, { useState, useEffect } from "react";

export function FetchTasks(url) {
    const [tasks, setTask] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function dataFetcher() {
            try {
                const response = await fetch(url);
                console.log(response.status); // HTTP status code
                console.log(response.statusText); // HTTP status message
                console.log(response.headers); // HTTP headers
                console.log("body:      " + response.body); // HTTP headers
                const json = await response.json();
                setTask(json);
                setLoading(false);
                return { task: tasks, isLoading: isLoading, error: error };
            } catch (error) {
                setError(true);
                throw error;
            }
        }

        dataFetcher()
            .then((data) => console.log("Data fetched successfully--------:", data))
            .catch((error) => console.error("Error fetching data--------:", error));
    }, [url]);

    return { isLoading, tasks, error };
}
*/