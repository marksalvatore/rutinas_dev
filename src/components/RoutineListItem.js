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
    const title = <a className="titleAnchor" href="#" data-id={details.id} data-title={details.title}onClick={this.goToRoutine}>{details.title}</a>
    const deleteButton = <button data-id={details.id} onClick={(e) => this.props.deleteRoutine(e)}>Delete</button>
    const viewButton = <button data-id={details.id} data-title={details.title} onClick={(e) => this.goToRoutine(e)}>View</button>

    return (
      <div className="drill-frame-item">
          {title} {viewButton} {deleteButton}
      </div>
     );
  }
}

RoutineListItem.contextTypes = {
  router: React.PropTypes.object
}

export default RoutineListItem;
