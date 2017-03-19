import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  constructor() {
    super(); // inits component so we can use "this"

    this.addFish = this.addFish.bind(this);
    // getinitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    // To update state, first make copy of current state
    // "..." copies each item to the new object
    const fishes = {...this.state.fishes};
    // add new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes: fishes });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
