import React from 'react';

import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

function Inventory({addFish, updateFish, deleteFish, loadSampleFishes, fishes}) {
    return (
        <div className="inventory top-spacing top-spacing--xl">
            <h2>Inventory</h2>
            {Object.keys(fishes).map(key => <EditFishForm key={key} index={key} fish={fishes[key]} updateFish={updateFish} deleteFish={deleteFish} />)}

            <AddFishForm addFish={addFish} />

            {Object.keys(fishes).length === 0 
            ? <button onClick={loadSampleFishes}>Load sample fishes</button> 
            : ''}
        </div>
    );
}

export default Inventory;