import React from 'react';

const Drill = (props) => {

  const { details, index } = props;
  const isSelected = props.isDrillSelected(props.id);
  const buttonText = isSelected === true ? 'Selected' : 'Select this drill';
  const button = <div className={`button ${isSelected === true ? 'item-button active' : 'item-button'}`} 
                       onClick={props.toggleSelectItem} 
                       data-id={details.id}
                       data-index={index}
                 >{buttonText}</div>

  return (
    <li key={props.id} className="item">
        <div className="item-title">
            {details.title}
        </div>
        <img src={details.url} alt={details.title} />
        {button}
        <hr />
    </li>
  );

}

export default Drill;



