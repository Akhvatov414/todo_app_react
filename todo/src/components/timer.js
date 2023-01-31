import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeInSeconds: this.props.time,
      status: this.props.completed,
      timeFromCreated: 0,
    };

    this.countdown = null;
    this.updateInterval = null;
  }

  componentDidMount() {
    this.updateInterval = setInterval(this.updateCreatedTime, 1000);
  }

  componentDidUpdate() {
    const { timeInSeconds, status } = this.state;
    if (status) {
      this.stopTimer();
    }
    if (timeInSeconds <= 0) {
      clearInterval(this.countdown);
    }
  }

  componentWillUnmount() {
    clearInterval(this.countdown);
  }

  getMinutes = (time) => {
    let minutes = Math.floor(time / 60);
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    return minutes;
  };

  getSeconds = (time) => {
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return seconds;
  };

  updateCreatedTime = () => {
    this.setState((state) => ({
      timeFromCreated: state.timeFromCreated + 1,
      status: this.props.completed,
    }));
  };

  startTimer = () => {
    const { status } = this.state;
    if (status) {
      alert('Задача находится в статусе "Выполнена"');
      return;
    }
    if (!this.countdown && this.state.timeInSeconds > 0) {
      this.countdown = setInterval(() => {
        if (this.state.status) this.stopTimer();
        this.setState((state) => ({
          timeInSeconds: state.timeInSeconds - 1,
        }));
      }, 1000);
    }
  };

  stopTimer = () => {
    clearInterval(this.countdown);
    this.countdown = null;
  };

  render() {
    const { timeInSeconds } = this.state;
    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.startTimer}></button>
        <button className="icon icon-pause" onClick={this.stopTimer}></button>
        <span>{`${this.getMinutes(timeInSeconds)}:${this.getSeconds(timeInSeconds)}`}</span>
      </span>
    );
  }
}

export default Timer;
