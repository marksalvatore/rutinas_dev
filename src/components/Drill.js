import React from 'react';

class Drill extends React.Component {
  render() {
    const { details, index } = this.props;
    return (
      <div className="item">
          <div className="item-title">
              {details.title}
          </div>
          <img src={details.url} alt={details.title} />
          <div className={`button ${details.selected === true ? 'item-button active' : 'item-button'}`} 
               onClick={this.props.toggleSelectItem} 
               data-id={details.id}
               data-index={index}
          >Select this drill</div>
          <hr />
      </div>
     )
  }
}

export default Drill;



