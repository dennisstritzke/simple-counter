(function () {
  var timeInterval;
  let deadline = new Date(getParameterByName("year"),
      getParameterByName("month") - 1,
      getParameterByName("day"),
      getParameterByName("hour"),
      getParameterByName("minute"),
      getParameterByName("second"));

  let clock = document.getElementById("counter");

  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    let now = new Date();
    let diff = new Date(deadline.getTime() - now.getTime());

    if (diff.getTime() <= 0) {
      clearInterval(timeInterval);
      setDuration(0, 0, 0);
    } else {
      let hours = Math.floor(diff.getTime() / 1000 / 3600);
      setDuration(hours, diff.getMinutes(), diff.getSeconds())
    }
  }

  function setDuration(hours, minutes, seconds) {
    var formattedHours = ('0' + hours).slice(-2);
    if (hours / 100 >= 1) {
      formattedHours = ('0' + hours).slice(-3);
    }
    let formattedMinutes = ('0' + minutes).slice(-2);
    let formattedSeconds = ('0' + seconds).slice(-2);
    hoursSpan.innerHTML = formattedHours;
    minutesSpan.innerHTML = formattedMinutes;
    secondsSpan.innerHTML = formattedSeconds;
    document.title = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
  }

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    let results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  timeInterval = setInterval(updateClock, 250);
})();