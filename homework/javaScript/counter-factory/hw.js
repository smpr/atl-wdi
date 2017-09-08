// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function(){
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

// UI //
const Presenter = {
  insertCounterComponent: function(newCountId){
    console.log(`insert counter component #${newCountId}`);
    let newtable = document.createElement('div');
    newtable.innerHTML = `<h3>Count: <span>0</span></h3>
                          <button class='increment'> + 1 </button>`;
    console.log('newtbale,',newtable);
    newtable.dataset.counterid = newCountId;
    newtable.getElementsByClassName('increment')[0].onClick= AppController.onClickIncrement;
    document.getElementById('counter-list').appendChild(newtable);
    console.log('worked')
    // had to check the solution for this, but i actually wasnt aware that the background needed to be changed with each new counter. this code sets the class to counter which is defined in css
    newtable.className = "counter";
      // i was not able to figure out how to get the counter to increment its number. i thought it would be simply like adding a click event that just did an addition to the count: 0 sting but i wasnt able to figure out how. 
    
  },
  refreshCounterComponent: function(countId){
    console.log(`refresh counter component #${countId}`);
    let val = CounterCollection.getCounterValue(countId);
    document.querySelector(`[data-count-id="${countId}"] span`).innerHTML = val;
  },
  removeCounterComponent: function(countId){             // REACH
    console.log(`remove counter component #${countId}`);
    // Your Code Here
  }
};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function(event){
    // adds more counters. ?
    CounterCollection.createCounter()
    Presenter.insertCounterComponent(CounterCollection.lastCountId);

},
  onClickIncrement: function(event){
    let countId = Number(event.target.parentNode.dataset.countId);
    console.log(`click increment #${countId}`);
    CounterCollection.incrementCounter(countId);
    Presenter.refreshCounterComponent(countId);
  },
  onClickDelete: function(event){                           // REACH
    // Your Code Here
    //should be a remove child function 
  }
};

window.onload = function(){
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};
