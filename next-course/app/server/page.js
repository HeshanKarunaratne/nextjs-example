import React from 'react'

const fetchData = async () => {
    return (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
}

async function Server() {
    console.log("Hello Server");
    let products = await fetchData();
    return (
        <div>
            {products?.map(p => (
                <p key={p.id}>{p.title}</p>
            ))}
        </div>
    )
}

export default Server;