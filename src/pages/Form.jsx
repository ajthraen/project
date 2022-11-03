import React from 'react';
import { useState } from 'react';

export const Form = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const users = {email, password}

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // alert(`The name you entered was: ${email}`)
        users[email, password] = {email, password}
        console.log(users.email)
    }

    return (
    <form onSubmit={onSubmitHandler}>
        <div><label htmlFor="first_name">Email</label></div>
        <div>        
            <input
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div><label htmlFor="last_name">Password</label></div>
        <div>
            <input
                type="text" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <input type="submit"/>
    </form>
    );
}

export default Form;
