import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super(); // inits component so we can use "this"

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

    // getinitialState. Attach STATE to this component
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

    // update state
    this.setState({ fishes: fishes });
  }

  addToOrder(key) {
  	// take a copy of the existing state
  	const order = {...this.state.order};

  	// add new order
  	order[key] = order[key] + 1 || 1; // if order[key] doesn't yet exist, 1 will be assigned

  	// update state 
  	this.setState({ order: order });
  }


  loadSamples(){
  	this.setState({
  		fishes: sampleFishes
  	})
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
          	{
	          	Object
	          	.keys(this.state.fishes)
	          	.map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
          	}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
