import React from 'react';

class DrillListItem extends React.Component {
  // called by: RoutineDetails

  render() {
    const { details } = this.props;

      return (
        <div className="drill-frame-item">
            <div className="drill-frame-item-title">
                <a href="#" data-id={details.id} onClick={this.props.goToDrill}>{details.title}</a> [ stats ] [ edit ] [ delete ]
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
