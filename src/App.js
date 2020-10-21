import React, {useState, useEffect} from 'react';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Inventory from './components/Inventory';
import Order from './components/Order';
import Fish from './components/Fish';

import sampleFishes from './sample-fishes';

function App() {
  const { storeId } = useParams();
  const { path } = useRouteMatch();
  
  // Get initial fishes and order from localstorage. 
  // Use function so it only loads at first run.
  const initialFishes = () => JSON.parse(localStorage.getItem(`${storeId}-fishes`)) || {};
  const initialOrder = () => JSON.parse(localStorage.getItem(`${storeId}-order`)) || {};

  const [fishes, setFishes] = useState(initialFishes);
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    // Save fishes in localStorage. Expects a string, therefor JSON.stringify.
    localStorage.setItem(`${storeId}-fishes`, JSON.stringify(fishes));
  }, [fishes, storeId]);

  useEffect(() => {
    // Save order in localStorage. Expects a string, therefor JSON.stringify.
    localStorage.setItem(`${storeId}-order`, JSON.stringify(order));
  }, [order, storeId]);

  function addFish(fish) {
    setFishes({
      // Copy existing state.
      ...fishes,
      // Add new fish with unique key.
      [`fish${Date.now()}`]: fish
    });
  }

  function updateFish(key, updatedFish) {
    console.log(key, updatedFish);
    setFishes({
      // Copy existing state.
      ...fishes,
      // Update fish with matching with key.
      [key]: updatedFish
    });
  }

  function deleteFish(key) {
    // Take of the on with the correct key.
    const { [key]: pwd, ...restOfFishes} = fishes;

    // Set rest of the fishes in state.
    setFishes(restOfFishes);
  }

  function loadSampleFishes() {
    setFishes({
      // Reset previous ones.
      ...sampleFishes
    });
  }

  function addToOrder(key) {
    setOrder({
      // Copy existing state.
      ...order,
      // Either add to order, or update the number of orders if it's already exists in the order.
      [key]: order[key] ? order[key] + 1 : 1
    });
  }

  function removeFromOrder(key) {
    // Take of the on with the correct key.
    const { [key]: pwd, ...restOfOrder} = order;

    // Set rest of the fishes in state.
    setOrder(restOfOrder);
  }

  return (
    <div className="App">
      <Header order={order} />
      <main className="catch-of-the-day">
        <Switch>
          <Route exact path={path}>
            <ul className="fishes">
              {Object.keys(fishes).map(key => (
                <Fish key={key} index={key} details={fishes[key]} addToOrder={addToOrder} />
              ))}
            </ul>

          {Object.keys(fishes).length === 0 
              ? <button onClick={loadSampleFishes}>Load sample fishes</button> 
              : ''}
          </Route>

          <Route path={`${path}/checkout`}>
            <Order fishes={fishes} order={order} removeFromOrder={removeFromOrder} />
          </Route>
 
          <Route path={`${path}/inventory`}>
            <Inventory addFish={addFish} updateFish={updateFish} deleteFish={deleteFish} loadSampleFishes={loadSampleFishes} fishes={fishes} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
