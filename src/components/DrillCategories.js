import React from 'react';
import PropTypes from 'prop-types';
import '../css/DrillCategories.css';

const DrillCategories = (props) => {
	/* called by NewRoutineRender */
	console.log('categories:', props.categories);
	console.log('props.selectedCategory:', props.selectedCategory);

  return (

		<ul className="DrillCategories">
			<li key="9999"><button className={props.selectedCategory === 'all' ? 'category-on' : null} onClick={(e) => props.updateCategory(e)} data-category="all">All</button></li>
		  { props.categories.map((cat, index) => {
			    return (
				    	<li key={index}><button className={props.selectedCategory === cat ? 'category-on' : null} onClick={(e) => props.updateCategory(e)} data-category={cat}>{cat}</button></li>
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
