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


// save inputs to local storage
// set variables
// on click, console.log input value
// var scheduleInput=$("#schedule-text");
var saveBtn=$("#save-div");

saveBtn.click(function(){
    event.preventDefault();

    var scheduleText=$("#schedule-text").val();
    console.log(scheduleText);

    localStorage.getItem(scheduleText);
})
