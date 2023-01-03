import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(null);

    
useEffect(() => {
    const abortConst = new AbortController();

        setTimeout(() => {
         fetch(url, { signal: abortConst.signal })
         .then(res => {
            console.log(res);
            if(res.ok === false){
                throw Error("Tidak bisa melakukan fetch pada data tersebut");
            }
            return res.json();
         })
         .then(data => {
            setData(data);
            setIsPending(false)
            setIsError(null)
         })
         .catch((err) => {
            
            setIsPending(false)
            setIsError(err.message)
         })
        }, 1000)

        return () => abortConst.abort();
    }, [])

    return {data, isPending, isError};
}

export default useFetch;