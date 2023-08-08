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

  handlerButton = eve => {
    const id = eve.target.id;
    if (id === '1') {
      this.setState({ good: this.state.good + 1 });
      this.setState({ visible: true });
    } else if (id === '2') {
      this.setState({ neutral: this.state.neutral + 1 });
      this.setState({ visible: true });
    } else if (id === '3') {
      this.setState({ bad: this.state.bad + 1 });
      this.setState({ visible: true });
    }
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
          <button type="button" id="1" onClick={this.handlerButton}>
            Good
          </button>
          <button type="button" id="2" onClick={this.handlerButton}>
            Neutral
          </button>
          <button type="button" id="3" onClick={this.handlerButton}>
            Bad
          </button>
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
