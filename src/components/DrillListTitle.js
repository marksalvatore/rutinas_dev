import React from 'react';

class DrillListTitle extends React.Component {
  // child of: NewRoutine
  render() {
      return (
        <li>{this.props.title}</li> 
       );
  }
}

export default DrillListTitle;
