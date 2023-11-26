import React, { useState, useEffect } from 'react'

export default function Page() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const result = await response.json()
            setData(result)
        }

        fetchData().catch((e) => {
            // handle the error as needed
            console.error('An error occurred while fetching the data: ', e)
        })
    }, [])

    return (
        <div>
            {data && data.map((item: Item) => {
                return (
                    <div key={item.id}>
                        <h1>{item.body}</h1>
                        <h2>{item.title}</h2>
                    </div>
                )
            }
            )}
            {data.length == 0 && <h1>Loading...</h1>}
        </div>
    )
}

export type Item = {
    id: number,
    body: string,
    title: string
}