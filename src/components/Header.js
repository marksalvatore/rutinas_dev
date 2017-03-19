import React from 'react';

// Stateless function (dom only)
const Header = (props) => {
	return (
		<header className="class">
			<h1>Catch
			<span className="ofThe">
				<span className="of">of</span>
				<span className="the">the</span>
			</span>
			Day
			</h1>
			<h3><span>{props.tagline}</span></h3>
		</header>
	)
}

export default Header;
