import React from 'react';

function EditFishForm({fish, index, updateFish, deleteFish}) {
    function handleChange(event) {
        const name = event.currentTarget.name;
        const current = event.currentTarget.value;
        const updatedFish = {
            ...fish,
            [name]: name === 'price' 
                ? parseFloat(current)
                : current
        }

        updateFish(index, updatedFish);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form className="fish-edit" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="mt-2"
                value={fish.name}
                onChange={handleChange}
            />
            
            <label htmlFor="price">Price</label>
            <input
                id="price"
                name="price"
                type="text"
                placeholder="Price"
                className="mt-2"
                value={fish.price}
                onChange={handleChange}
            />

            <label htmlFor="status">Status</label>
            <select id="status" name="status" className="mt-2" value={fish.status} onChange={handleChange}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>

            <label htmlFor="desc">Description</label>
            <textarea id="desc" name="desc" placeholder="Desc" className="mt-2" value={fish.desc} onChange={handleChange} />
            
            <label htmlFor="image">Image</label>
            <input
            id="image"
            name="image"
            type="text"
            placeholder="Image"
            className="mt-2"
            value={fish.image}
            onChange={handleChange}
            />

            <button type="button" onClick={() => deleteFish(index)}>Remove fish</button>
        </form>
    );
}

export default EditFishForm;