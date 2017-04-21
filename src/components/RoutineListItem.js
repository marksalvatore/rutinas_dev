import React from 'react';

class RoutineListItem extends React.Component {
  // called by: Routines
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
    const title = <a href="#" data-id={details.id} data-title={details.title}onClick={this.goToRoutine}>{details.title}</a>
    const deleteButton = <button data-id={details.id} onClick={(e) => this.props.deleteRoutine(e)}>Delete</button>
    /*const editButton = <button data-id={details.id} onClick={(e) => this.props.editRoutine(e)}>Edit</button>*/

    return (
      <div className="drill-frame-item">
          <div className="drill-frame-item-title">
               {title} {deleteButton}
          </div>
      </div>
     );
  }
}

// Allows using the parent router for methods that need to link to another page
// See saveAction() and cancelAction()
RoutineListItem.contextTypes = {
  router: React.PropTypes.object
}

export default RoutineListItem;
