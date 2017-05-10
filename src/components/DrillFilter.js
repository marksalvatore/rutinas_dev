import React from 'react';
import PropTypes from 'prop-types';

const DrillFilter = (props) => {

  return (

		<div className="categories">
		  { props.categories.map((cat, index) => {
		    return <div key={index}>{cat}</div>
		  }) }
		</div>

  );
}

DrillFilter.contextTypes = {
  router: React.PropTypes.object
}

DrillFilter.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default DrillFilter;
