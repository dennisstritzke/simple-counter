(function () {
  var timeInterval;
  var deadline = new Date(2018, 9, 15, 10, 45, 0);

  var clock = document.getElementById("counter");

  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var now = new Date();
    var diff = new Date(deadline.getTime() - now.getTime());

    if (diff.getTime() <= 0) {
      clearInterval(timeInterval);
      setDuration(0, 0, 0);
    } else {
      setDuration(diff.getHours(), diff.getMinutes(), diff.getSeconds())
    }
  }

  function setDuration(hours, minutes, seconds) {
    var formattedHours = ('0' + hours).slice(-2);
    var formattedMinutes = ('0' + minutes).slice(-2);
    var formattedSeconds = ('0' + seconds).slice(-2);
    hoursSpan.innerHTML = formattedHours;
    minutesSpan.innerHTML = formattedMinutes;
    secondsSpan.innerHTML = formattedSeconds;
    document.title = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
  }

  timeInterval = setInterval(updateClock, 250);
})();