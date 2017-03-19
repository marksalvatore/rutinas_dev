import React from 'react';
// import './components/StorePicker/style.css';

// import the named (not default) export 'getFunName'
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
/*	constructor() {
		super(); // constructs base React component with this class
		this.goToStore = this.goToStore.bind(this);
	}
*/
	goToStore(event) {
		// prevent form from looping submit to self
		event.preventDefault();

		console.log("URL changed!");

		// display StorePicker object
		console.log(this);

		// grab the storeInput value from the form input
		console.log(this.storeInput.defaultValue);
		console.log(this.storeInput.value);
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`);
		this.context.router.transitionTo(`/store/${storeId}`);

		//go to /store/:storeId
	}
	// how it renders depends on what you import (see line 2)
	render() {
		// I think JSX processes everything inside the return
		return (

			// if using a constructor:
			//<form className="store-selector" onSubmit={this.goToStore}>

			// to bind directly:
			<form className="store-selector" onSubmit={this.goToStore.bind(this)}>

				<h2>Please enter a store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input } } />
				<button type="submit">Visit store</button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	// This will provide access to transitionTo()
	// and will display as a 'Context' under 'router' in devTools
	router: React.PropTypes.object
}

export default StorePicker;
