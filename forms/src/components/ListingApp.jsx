import React from 'react'
import { useState } from 'react'
import { AddTask } from './AddTask'

const Items = ({ content, seen }) => {
    return (
        <li>
            {content}
            {seen ? '✅' : '❌'}
            {/* {visto && '✅'} only if*/}
        </li>
    )
}

export const ListingApp = () => {
    // const addTasks = () =>
    // {
    //     // Content is an array, adding a new content means using [with the format below]
    //     setContent([...content, {content: 'New content', seen: false}])
    // }
    let contentList = [
        { id: 1, content: "Components", seen: true },
        { id: 2, content: "Variables", seen: true },
        { id: 3, content: "Fragment", seen: false },
        { id: 4, content: "Props", seen: true },
        { id: 5, content: "Events", seen: true }
    ]

    // usss Use state snippet
    const [content, setContent] = useState(contentList) // Hook to add into the content list

    const onTaskAdd = (value) => {
        let trimmedValue = value.trim
        if (trimmedValue < 1) return
        const parsedValue = {
            id: content.length+1,
            content: trimmedValue,
            seen: false
        }
        setContent([...content, parsedValue])
    }

    return (
        <>
            <h1>List of this course content</h1>
            <ol>
                {/* Key unica necesaria devuelve un item con sus propiedades de item que obtengo desde mi content list mediante el hook con useState*/}
                {content.map(item => <Items key={item.id} content={item.content} seen={item.seen}></Items>)}
                <AddTask addNewTask={onTaskAdd}></AddTask> {/*property with hook for the child to resend us new content */}
                {/* <button onClick={() => addTasks()}>Add a new content</button> */}
            </ol>
        </>
    )
}
