import React from 'react';

class HistoryListItem extends React.Component {
  // called by: History

  render() {

  	const score = this.props.score;

    return (

         <li>{this.props.date} -  {score.toFixed(0)}%</li>

     );
   }
}

export default HistoryListItem;
