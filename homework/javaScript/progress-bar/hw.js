// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
   document.getElementById('numeric-display').textContent=timerValue;
  },
  drawProgressBars: function(timerValue){
    document.getElementsByClassName('progress-bar')[0].style.width= (100 - timerValue) + '%';

 
  },
  drawLitFuses: function(timerValue){
    
// had issues figuring out why the fuse started on the left side then moved right. After looking at the solution it became clear that it was actually on the second row then moved up. thus why it is at 98%
        const percentUnburnt = timerValue/100;
        document.getElementsByClassName('unburnt')[0].style.width = percentUnburnt * 98 + '%';
        document.getElementsByClassName('burnt')[0].style.width = (1 - percentUnburnt) * 98 + '%';
        
    
  },
  drawCrawlers: function(timerValue){
    // wasnt sure exactly how to move the bug accross the screen but it felt like it had the same idea as above minus the width. any input would be greatly appreciated
    document.getElementsByClassName('crawler')[0].style.position= (100 - timerValue) + '%';  }
};
