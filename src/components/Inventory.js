import React from 'react';
import AddFishForm from './AddFishForm';
import base from '../base';

class Inventory extends React.Component {

	constructor() {
		super();
		this.renderInventory = this.renderInventory.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.renderLogin = this.renderLogin.bind(this);
		this.authenticate = this.authenticate.bind(this);
		this.authHandler = this.authHandler.bind(this);
		this.logout = this.logout.bind(this);

		// QUESTION: Why is state set here and not in App, as the others?
		this.state = {
			uid: null,
			owner: null
		}
	}

	componentDidMount() {
		base.onAuth((user) => {
			if(user) {
				this.authHandler(null, { user });
			}
		});
	}

	handleChange(e, key) {
		const fish = this.props.fishes[key];

		// copy the fish, and update specific field that's changing
		const updatedFish = {
			...fish,
			[e.target.name]: e.target.value
		}
		this.props.updateFish(key, updatedFish);

	}

	renderLogin() {
		return (
			<nav className="login">
				<h2>Inventory</h2>
				<p>Sign in to manager your store.</p>
				<button className="github" onClick={ () => this.authenticate('github')}>Log in with GitHub</button>
				<button className="twitter" onClick={ () => this.authenticate('twitter')}>Log in with Twitter</button>
				<button className="facebook" onClick={ () => this.authenticate('facebook')}>Log in with Facebook</button>
			</nav>

		);
	}

	authenticate(provider) {
		console.log(`Trying to log in with  ${provider}`);
		base.authWithOAuthPopup(provider, this.authHandler);
	}

	authHandler(err, authData) {
		if(err) {
			console.error(err);
			return;
		}
		// grab store info
		const storeRef = base.database().ref(this.props.storeId);

		// query firebase once for store data
		storeRef.once('value', (snapshot) => {
			const data = snapshot.val() || {};
			// set owner if one doesn't already exist
			if( !data.owner ) {
				storeRef.set({
					owner: authData.user.uid
				});
			}
			this.setState({
				uid: authData.user.uid,
				owner: data.owner || authData.user.uid
			});
		});
	}

	logout() {
		base.unauth();
		this.setState({ uid: null });
	}

	renderInventory(key) {
		const fish = this.props.fishes[key];
		return (
			<div className="fish-edit" key={key}>
				<input type="text" name="name" value={fish.name} placeholder="Fish name" onChange={(e) => this.handleChange(e, key)}/>
				<input type="text" name="price" value={fish.price} placeholder="Fish price" onChange={(e) => this.handleChange(e, key)}/>
				<select type="text" name="status" value={fish.status} placeholder="Fish status" onChange={(e) => this.handleChange(e, key)}>
					<option value="available">Fresh</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea type="text" name="desc" value={fish.desc} placeholder="Fish desc" onChange={(e) => this.handleChange(e, key)}></textarea>
				<input type="text" name="image" value={fish.image} placeholder="Fish image" onChange={(e) => this.handleChange(e, key)}/>
				<button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
			</div>
		);
	}
	render() {
		const logout = <button onClick={this.logout}>Log out</button>
		// Display login if not logged in
		if( !this.state.uid ) {
			return <div>{this.renderLogin()}</div>
		}
		// Display message if not owner
		if( this.state.uid !== this.state.owner ) {
			return (
				<div>
					<p>Sorry! You're not the owner of this store.</p>
					{logout}
				</div>
			);
		}

		return (
			<div>
				<h2>Inventory</h2>
				{logout}
				{Object.keys(this.props.fishes).map(this.renderInventory)}
				<AddFishForm addFish={ this.props.addFish }/>
				<button onClick={this.props.loadSamples}>Load Sample Fishes</button>
			</div>
		);
	}
}

Inventory.propTypes = {
  fishes: React.PropTypes.object.isRequired,
  addFish: React.PropTypes.func.isRequired,
  updateFish: React.PropTypes.func.isRequired,
  removeFish: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired,
  storeId: React.PropTypes.string.isRequired
}

export default Inventory;
