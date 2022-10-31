import React from 'react';
import { useState } from 'react';

export const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")

    function onSubmitHandler() {
        console.log('Submit')
    }

    function inputChangeHandler() {
        console.log('Change')
    }

    return (
    <form onSubmit={onSubmitHandler}>
        <div><label htmlFor="first_name">First Name</label></div>
        <div><input id="first_name" onChange={(e)=>inputChangeHandler(setFirstName, e)} type="text"/></div>
        <div><label htmlFor="last_name">Last Name</label></div>
        <div><input id="last_name" onChange={(e)=>inputChangeHandler(setLastName, e)} type="text"/></div>
        <div><label htmlFor="age">Age</label></div>
        <div><input id="age" onChange={(e)=>inputChangeHandler(setAge, e)} type="number"/></div>
        <input type="submit"/>
    </form>
    );
}

export default Form;
