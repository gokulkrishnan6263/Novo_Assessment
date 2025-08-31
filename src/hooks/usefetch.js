import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancel = false;

        const fetchData = async() => {
            try {
                const result = await axiosClient.get(url);
                if (!cancel) {
                    setData(result);
                    setError(null);
                }
            } catch (err) {
                if (!cancel) setError(err);
            } finally {
                if (!cancel) setLoading(false);
            }
        };

        fetchData();
        return () => (cancel = true);
    }, [url]);

    return { data, loading, error };
}