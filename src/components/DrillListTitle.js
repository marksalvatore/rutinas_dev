import React from 'react';

const DrillListTitle = (props) => {
  // child of: NewRoutineRender
  return (
    <li key={props.id}>+ {props.title}</li> 
   );
}

export default DrillListTitle;
