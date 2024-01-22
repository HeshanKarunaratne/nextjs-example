"use client";
import React, { useState } from 'react'
import { Button, Input } from "@material-tailwind/react";

function UpdateUser() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!id) {
            alert("Please provide user ID");
            return;
        }

        const requestedData = { id };
        if (name) {
            requestedData.name = name;
        }

        if (age) {
            requestedData.age = age;
        }

        if (email) {
            requestedData.email = email;
        }

        if (password) {
            requestedData.password = password;
        }
        try {
            const response = await fetch(`/api/users/`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestedData)
            });

            if (response.ok) {
                alert("User Successfully Updated");
                clearForm();
            } else {
                const data = await response.json();
                alert(data.result || "Something went wrong while updating");
            }
        } catch (error) {
            alert(error);
            return;
        }
    }

    const clearForm = () => {
        setId('');
        setName('');
        setAge('');
        setPassword('');
        setEmail('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input type='text' label='ID' onChange={(e) => setId(e.target.value)} value={id} placeholder='ID' />
                <Input type='text' label='Name' onChange={(e) => setName(e.target.value)} value={name} placeholder='Name' />
                <Input type='number' label='Age' onChange={(e) => setAge(e.target.value)} value={age} placeholder='Age' />
                <Input type='text' label='Email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' />
                <Input type='password' label='Password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' />
                <Button className='mt-2' type='submit'>Update User</Button>
            </form>
        </div>
    )
}

export default UpdateUser