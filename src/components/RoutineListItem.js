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
    return (
      <div className="drill-frame-item">
          <div className="drill-frame-item-title">
              <a href="#" data-id={details.id} data-title={details.title}onClick={this.goToRoutine}>{details.title}</a> [ edit ] [ delete ]
          </div>
      </div>
     );
  }
}

// Allows using the parent router for methods that link to another page
// See saveAction() and cancelAction()
RoutineListItem.contextTypes = {
  router: React.PropTypes.object
}

export default RoutineListItem;
