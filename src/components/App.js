import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
  constructor() {
    super(); // inits component so we can use "this" for the component

    this.addFish = this.addFish.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.removeFish = this.removeFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.removeOrder = this.removeOrder.bind(this);

    // Attach STATE to the main App component
    this.state = {
      fishes: {},
      order: {}
    };
  }

  componentWillMount() {
  	// runs right before <App> is rendered

  	// QUESTION: how can we use "this", without binding it in the constructor?
  	this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
  		context: this,
  		state: 'fishes'
  	});

  	// check if there are orders in local storage
  	const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
  	if( localStorageRef ) {
  		// update <App> order state
  		this.setState({
  			order: JSON.parse(localStorageRef)
  		});
  	}
  }
  componentWillUnmount() {
  	base.removeBinding(this.ref);
  }

  // local storage
  componentWillUpdate(nextProps, nextState) {
  	console.log("Something changed:");
  	console.log({nextProps, nextState});
  	localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
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

  updateFish(key, updatedFish) {
  	const fishes = {...this.state.fishes};
  	fishes[key] = updatedFish;
  	this.setState({
  		fishes: fishes
  	})
  }

  removeFish(key) {
  	const fishes = {...this.state.fishes};
  	// delete fishes[key]; this doesn't work with Firebase
  	fishes[key] = null;
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

  removeOrder(key) {
  	const order = {...this.state.order};
  	delete order[key];
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
        <Order 
        	fishes={ this.state.fishes } 
        	order={ this.state.order } 
        	params={ this.props.params } 
        	removeOrder={this.removeOrder}
        />
        <Inventory 
        	addFish={this.addFish} 
        	loadSamples={this.loadSamples} 
        	fishes={this.state.fishes}
        	updateFish={this.updateFish}
        	removeFish={this.removeFish}
        />
      </div>
    )
  }
}

App.propTypes = {
  params: React.PropTypes.object.isRequired
}

export default App;
