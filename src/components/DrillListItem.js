import React from 'react';


class DrillListItem extends React.Component {
  constructor() {
    super();

 
  }


  render() {
    const { details, title } = this.props;
    // QUESTION - why imagePath doesn't link to image?
    // const imagePath = `../../public/images/${details.category}-${details.imageId}.svg`;
      return (
        <div className="drill-frame-item">
            <div className="drill-frame-item-title">
                {/*<a href="#" data-id={details.id} onClick={this.props.goToDrill}>{details.title}</a>*/}
                <a href="/drill">drill 1</a>
     
            </div>
        </div>
       );
  }
}

// Allows using the parent router for methods that link to another page
// See saveAction() and cancelAction()
DrillListItem.contextTypes = {
  router: React.PropTypes.object
}

export default DrillListItem;
