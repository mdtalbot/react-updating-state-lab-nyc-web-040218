// Code YouTubeDebugger Component Here
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  resolutionHandler = (event) => {
    this.setState({
      ...this.state,
        settings: {
          ...this.state.settings,
            video: {
              resolution: '720p'
            }
        }
    })
  }

  bitrateHandler = (event) => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  render() {
    return (
      <div>
      <button className='bitrate' onClick={this.bitrateHandler} />
      <button className="resolution" onClick={this.resolutionHandler} />
      </div>
    );
  }
}

 YouTubeDebugger.propTypes = propTypes;
 YouTubeDebugger.defaultProps = defaultProps;
