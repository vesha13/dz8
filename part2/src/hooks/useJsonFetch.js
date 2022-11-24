//import React from "react";
import { useState,useEffect } from "react";

function useJsonFetch({url,opts}) {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    
    
    useEffect(()=>{

       const fetchData =()=>{
        setLoading(true)
        fetch(url)
            .then(response => response.json())
                .catch(err => {setError(err)
                    setLoading(false)})
            .then(data =>{ 
                setData(data)
                setLoading(false)

        }).catch(err => {setError(err)
            setLoading(false)})}

        fetchData()
        const intervalId =setInterval( fetchData(),opts);
        return () => clearInterval(intervalId);
    },[url,opts])

   return [data, loading, error]
}
export default useJsonFetch
