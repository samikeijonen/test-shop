import React from 'react';

import { formatPrice } from '../helpers';

function Fish({details, index, addToOrder}) {
    const {image, name, price, desc, status} = details;

    const isAvailable = status === 'available';

    function handleClick() {
        addToOrder(index);
    }

    return (
        <li>
            <img src={image} alt={name} />
            <h2>{name} {formatPrice(price)}</h2>
            <p>{desc}</p>
            
            <button disabled={!isAvailable} onClick={handleClick}>{isAvailable ? 'Add to cart' : 'Sold out'}</button>
        </li>
    );
}

export default Fish;