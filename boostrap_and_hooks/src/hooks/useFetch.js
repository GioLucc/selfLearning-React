import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null,
    })

    const getFetch = async () => {

        try {
            if (!url) return
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setState({
                data,
                isLoading: false,
                errors: null
            })
        }
        catch (error) {
            setState({
                data: null,
                isLoading: false,
                errors: error
            })
        }
    }

    useEffect(() => {
        getFetch()
    }, [url])

    return state

}
