import React from 'react'
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight:'500' });
function Client() {
    console.log("Hello Client");
    return (
        <div>
            <h1>Hello</h1>
            <h1 className={roboto.className}>Hello Roboto</h1>
        </div>
    )
}

export default Client