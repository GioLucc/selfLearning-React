import React from 'react'
import { CounterComponent } from './components/CounterComponent'
import { FormComponent } from './components/FormComponent'
import { UserComponents } from './components/UserComponents'

export const HookApp = () => {
    return (
        <>
            <h1>HookApp</h1>
            <hr />
            <UserComponents></UserComponents>
        </>
    )
}
