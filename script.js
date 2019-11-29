// set date in jumbotron
var currentDay=$("#current-day");
var dateObj = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var day = dateObj.getDate();
var year = dateObj.getFullYear();

newDate = month[dateObj.getMonth()] + " " + day + "," + " " + year;
$("#current-day").append(newDate);
console.log(newDate);

// create function for clicke event to live
$(document).ready(function(){

// on click - save input to console
  
  $("#save-div").click(function() {
  var scheduleInput=$("#schedule-text").val();
  event.preventDefault();
  console.log(scheduleInput);
  
  // on click - save input to local storage
  window.localStorage.setItem("input",scheduleInput);
  console.log(localStorage.input);
  // when page is refreshed, load object saved from local storage to input 
  })
})

