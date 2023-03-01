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
                return json; // return the fetched data
            } catch (error) {
                setError(true);
                throw error; // throw the error to be handled later
            }
        }

        // handle the promise returned by dataFetcher()
        dataFetcher()
            .then((data) => console.log("Data fetched successfully:", data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [url]);

    return { isLoading, task, error };
}
