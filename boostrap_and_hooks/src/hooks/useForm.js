import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)
    
    // destructure of event
    const onInputChange = ({ target }) => {
        //given that every form has an onChange we will be with every action getting all the data of that input change

        // destructuring what i want to write id is each box and the value is what is written on those
        const { id, value } = target
        setFormState({
            ...formState, // ...persist all placeholders
            [id]: value // key has to go with []
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

    return {
        ...formState,
        onInputChange,
        onSubmit,
        formState
    }
}
