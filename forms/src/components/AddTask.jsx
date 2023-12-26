import React from 'react'
import { useState } from 'react'

export const AddTask = ({ addNewTask }) => { // AddTask now receives a property with the hook of his parent
    const [inputValue, setInputValue] = useState('') // Value starts empty
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        const parsedValue = { // since we can't send a string we turn it into a object
            content: inputValue,
            seen: false
        }
        event.preventDefault()
        addNewTask(task => [...task, parsedValue])  // and we send the value back to the parent with a new array value with the ... setContent formatting
    }

    return (
        <>
            <form onSubmit={onSubmit}>  {/*the form hears onSubmit */}
                <input type="text"
                    placeholder='Add you new content'
                    value={inputValue} // the value will be modified by the hook
                    onChange={onInputChange} // Onchange function will listen on input change
                />
            </form>
        </>
    )
}
