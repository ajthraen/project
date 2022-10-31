import React from 'react';
import { useState } from 'react';

export const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")

    const onSubmitHandler = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${firstName}`)
        console.log(firstName)
    }

    return (
    <form onSubmit={onSubmitHandler}>
        <div><label htmlFor="first_name">First Name</label></div>
        <div>        
            <input
                type="text" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
        </div>
        <div><label htmlFor="last_name">Last Name</label></div>
        <div>
            <input
                type="text" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
        </div>
        <div><label htmlFor="age">Age</label></div>
        <div>
            <input
                type="text" 
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
        </div>
        <input type="submit"/>
    </form>
    );
}

export default Form;
