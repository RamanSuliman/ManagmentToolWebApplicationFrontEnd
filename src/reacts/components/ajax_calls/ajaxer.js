import React, { useState, useEffect } from "react";

export function FetchTasks(url) {
    const [task, setTask] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function dataFetcher() {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setTask(json);
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        }
        dataFetcher();
    }, [url]);

    return { isLoading, task, error };
}