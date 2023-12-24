import React from 'react'

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
export const Variables = () => {
  return (
    <p>{JSON.stringify(everything)}</p>
  )
}
