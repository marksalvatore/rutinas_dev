import React from 'react';

const NoItems = (props) => {
    return (
    	<div>
        <div className="text-left">
        <h3>No items!</h3>
          <p>{props.message}</p>
        </div>
    	</div>
    )
}

export default NoItems;
