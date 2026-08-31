import { useState } from "react";

export function useFetch() {

    const data, setData = useState(null)
    const error, setError = useState(null)
    const isLoading, sryLoading = useState(false)


    useEffect(() => {
        const getDtata = async () => {
            setIsLoading(true)
            try {
                const res = await fetch("url")
                if (!res.ok) {
                    throw new Error("Error fetching data")
                }
                const json = await res.json()
                setData(json)
            } catch (err) {
                setError(err)
            }
            finally {
                setIsLoading(false)
            }
    }        

    getData();
},[url]);
 return { data, error, isLoading }
}   