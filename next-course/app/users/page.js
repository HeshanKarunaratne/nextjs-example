"use client";
import React, { useState } from 'react'
import AccordionUI from '../../components/AccordionUI';

function Users() {

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
        <div className='flex flex-col justify-center items-center mt-10'>
            <AccordionUI />
        </div>
    )
}

export default Users;