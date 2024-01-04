import { useState } from "react"

export const useCounter = (value = 0) => {

    // counter manipulator
    const [counter, setCounter] = useState(value)

    // fuctions of the returning custom hook 
    const increase = (value) => {
        setCounter(counter + value)
    }
    const decrease = (value) => {
        setCounter(counter - value)
    }
    const reset = () => {
        setCounter(0)
    }

    return {
        counter,
        increase,
        decrease,
        reset,
    }
}
