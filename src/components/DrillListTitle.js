import React from 'react';

class DrillListTitle extends React.Component {
  // child of: NewRoutine
  render() {
      return (
        <div>+ {this.props.title}</div> 
       );
  }
}

export default DrillListTitle;
