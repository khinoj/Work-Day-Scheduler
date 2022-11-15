// <reference path=path/to/jqtypes/for/autosuggestions />


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// var now = dayjs();
// var currentDate = now.format('dddd, MMMM D YYYY');;
// currentTime = now.format('H:mm:ss');
// $('#currentDay').text(currentDate);


// setInterval(() => console.log(new Date().toLocaleTimeString(),1000));

var todayTask = [];


$(function () {
  let date = dayjs().format('dddd-MMM-YYYY HH:mm:ss');
  $('#currentDay').text(date);

  // var timeBlockElms = $('.time-block')
  console.log($('.time-block'));
  function handleTimeBlockChange() {
    console.log('handlingtimeblockchange', date);
    setTimeout(() => {
      if ($('.time-block').attr("#hour-" + 12) == date) {
        $('.time-block').removeClass('future')
        $('.time-block').addClass('present')
      }

    }, 3000);
  }

  $(window).on("load", function () {
    console.log('document loaded', event);
    handleTimeBlockChange();
  })
});

var todayTask = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('todayTask', JSON.stringify(todayTask));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('todayTask');

console.log('retrievedObject: ', JSON.parse(retrievedObject));
