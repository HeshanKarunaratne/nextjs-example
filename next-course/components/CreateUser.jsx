"use client";
import React, { useState } from 'react';
import { Button, Input } from "@material-tailwind/react";

function CreateUser() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!id || !name || !age || !email || !password) {
            alert("Please fill all the input fields");
            return;
        }

        try {
            const response = await fetch("/api/users", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id, name, age, email, password })
            });

            if (response.ok) {
                alert("User Successfully Created");
            } else {
                alert("Something went wrong");
            }
        } catch (error) {
            alert(error);
            return;
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input type='text' label='ID' onChange={(e) => setId(e.target.value)} value={id} placeholder='ID' />
                <Input type='text' label='Name' onChange={(e) => setName(e.target.value)} value={name} placeholder='Name' />
                <Input type='number' label='Age' onChange={(e) => setAge(e.target.value)} value={age} placeholder='Age' />
                <Input type='text' label='Email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' />
                <Input type='password' label='Password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' />
                <Button className='mt-2' type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default CreateUser