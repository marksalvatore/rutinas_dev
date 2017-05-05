import React from 'react';

class DrillListItem extends React.Component {
  // child of: RoutineDetails

  render() {
    const { details } = this.props;

    if( details ) {
      const title = <a data-id={details.id} onClick={(e) => this.props.goToScore(e)}>{details.title}</a>

      const deleteButton = <button className="btn-danger" data-id={details.id} onClick={(e) => this.props.deleteDrill(e)}>Delete</button>
      const historyButton = <button className="btn-secondary" data-id={details.id} onClick={(e) => this.props.getHistory(e)}>History</button>
      const scoreButton = <button className="btn-primary"data-id={details.id} onClick={(e) => this.props.goToScore(e)}>Score</button>

      return (
        <li key={this.key}>
          <span className="wrapper">
            <div className="container dropShadow">
              <div className="title">{title}</div>
              <div className="controls">{scoreButton} {historyButton} {deleteButton}</div>
            </div>
          </span>
        </li>
       );

    } else {
      return (
         <p>There are no drills in this routine.</p>
       );
    }
   }
}

export default DrillListItem;
