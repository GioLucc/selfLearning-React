import React from 'react'
import { useForm } from '../hooks/useForm'

export const FormComponent = () => {

    const initialForm = {
        userName: '',
        passWord: ''
    }
    const {formState, userName,passWord,onInputChange} = useForm(initialForm)

    // Also destructuring the content of formState of useForm
    // const { userName, passWord } = formState

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Welcome</h1>
            <div className="form-group">
                <label htmlFor="userName">Username</label>
                <input
                    type="userName"
                    className="form-control"
                    id="userName"
                    aria-describedby="emailHelp"
                    placeholder="Enter your username"
                    value = {userName}
                    onChange={onInputChange}
                />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}

            </div>
            <div className="form-group">
                <label htmlFor="passWord">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="passWord"
                    placeholder="Enter your password"
                    value = {passWord}
                    onChange={onInputChange}
                />
            </div>

            {/* <div className="form-check">
                 <input type="checkbox" className="form-check-input" id="exampleCheck1"></input> */}
            {/* <label className="form-check-label" for="exampleCheck1">Check me out</label> 
            </div>*/}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
