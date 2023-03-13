import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const useFetch = (type, Factory, url, loadingTime, isError) => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setTimeout(() => {
                    const resultData = new Factory(result.data, type);
                    setData(resultData);
                    setIsLoaded(true);
                }, loadingTime);
            })
            .catch((err) => {
                setIsLoaded(true);
                setError(err);
                console.error(err);
                
            });
    }, [type, Factory, url, loadingTime, isError]);
    
    return [data, isLoaded, error];
    }

useFetch.propTypes = {
    type: PropTypes.string.isRequired,
    Factory: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    loadingTime: PropTypes.number,
    error: PropTypes.booleen
};

export default useFetch;