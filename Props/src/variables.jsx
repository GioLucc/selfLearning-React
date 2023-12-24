import React from 'react'
// import { Fragment } from 'react'
import PropTypes from 'prop-types'

const string = 'Normal string'
const number = 21
const numberTwo = 3
const array = [string, number]
const boolean = true
const Greet = () => "Hello everyone!"
const Addition = () => number + numberTwo;
const todayDate = new Date()
const anObject = {name: 'Giovanni', age: 21}
const everything = [string, number,numberTwo,array,boolean,todayDate,anObject,Greet(),Addition()]

//rafc
// () can receive props
export const Variables = ({title,subtitle,version}) => {
  return (
    // could find a Fragment
    // Fragment
    <>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <h3>{version}</h3>
        <br/>
        <h4>Variable tipo String: </h4>  <p>{string}</p> 
        <h4>Variable tipo Number: </h4>  <p>{number}</p> 
        <h4>Variable tipo Array: </h4>  <p>{array}</p> 
        <h4>Variable tipo boolean: </h4>  <p>{JSON.stringify(boolean)}</p> 
        <h4>Variable tipo Date: </h4>  <p>{JSON.stringify(todayDate)}</p> 
        <h4>Variable tipo Object: </h4>  <p>{JSON.stringify(anObject)}</p> 
        <h4>Variable tipo Arrow: </h4>  <p>{Addition}</p> 

    </>
  )
}

Variables.PropTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  version: PropTypes.number.isRequired
}
