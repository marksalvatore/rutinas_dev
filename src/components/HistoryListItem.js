import React from 'react';

class HistoryListItem extends React.Component {
  // child of: History

  render() {
  	const score = this.props.score;

    return (
      <li><span className="wrapper">{this.props.date} - <span className="color">{score.toFixed(0)}%</span></span></li>
     );
   }
}

export default HistoryListItem;
