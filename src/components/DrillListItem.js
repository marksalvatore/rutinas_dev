import React from 'react';

class DrillListItem extends React.Component {
  // child of: RoutineDetails

  render() {
    const { details } = this.props;

    if( details ) {
      const title = <a href="#"  data-id={details.id} onClick={(e) => this.props.goToDrill(e)}>{details.title}</a>
      const deleteButton = <button data-id={details.id} onClick={(e) => this.props.deleteDrill(e)}>Delete</button>
      const historyButton = <button data-id={details.id} onClick={(e) => this.props.getHistory(e)}>History</button>
      //const drillButton = <button data-id={details.id} onClick={(e) => this.props.goToDrill(e)}>Drill</button>

      return (
        <li>{title} {historyButton} {deleteButton}</li>
       );

    } else {
      return (
         <p>There are no drills in this routine.</p>
       );
    }
   }
}

export default DrillListItem;
