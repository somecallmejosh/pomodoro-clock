(function(){
  // set variables
  var $breakTimer = $('.set-timer--break'),
      $sessionTimer = $('.set-timer--session'),
      $timerLabel = $('.set-timer--label'),
      $timeIncrease = $('.set-timer--trigger__up'),
      $timeDecrease = $('.set-timer--trigger__down'),
      $pomodoroClock = $('.pomodoro--countdown'),
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
    setLabel($pomodoroClock, sessionTime);
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
    if(breakTime <= 1) {
      breakTime;
    } else {
      breakTime -= 1;
    }
    setLabel($breakTimerLabel, breakTime);
  }

  function increaseSessionTime() {
    sessionTime += 1;
    setLabel($sessionTimerLabel, sessionTime);
    setLabel($pomodoroClock, sessionTime);
  }

  var decreaseSessionTime = function() {
    if(sessionTime <= 1) {
      sessionTime;
    } else {
      sessionTime -= 1;
    }
    setLabel($sessionTimerLabel, sessionTime);
    setLabel($pomodoroClock, sessionTime);
  }

  // Click events
  $breakIncrease.click(increaseBreakTime);
  $breakDecrease.click(decreaseBreakTime);
  $sessionIncrease.click(increaseSessionTime);
  $sessionDecrease.click(decreaseSessionTime);
  $('.reset').click(init);


})();

