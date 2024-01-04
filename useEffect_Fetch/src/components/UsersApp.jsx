import React, { useState, useEffect } from 'react'

export const UsersApp = () => {

    const [users, setUsers] = useState([]) // Keeps track of users

    const fetchUsers = async () => { // async == await
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users') // Fetch the users
            const data = await response.json()
            setUsers(data) // loads the users into the array
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <h1>User's List</h1>
            <ul>
                {users.map(u => <li key={u.id}>Email: {u.email} <br /> Name: {u.name}</li>)} {/* map ITERATES the users ARRAY */}
            </ul>
            <button onClick={fetchUsers}>Get Users</button>
        </>
    )
}
