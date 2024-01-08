import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const UserComponents = () => {

    const {data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users') // 1°

    return (
        <>
            {
                isLoading
                    ? <h4>Cargando....</h4>
                    : errors
                        ? <p>Ha ocurrido un error {errors}</p>
                        : <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Mail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(u => {
                                    return (
                                        <tr>
                                            <th scope="row">{u.id}</th>
                                            <td>{u.name}</td>
                                            <td>{u.phone}</td>
                                            <td>{u.email}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
            }

        </>
    )
}
