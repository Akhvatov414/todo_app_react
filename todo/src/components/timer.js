import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ idTask, time, completed, updateTime }) => {
  const [timeInSeconds, setTimeInSeconds] = useState(time);
  const [timeFromCreated, setTimeFromCreated] = useState(0);

  let countdown = useRef(null);
  let updateInterval = useRef(null);
  useEffect(() => {
    updateInterval.current = setInterval(updateCreatedTime, 1000);
  }, []);

  useEffect(() => {
    if (completed) stopTimer();
    if (timeInSeconds <= 0) clearInterval(countdown.current);
  }, [timeInSeconds]);

  useEffect(() => {
    return () => {};
  }, [timeFromCreated]);

  const getMinutes = (timeValue) => {
    let minutes = Math.floor(timeValue / 60);
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    return minutes;
  };

  const getSeconds = (timeValue) => {
    let seconds = Math.floor(timeValue % 60);
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return seconds;
  };

  const updateCreatedTime = () => {
    setTimeFromCreated((prev) => prev + 1);
  };

  const startTimer = () => {
    if (completed) {
      alert('Задача находится в статусе "Выполнена"');
      return;
    }
    if (!countdown.current && timeInSeconds > 0) {
      countdown.current = setInterval(() => {
        if (completed) stopTimer();
        setTimeInSeconds((prev) => prev - 1);
        updateTime(idTask, timeInSeconds);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(countdown.current);
    countdown.current = null;
    updateTime(idTask, timeInSeconds);
  };

  return (
    <span className="description">
      <button className="icon icon-play" onClick={startTimer}></button>
      <button className="icon icon-pause" onClick={stopTimer}></button>
      <span>{`${getMinutes(timeInSeconds)}:${getSeconds(timeInSeconds)}`}</span>
    </span>
  );
};

export default Timer;

// class Timer extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       timeInSeconds: this.props.time,
//       status: this.props.completed,
//       timeFromCreated: 0,
//     };

//     this.countdown = null;
//     this.updateInterval = null;
//   }

//   componentDidMount() {
//     this.updateInterval = setInterval(this.updateCreatedTime, 1000);
//   }

//   componentDidUpdate() {
//     const { timeInSeconds, status } = this.state;
//     if (status) {
//       this.stopTimer();
//     }
//     if (timeInSeconds <= 0) {
//       clearInterval(this.countdown);
//     }
//   }

//   componentWillUnmount() {
//     clearInterval(this.countdown);
//   }

//   getMinutes = (time) => {
//     let minutes = Math.floor(time / 60);
//     if (minutes < 10) {
//       minutes = '0' + minutes;
//     }
//     return minutes;
//   };

//   getSeconds = (time) => {
//     let seconds = Math.floor(time % 60);
//     if (seconds < 10) {
//       seconds = '0' + seconds;
//     }
//     return seconds;
//   };

//   updateCreatedTime = () => {
//     this.setState((state) => ({
//       timeFromCreated: state.timeFromCreated + 1,
//       status: this.props.completed,
//     }));
//   };

//   startTimer = () => {
//     const { status } = this.state;
//     if (status) {
//       alert('Задача находится в статусе "Выполнена"');
//       return;
//     }
//     if (!this.countdown && this.state.timeInSeconds > 0) {
//       this.countdown = setInterval(() => {
//         const { idTask, updateTime } = this.props;
//         if (this.state.status) this.stopTimer();
//         this.setState((state) => ({
//           timeInSeconds: state.timeInSeconds - 1,
//         }));
//         updateTime(idTask, this.state.timeInSeconds);
//       }, 1000);
//     }
//   };

//   stopTimer = () => {
//     clearInterval(this.countdown);
//     this.countdown = null;
//   };

//   render() {
//     const { timeInSeconds } = this.state;
//     return (
// <span className="description">
//   <button className="icon icon-play" onClick={this.startTimer}></button>
//   <button className="icon icon-pause" onClick={this.stopTimer}></button>
//   <span>{`${this.getMinutes(timeInSeconds)}:${this.getSeconds(timeInSeconds)}`}</span>
// </span>
//     );
//   }
// }

// export default Timer;
