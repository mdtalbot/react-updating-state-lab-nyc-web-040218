// Code DigitalClicker Component Here
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class DigitalClicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = (event) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}

 DigitalClicker.propTypes = propTypes;
 DigitalClicker.defaultProps = defaultProps;
