import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './feedback.css';

class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  good = e => {
    this.setState({ good: this.state.good + 1 });
    let feedback = document.getElementsByClassName('feedback');
    this.setState({ visible: true });
  };

  neutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
    this.setState({ visible: true });
  };

  bad = () => {
    this.setState({ bad: this.state.bad + 1 });
    this.setState({ visible: true });
  };

  countTotalFeedback = () => {
    let totalCount = this.state.good + this.state.neutral + this.state.bad;
    return totalCount;
  };

  countPositiveFeedbackPercentage = () => {
    const allOpinion = this.state.good + this.state.bad;
    return allOpinion
      ? `${((100 * this.state.good) / allOpinion).toFixed(2)}%`
      : `0.00%`;
  };

  render() {
    return (
      <div className="FeedbackWidget">
        <h1 className="FeedbackWidget-h1">Please leave feedback</h1>
        <div>
          <button onClick={this.good}>Good</button>
          <button onClick={this.neutral}>Neutral</button>
          <button onClick={this.bad}>Bad</button>
        </div>
        <h2>Ststistics</h2>
        <div className="FeedbackWidget-Ststistics">
          <span className={this.state.visible ? '' : 'visible'}>
            Good ={this.state.good}{' '}
          </span>
          <span className={this.state.visible ? '' : 'visible'}>
            Neutral={this.state.neutral}{' '}
          </span>
          <span className={this.state.visible ? '' : 'visible'}>
            Bad={this.state.bad}{' '}
          </span>
          <span className={this.state.visible ? '' : 'visible'}>
            Total={this.countTotalFeedback()}{' '}
          </span>
          <span className={this.state.visible ? '' : 'visible'}>
            Positive Feedback={this.countPositiveFeedbackPercentage()}
          </span>
          <span className={this.state.visible ? 'visible' : ''}>
            No feedback given
          </span>
        </div>
      </div>
    );
  }
}
export default FeedbackWidget;

FeedbackWidget.propTypes = {
  good: PropTypes.number,
};
