import React from 'react';

import { formatPrice } from '../helpers'; // only pulling in this one exported function from helpers.js

class Fish extends React.Component {
	render() {

		const { details, index } = this.props; // ES6 Destructuring
		const isAvailable = details.status === 'available';
		const buttonText = isAvailable ? 'Add to Order' : 'Sold Out!';

		return (
			<div>
				<li className="menu-fish">
					{/*
					Before destructuring:
					<img src={this.props.details.image} alt={this.props.details.name} />*/}
					<img src={details.image} alt={details.name} />	
					<h3 className="fish-name">
						{details.name}
						<span className="price">{ formatPrice(details.price) }</span>
					</h3>
					<p>
						{details.desc}
					</p>
					<button onClick={ () => this.props.addToOrder(index) } disabled={!isAvailable}>{buttonText}</button>
				</li>
			</div>
		)
	}

}

export default Fish;
