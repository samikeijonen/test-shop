import React from 'react';
import { getFunName, slugify } from '../helpers';

function StorePicker(props) {
    function handleSubmit(event) {
        // 1. Stop the form from submitting.
        event.preventDefault();

        // 2. Get text from the input field.
        const storeName = slugify(event.target.elements.storeName.value);

        // 3. Change page URL to /store/input-field-value-slugified.
        props.history.push(`/store/${storeName}`);
    }

    return (
        <div className="App">
            <main>
                <form className="store-selector top-spacing top-spacing--small" onSubmit={ handleSubmit }>
                    <h1>Please Enter A Store</h1>
                    <label htmlFor="storeName">Store name</label>
                    <input
                    id="storeName"
                    type="text"
                    required
                    placeholder="Store Name"
                    defaultValue={ getFunName() }
                    />
                    <button type="submit">Visit Store →</button>
                </form>
            </main>
        </div>
    );
}

export default StorePicker;