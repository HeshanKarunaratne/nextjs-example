import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (
        <nav>
            <ul>
                <div className='logo'>
                    <h1>Logo</h1>
                </div>
                <div className='link-container'>
                    <Link className='link' href='/'>Home</Link>
                    <Link className='link' href='/about'>About</Link>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar