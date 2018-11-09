function startCounter(minutes) {
  function nowPlus(minutes) {
    let now = new Date();
    return new Date(now.getTime() + 1000 * 60 * minutes);
  }

  let targetTime = nowPlus(minutes);

  window.open("/counter.html?year=" + targetTime.getFullYear() + "&month=" + (targetTime.getMonth() + 1) + "&day=" + targetTime.getDate() + "&hour=" + targetTime.getHours() + "&minute=" + targetTime.getMinutes() + "&second=" + targetTime.getSeconds(), "_self")
}