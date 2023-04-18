import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


const useFetch = (url) => {

    const [state, setState] = useState()
     const [error, setError] = useState(false)
    useEffect(() => {

        axios.get(url)


            .then(res => {
                setState(res.data)
                setError(false)
            })
            .catch(err => {
                console.log(err)
                setError(true)
            })


    }, [url])

    return [state, error]
}

export default useFetch