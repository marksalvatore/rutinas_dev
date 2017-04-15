import React from 'react';

class Drill extends React.Component {
  render() {
    const { details, index } = this.props;
    // QUESTION - why imagePath doesn't link to image?
    // const imagePath = `../../public/images/${details.category}-${details.imageId}.svg`;

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
      </div>
     )
  }
}

export default Drill;



