(function(){
  // set variables
  var $breakTimer = $('.set-timer--break'),
      $sessionTimer = $('.set-timer--session'),
      $timerLabel = $('.set-timer--label'),
      $timeIncrease = $('.set-timer--trigger__up'),
      $timeDecrease = $('.set-timer--trigger__down'),
      $pomodoroTimer = $('.pomodoro--timer'),
      $pomodorCountdown = $('.pomodoro--countdown'),
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

  var workTimer = setWorkTime(),
      breakTimer = setBreakTime();

  // Set All labels
  function setLabel(value, time) {
    value.html(time);
  }

  function editBreakTime(direction){
    direction === "up" ? breakTime += 1 : (breakTime <= 1 ? breakTime : breakTime -= 1);
    setLabel($breakTimerLabel, breakTime);
    setBreakTime();
  }
  function editSessionTime(direction){
    direction === "up" ? sessionTime += 1 : (sessionTime <= 1 ? sessionTime : sessionTime -= 1);
    // This label will probably get moved in association with the current timer
    setLabel($sessionTimerLabel, sessionTime);
    setLabel($pomodorCountdown, sessionTime + ":00");
    setWorkTime();
  }

  // CountDownTimers
  // Capture user entries for time variations
  function setWorkTime() {
    workTimer = sessionTime * 60000;
    return workTimer;
  }
  function setBreakTime() {
    breakTimer = breakTime * 60000;
    return breakTimer;
  }

  // Refactor to allow for different timers
  function sessionCountDown(){
    if(workTimer >= 0) {
      conversion = workTimer / 1000;
      seconds = Math.round(conversion % 60);
      secondsConversion = seconds > 9 ? "" + seconds : "0" + seconds;
      conversion /= 60;
      minutes = Math.floor(conversion % 60);
      minutesConversion = minutes < 10 ? "0" + minutes : minutes;
      workTimer = workTimer - 1000;
      currentTime = minutesConversion + ":" + secondsConversion;
      
      // Show completion percentage
      var currentPercent = (workTimer / (sessionTime * 60000)) * 100;
      // console.log("Completion Percentage: " + currentPercent.toFixed(1));

      // Append to view
      setLabel($pomodorCountdown, currentTime);
    }
  }
  
  function countDown(){
    setInterval(sessionCountDown, 1000);
  }

  function init(){
    breakTime = breakTimeDefault;
    sessionTime = sessionTimeDefault;
    setLabel($breakTimerLabel, breakTime);
    setLabel($sessionTimerLabel, sessionTime);
    setLabel($pomodorCountdown, sessionTime + ":00");
  }
  init();

  // Click events
  // pass arguments to even handlers
  // http://stackoverflow.com/questions/979337/how-can-i-pass-arguments-to-event-handlers-in-jquery
  $breakDecrease.click(function(){
    editBreakTime("down");
  });
  $breakIncrease.click(function(){
    editBreakTime("up");
  })
  $sessionIncrease.click(function(){
    editSessionTime("up");
  });
  $sessionDecrease.click(function(){
    editSessionTime("down");
  });

  $pomodoroTimer.click(countDown);
  $('.reset').click(function(){
    location.reload();
  });
})();
