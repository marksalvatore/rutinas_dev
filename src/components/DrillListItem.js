import React from 'react';

class DrillListItem extends React.Component {
  // child of: RoutineDetails

  render() {
    const { details } = this.props;

    if( details ) {
      const title = <a className="titleAnchor" href="#"  data-id={details.id} onClick={(e) => this.props.goToDrill(e)}>{details.title}</a>
      const deleteButton = <button data-id={details.id} onClick={(e) => this.props.deleteDrill(e)}>Delete</button>
      const statsButton = <button data-id={details.id} onClick={(e) => this.props.getHistory(e)}>History</button>
      const drillButton = <button data-id={details.id} onClick={(e) => this.props.goToDrill(e)}>Drill</button>

      return (
        <div className="drill-frame-item">
            {title} {drillButton} {statsButton} {deleteButton}
        </div>
       );

    } else {
      return (
        <div className="drill-frame-item">
            There are no drills in this routine.
        </div>
       );
    }
   }
}

export default DrillListItem;
