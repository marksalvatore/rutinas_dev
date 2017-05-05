import React from 'react';

class RoutineListItem extends React.Component {
  // child of: Routines
  constructor() {
    super();

    this.goToRoutine = this.goToRoutine.bind(this);
  }

  goToRoutine(e) {
    e.preventDefault();
    const id = e.target.dataset.id
    this.context.router.transitionTo(`/routine/${id}`);
  }


  render() {
    const { details } = this.props;
    const title = <a href="#" data-id={details.id} data-title={details.title} onClick={this.goToRoutine}>{details.title}</a>
    const deleteButton = <button className="btn-danger" data-id={details.id} onClick={(e) => this.props.deleteRoutine(e)}>Delete</button>
    //const viewButton = <button data-id={details.id} data-title={details.title} onClick={(e) => this.goToRoutine(e)}>View</button>

    return (
      <li key={this.key}><span className="wrapper dropShadow">{title} {deleteButton}</span></li>
     );
  }
}

RoutineListItem.contextTypes = {
  router: React.PropTypes.object
}

export default RoutineListItem;
