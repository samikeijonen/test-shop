import React from 'react';

function Header({tagline}) {
    return (
        <header>
            <h1>Catch of the day</h1>
            <p>{tagline}</p>
        </header>
    );
}

export default Header;