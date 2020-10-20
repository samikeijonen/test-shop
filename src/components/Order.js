import React from 'react';

import { formatPrice } from '../helpers';

function Order({order, fishes, removeFromOrder}) {
    function renderOrder(key) {
        const fish = fishes[key];
        const count = order[key];

        // Bail if there is no fish.
        if (!fish) {
            return;
        }

        const isAvailable = fish.status === 'available';

        if(!isAvailable) {
            return <li key={key}>Sorry {fish ? fish.name: 'fish'} is no longer available</li>;
        }

        return (
            <li key={key}>
                {count} lbs {fish.name}

                {formatPrice(count * fish.price)}

                <button className="button button--xs" onClick={() => removeFromOrder(key)}>Remove</button>
            </li>
        );
    }

    const orderKeys = Object.keys(order);
    const total = orderKeys.reduce((prevTotal, key) => {
        const fish = fishes[key];
        const count = order[key];
        const isAvailable = fish && fish.status === 'available';

        if(isAvailable && fish.price) {
            return prevTotal + (count * fish.price)
        }
        
        return prevTotal
    }, 0);

    return (
        <>
            <h2>Order</h2>
            <ul>
                {orderKeys.map(key => renderOrder(key))}
            </ul>
            
            <p className="total">Total sum: {formatPrice(total)}</p>
        </>
    );
}

export default Order;