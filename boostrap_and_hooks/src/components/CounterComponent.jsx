import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterComponent = () => {

    const { counter, increase, decrease, reset } = useCounter(0)

    return (
        <>
            <h1>Contador: {counter}</h1>
            <button className='btn btn-primary' onClick={() => increase(1)}> + 1 </button>
            <button className='btn btn-danger' onClick={() => reset()}> clear </button>
            <button className='btn btn-primary' onClick={() => decrease(1)}> - 1</button>
        </>
    )
}
