import React from 'react';

const NoItems = (props) => {
    return (
    	<div className="Page">
        <div className="text-center">
        <h2 className="heading2">No items to display!</h2>
          <p>{props.message}</p>
        </div>
    	</div>
    )
}

export default NoItems;
