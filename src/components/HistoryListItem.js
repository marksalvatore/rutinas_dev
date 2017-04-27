import React from 'react';

class HistoryListItem extends React.Component {
  // child of: History

  render() {

  	const score = this.props.score;

    return (
      <div>{this.props.date} -  {score.toFixed(0)}%</div>
     );
   }
}

export default HistoryListItem;
