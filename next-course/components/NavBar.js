import React from 'react';
import Link from 'next/link';

function NavBar() {
    return (
        <nav>
            <ul>
                <div className='logo'>
                    <h1>Logo</h1>
                </div>
                <div className='link-container'>
                    <Link className='link' href='/'>Home</Link>
                </div>
            </ul>
        </nav>
    )
};

export default NavBar;