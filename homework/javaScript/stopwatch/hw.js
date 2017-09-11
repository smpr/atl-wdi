// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

const $testScript = function(){
  console.log('Test')};
/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    // Your Code Here
    
  },
  reset: function(){
    //reset all the values of to 0
    mins: 0;
    secs: 0;
    millisecs: 0;
    laps: 
    console.log('reset function pass')
    // Your Code Here
  },

  start: function(){
    
    //iff stopwatch is not running
      //stopwatch starts    
        //numbers of minutes seconds and milliseconds elapse and show in browser
    // if stopwatch is running
      //nothing will happen
      //else{blank};
    
    // Your Code Here
  },
  stop: function(){
    //if stopwatch is running
      //stopwatch stops running
      //numbers no longer updates
    //if stopwatch is not running
      //time on stopwatch will be reset
      //display will reset to 00.00.00
      //list of laps will be erased
    // Your Code Here
  },
  lap: function(){
    //if stopwatch is running
      //lap record shows at the bottom of page
    //if stopwatch is not running
      //nothing happens
      //else{blank};
    // Your Code Here
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    //$()
    // Your Code Here
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    // Your Code Here
  },
  handleClickStart: function() {
    // Your Code Here
  },
  handleClickStopReset: function(){
    // Your Code Here
  },
  handleClickLap: function(){
    // Your Code Here
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
};
