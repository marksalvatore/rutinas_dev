import React from 'react';

import {formatPrice} from '../helpers'; // why is it {formatPrice}?  Video #15

class Fish extends React.Component {
	render() {
		const { details } = this.props; // ES6 Destructuring
		return (
			<div>
				<li className="menu-fish">
					{/*
					Before destructuring:
					<img src={this.props.details.image} alt={this.props.details.name} />*/}
					<img src={details.image} alt={details.name} />	
					<h3 className="fish-name">
						{details.name}
						<span className="price">{formatPrice(details.price)}</span>
					</h3>
					<p>
						{details.desc}
					</p>
					<button>Add to Order</button>
				</li>
			</div>
		)
	}


}

export default Fish;
