import React from 'react';

const NoItems = (props) => {
    return (
    	<div className="Page">
        <div className="Page-text">
        <h2>Oops!</h2>
          <p>No items to display! You'll need to enter a score for this drill before it can display.</p>
        </div>
    	</div>
    )
}

export default NoItems;
