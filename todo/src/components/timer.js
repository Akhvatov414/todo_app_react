import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ idTask, time, completed, updateTime }) => {
  const [timeInSeconds, setTimeInSeconds] = useState(time);
  const [timeFromCreated, setTimeFromCreated] = useState(0);

  let countdown = useRef(null);
  let updateInterval = useRef(null);
  useEffect(() => {
    updateInterval.current = setInterval(updateCreatedTime, 1000);
    return () => {
      clearInterval(countdown.current);
    };
  }, []);

  useEffect(() => {
    if (completed) stopTimer();
    updateTime(idTask, timeInSeconds);
    if (timeInSeconds <= 0) clearInterval(countdown.current);
  }, [timeInSeconds, timeFromCreated]);

  // useEffect(() => {
  //   return () => {};
  // }, [timeFromCreated]);

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
    console.log('click Start');
    if (completed) {
      alert('Задача находится в статусе "Выполнена"');
      return;
    }
    if (!countdown.current && timeInSeconds > 0) {
      countdown.current = setInterval(() => {
        setTimeInSeconds((prev) => prev - 1);
      }, 1000);
    }
  };
  const stopTimer = () => {
    console.log('click Stop');
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
