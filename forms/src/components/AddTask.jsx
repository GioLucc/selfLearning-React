import React from 'react'
import { useState } from 'react'

export const AddTask = () => {
    const [inputValue, setInputValue] = useState('') // Value starts empty
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
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
