import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // começa carregando por padrão
    if (url === null) return { a: null, a: null, a: null };
    useEffect(() => {
        axios
            .get(`${url}`)
            .then((response) => {
                setData(response.data.results);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);
    return { data, loading, error };
}
