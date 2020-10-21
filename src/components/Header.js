import React from 'react';

import { Link, useRouteMatch } from "react-router-dom";

function Header({order}) {
    const { url } = useRouteMatch();

    const orderCount = Object.keys(order).length;
    const orderCountText = orderCount === 1 ? `- ${orderCount} item` : `- ${orderCount} items`;
    return (
        <header>
            <h1>Catch of the day</h1>
            <nav>
                <ul>
                    <li><Link to={`${url}`}>Shop</Link></li>
    <li><Link to={`${url}/checkout`}>Checkout</Link> <span>{orderCountText}</span></li>
                    <li><Link to={`${url}/inventory`}>Inventory</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;