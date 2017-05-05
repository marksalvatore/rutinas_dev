import React from 'react';

class Drill extends React.Component {
  render() {
    const { details, index } = this.props;
    const buttonText = details.selected === true ? 'Selected' : 'Select this drill';
    return (
      <li key={this.key} className="item">
          <div className="item-title">
              {details.title}
          </div>
          <img src={details.url} alt={details.title} />
          <div className={`button ${details.selected === true ? 'item-button active' : 'item-button'}`} 
               onClick={this.props.toggleSelectItem} 
               data-id={details.id}
               data-index={index}
          >{buttonText}</div>
          <hr />
      </li>
     )
  }
}

export default Drill;



