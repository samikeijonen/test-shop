import React from 'react';

function AddFishForm({addFish}) {
    function createFish(event) {
        // 1. Stop the form from submitting.
        event.preventDefault();

        // 2. Get form fields.
        const {name, price, status, desc, image} = event.target.elements;

        // 3. Create fish object with form values.
        const fish = {
            name: name.value,
            price: parseFloat(price.value),
            status: status.value,
            desc: desc.value,
            image: image.value,
        }

        // 4. Add new fish.
        addFish(fish);

        // 5. Reset the form.
        event.currentTarget.reset();
    }

    return (
        <form className="fish-edit" onSubmit={createFish}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Name" className="mt-2" />
            
            <label htmlFor="price">Price</label>
            <input
            id="price"
            name="price"
            type="text"
            placeholder="Price"
            className="mt-2"
            />

            <label htmlFor="status">Status</label>
            <select id="status" name="status" className="mt-2">
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>

            <label htmlFor="desc">Description</label>
            <textarea id="desc" name="desc" placeholder="Desc" className="mt-2" />
            
            <label htmlFor="image">Image</label>
            <input
            id="image"
            name="image"
            type="text"
            placeholder="Image"
            className="mt-2"
            />

            <button type="submit">+ Add Fish</button>
        </form>
    );
}

export default AddFishForm;