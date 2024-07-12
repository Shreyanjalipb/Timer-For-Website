// Set the date we're counting down to
let countDownDate = new Date().getTime() + 10 * 60 * 1000;

// Update the count down every 1 second
let countdownfunction = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for minutes and seconds
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="minutes-number" and id="seconds-number"
  document.getElementById("minutes-number").innerHTML = minutes;
  document.getElementById("seconds-number").innerHTML = seconds;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("minutes-number").innerHTML = "0";
    document.getElementById("seconds-number").innerHTML = "0";
  }
}, 1000);

