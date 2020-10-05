"use strict";

// a timer that will print out the current number every second.

/**
 * @param {number} startTime is the number of seconds to count down
 * @returns {undefined}
 * side effect is to log out current number every second counting down to 0
 */

function stopWatch(startTime) {


  let currentTime = startTime;
  const watchID = setInterval(logTime, 1000);
  
  /**
   * returns {undefined}
   */
  function logTime() {
    console.log(currentTime);
    if (currentTime === 0) {
      clearInterval(watchID);
    } else {
    currentTime = currentTime - 1;
  }
}

}
stopWatch(6)