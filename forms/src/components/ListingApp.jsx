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
        {content: "Components", seen: true},
        {content: "Variables", seen: true},
        {content: "Fragment", seen: false},
        {content: "Props", seen: true},
        {content: "Events", seen: true}
    ]

    // usss Use state snippet
    const [content, setContent] = useState(contentList)
    return (
        <>
            <h1>List of this course content</h1>
            <ol>
                                        {/* Key unica necesaria devuelve un item con sus propiedades de item que obtengo desde mi content list mediante el hook con useState*/}  
                {content.map(item => <Items key={item.content} content={item.content} seen={item.seen}></Items>)}
                <AddTask></AddTask>
                {/* <button onClick={() => addTasks()}>Add a new content</button> */}
            </ol>
        </>
    )
}
