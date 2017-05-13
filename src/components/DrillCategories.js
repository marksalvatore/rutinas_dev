import React from 'react';
import PropTypes from 'prop-types';
import '../css/DrillCategories.css';

const DrillCategories = (props) => {
	/* called by NewRoutineRender */

	const { categories, selectedCategory, updateCategory } = props;

  return (

		<ul className="DrillCategories">
			<li key="9999"><button className={selectedCategory === 'all' ? 'category-on' : null} onClick={(e) => updateCategory(e)} data-category="all">All</button></li>
		  { categories.map((cat, index) => {
			    return (
				    	<li key={index}><button className={selectedCategory === cat ? 'category-on' : null} onClick={(e) => updateCategory(e)} data-category={cat}>{cat}</button></li>
			  	);
		  	}) 
			}
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
