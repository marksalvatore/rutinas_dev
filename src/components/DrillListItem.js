import React from 'react';

class DrillListItem extends React.Component {
  // called by: RoutineDetails

  render() {
    const { details } = this.props;
    const routineId = this.props.params.id;
    const title = <a href="#"  data-id={details.id} onClick={this.props.goToDrill}>{details.title}</a>
    const deleteButton = <button data-id={details.id} onClick={(e) => this.props.deleteDrill(e, routineId)}>Delete</button>
    const editButton = <button data-id={details.id} onClick={(e) => this.props.editDrill(e, routineId)}>Edit</button>

      return (
        <div className="drill-frame-item">
            <div className="drill-frame-item-title">
                 {title} [ stats ] {editButton} {deleteButton}
            </div>
        </div>
       );
  }
}

export default DrillListItem;
