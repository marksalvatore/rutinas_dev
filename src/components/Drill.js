import React from 'react';

class Drill extends React.Component {
  render() {
    const { details, index } = this.props;
    return (
      <div className="drill-frame-item">
          <div className="drill-frame-item-title">
              {details.title}
          </div>
          <img src={details.url} alt={details.title} />
          <div className={`button ${details.selected === true ? 'active' : ''}`} 
               onClick={this.props.toggleSelectItem} 
               data-id={details.id}
               data-index={index}
          >Select this drill</div>
          <hr className="drill" />
      </div>
     )
  }
}

export default Drill;



