import React from 'react';

class DrillListItem extends React.Component {
  // called by: RoutineDetails

  render() {
    const { details } = this.props;
    if( details ) {
      const title = <a href="#"  data-id={details.id} onClick={this.props.goToDrill}>{details.title}</a>
      const deleteButton = <button data-id={details.id} onClick={(e) => this.props.deleteDrill(e)}>Delete</button>
      const statsButton = <button data-id={details.id} onClick={(e) => this.props.getHistory(e)}>History</button>

      return (
        <div className="drill-frame-item">
            <div className="drill-frame-item-title">
                 {title} {statsButton} {deleteButton}
            </div>
        </div>
       );

    } else {
      return (
        <div className="drill-frame-item">
            <div className="drill-frame-item-title">
                 There are no drills in this routine.
            </div>
        </div>
       );
    }
   }
}

export default DrillListItem;
