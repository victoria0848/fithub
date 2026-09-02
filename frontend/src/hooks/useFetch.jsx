import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error("Kunne ikke hente data");
                }
                const json = await res.json();
                setData(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };        

        if (url) getData();
    }, [url]);

    return { data, error, isLoading };
}