import React from 'react';

class DrillListItem extends React.Component {
  // child of: RoutineDetails

  render() {
    const { details } = this.props;

    if( details ) {
      const title = <span>{details.title}</span>
      const deleteButton = <button data-id={details.id} onClick={(e) => this.props.deleteDrill(e)}>Delete</button>
      const statsButton = <button data-id={details.id} onClick={(e) => this.props.getHistory(e)}>History</button>
      const drillButton = <button data-id={details.id} onClick={(e) => this.props.goToDrill(e)}>Drill</button>

      return (
        <div className="drill-frame-item">
            <div className="drill-frame-item-title">
                 {title} {drillButton} {statsButton} {deleteButton}
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
