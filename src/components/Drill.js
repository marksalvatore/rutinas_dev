import React from 'react';

const Drill = (props) => {
  const { details, index } = props;
  const buttonText = details.selected === true ? 'Selected' : 'Select this drill';
  return (
    <li key={props.id} className="item">
        <div className="item-title">
            {details.title}
        </div>
        <img src={details.url} alt={details.title} />
        <div className={`button ${details.selected === true ? 'item-button active' : 'item-button'}`} 
             onClick={props.toggleSelectItem} 
             data-id={details.id}
             data-index={index}
        >{buttonText}</div>
        <hr />
    </li>
   )
}

export default Drill;



