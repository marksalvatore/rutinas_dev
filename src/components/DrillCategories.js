import React from 'react';
import PropTypes from 'prop-types';
import '../css/DrillCategories.css';

const DrillCategories = (props) => {
	/* called by NewRoutineRender */

  return (

		<ul className="DrillCategories">
		  { props.categories.map((cat, index) => {
		    return <li key={index}><button className={props.selectedCategory === cat ? 'category-on' : null} onClick={(e) => props.updateCategory(e)} data-category={cat}>{cat}</button></li>
		  }) }
		</ul>

  );
}

DrillCategories.contextTypes = {
  router: React.PropTypes.object
}

DrillCategories.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  updateCategory: PropTypes.func.isRequired,
}

export default DrillCategories;
