import React from 'react';


import NoItems from './NoItems';

class Routine extends React.Component {
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
    // QUESTION - why imagePath doesn't link to image?
    // const imagePath = `../../public/images/${details.category}-${details.imageId}.svg`;
      return (
        <div className="drill-frame-item">
            <div className="drill-frame-item-title">
                <a href="#" data-id={details.id} onClick={this.goToRoutine}>{details.title}</a>
            </div>
        </div>
       );
  }
}

// Allows using the parent router for methods that link to another page
// See saveAction() and cancelAction()
Routine.contextTypes = {
  router: React.PropTypes.object
}

export default Routine;
