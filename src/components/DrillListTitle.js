import React from 'react';

class DrillListTitle extends React.Component {
  // child of: NewRoutine
  render() {
      return (
        <li key={this.key}>+ {this.props.title}</li> 
       );
  }
}

export default DrillListTitle;
