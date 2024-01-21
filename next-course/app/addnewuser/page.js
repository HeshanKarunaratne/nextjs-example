"use client";
import React, { useState } from 'react'


function AddNewUser() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const addewUserHandler = async () => {

        let response = await fetch("/api/users", {
            method: 'POST',
            body: JSON.stringify({ name, age, email })
        });

        response = await response.json();
        if (response.ok) {
            alert("User Created Successfully");
        } else {
            alert("Error Occurred");
        }

    }

    return (
        <div className='flex flex-col'>
            <input className='py-2' type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter name' />
            <input className='py-2' type='number' onChange={(e) => setAge(e.target.value)} value={age} placeholder='Enter age' />
            <input className='py-2' type='text' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter email' />
            <button onClick={addewUserHandler}>Save User</button>
        </div>
    )
}

export default AddNewUser