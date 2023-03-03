import React, { useState, useEffect } from "react";

export function FetchTasks(url) {
    const [tasks, setTasks] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [responseState, setResponseState] = useState(null);

    useEffect(() => {
        console.log("useEffect");
        fetch(url,{ method: 'POST' })
            .then((response) => {
                console.log("not " + response.status + " -- " + response.statusText);
                if (!response.ok) {
                    setResponseState({
                        status: response.status,
                        message: response.statusText,
                    });
                } else {
                    console.log("okkkk");
                }
                return response.json();
            })
            .then((data) => {
                setTasks(data);
                setIsLoading(false);
                return data;
            })
            .catch(error => {
                console.log("{{{{{{ " + error);
                setError(true);
            });

    }, [url]);

    return { tasks, isLoading, error, responseState };
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