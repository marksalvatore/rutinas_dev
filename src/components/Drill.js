import React from 'react';
import PropTypes from 'prop-types';

const Drill = (props) => {
  /* called by NewRoutineRender */

  const { details, index } = props;
  const isSelected = props.isDrillSelected(props.id);
  const diagram = <img onClick={props.toggleSelectItem} src={details.url} alt={details.title} data-id={details.id} data-index={index} />
  const buttonText = isSelected === true ? 'Selected' : 'Select this drill';
  const button = 
          <div className={`button ${isSelected === true ? 'item-button active' : 'item-button'}`} 
               onClick={props.toggleSelectItem} 
               data-id={details.id}
               data-index={index}>

              {buttonText}
          </div>

  return (
    <li className={(props.selectedCategory === 'all' || props.selectedCategory === details.category) ? null : 'hide'}>
        <div className="item-title">
            {details.title}
        </div>
        {diagram}
        {button}
        <hr />
    </li>
  );
}

Drill.propTypes = {
  details: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  isDrillSelected: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  toggleSelectItem: PropTypes.func.isRequired,
}

export default Drill;



