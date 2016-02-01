(function(){
  // set variables
  var $breakTimer = $('.set-timer--break'),
      $sessionTimer = $('.set-timer--session'),
      $timerLabel = $('.set-timer--label'),
      $timeIncrease = $('.set-timer--trigger__up'),
      $timeDecrease = $('.set-timer--trigger__down'),
      $pomodoroTimer = $('.pomodoro--timer'),
      $pomodoroClockMinutes = $('.pomodoro--countdown .minutes'),
      $pomodoroClockSeconds = $('.pomodoro--countdown .seconds'),
      $breakIncrease = $breakTimer.find($timeIncrease),
      $breakDecrease = $breakTimer.find($timeDecrease),
      $breakTimerLabel = $breakTimer.find($timerLabel),
      $sessionIncrease = $sessionTimer.find($timeIncrease),
      $sessionDecrease = $sessionTimer.find($timeDecrease),
      $sessionTimerLabel = $sessionTimer.find($timerLabel);

  var breakTimeDefault = 5,
      sessionTimeDefault = 25,
      breakTime = breakTimeDefault,
      sessionTime = sessionTimeDefault;

  function init(){
    breakTime = breakTimeDefault;
    sessionTime = sessionTimeDefault;
    setLabel($breakTimerLabel, breakTime);
    setLabel($sessionTimerLabel, sessionTime);
    setLabel($pomodoroClockMinutes, sessionTime);
  }
  init();

  // Set All labels
  function setLabel(value, time) {
    value.html(time);
  }

  // Adjust Times
  // Refactor to combine increase and decrease into to functions, as opposed to four
  function increaseBreakTime() {
    breakTime += 1;
    setLabel($breakTimerLabel, breakTime);
  }
  var decreaseBreakTime = function() {
    (breakTime <= 1 ? breakTime : breakTime -= 1);
    setLabel($breakTimerLabel, breakTime);
  }
  function increaseSessionTime() {
    sessionTime += 1;
    setLabel($sessionTimerLabel, sessionTime);
    setLabel($pomodoroClockMinutes, sessionTime);
  }
  var decreaseSessionTime = function() {
    (sessionTime <= 1 ? sessionTime : sessionTime -= 1)
    setLabel($sessionTimerLabel, sessionTime);
    setLabel($pomodoroClockMinutes, sessionTime);
  }

  // CountDownTimer
  var seconds = 59;
  function secondsCountdown(){
    if(seconds >= 0){
      var currentTime = seconds > 9 ? "" + seconds : "0" + seconds;
      seconds--;
      setLabel($pomodoroClockSeconds, currentTime);
    }
  }


  function sessionCountdown(){
    // for(var i = sessionTime; i > 0; i--){
    //   setLabel($pomodoroClockMinutes, currentTime);
    // }
    setInterval(secondsCountdown, 1000)
  }

  // Click events
  $breakIncrease.click(increaseBreakTime);
  $breakDecrease.click(decreaseBreakTime);
  $sessionIncrease.click(increaseSessionTime);
  $sessionDecrease.click(decreaseSessionTime);
  $pomodoroTimer.click(sessionCountdown);
  $('.reset').click(init);
})();

