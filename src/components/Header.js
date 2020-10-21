import React from 'react';

import { Link, useRouteMatch } from "react-router-dom";

function Header() {
    const { url } = useRouteMatch();
    return (
        <header>
            <h1>Catch of the day</h1>
            <nav>
                <ul>
                    <li><Link to={`${url}`}>Shop</Link></li>
                    <li><Link to={`${url}/checkout`}>Checkout</Link></li>
                    <li><Link to={`${url}/inventory`}>Inventory</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;