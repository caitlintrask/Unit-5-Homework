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

// set variables for hour column
var firsthour = $("#8AM");
var secondhour = $("#9AM");
var thirdhour = $("#10AM");
var fourthhour = $("#11AM");
var fifthhour = $("#12PM");
var sixthhour = $("#1PM");
var seventhhour = $("#2PM");
var eigthhour = $("#3PM");
var ninthhour = $("#4PM");
var tenthhour = $("#5PM");

//if var currentDay is less than or equal to the time specificed in the div, 
//set attribute to ___

var m = moment();
var currentHour = (m.format('h'));
localStorage.setItem("Current Hour: ", currentHour);
var currentTime = localStorage.getItem("Current Hour: ").valueOf;
console.log(m.format('hA'));
console.log(currentTime);


firsthour.append(m.format("8")+"AM");
secondhour.append(m.format("9")+"AM");
thirdhour.append(m.format("10")+"AM");
fourthhour.append(m.format("11")+"AM");
fifthhour.append(m.format("12")+"PM");
sixthhour.append(m.format("1")+"PM");
seventhhour.append(m.format("2")+"PM");
eigthhour.append(m.format("3")+"PM");
ninthhour.append(m.format("4")+"PM");
tenthhour.append(m.format("5")+"PM");

var block3 = $("#8").value = 8;
var block4 = $("#9").value = 9;
var block5 = $("#10").value = 10;
var block11 = $("#11").value = 11;
var block12 = $("#12").value = 12;
var block1 = $("#1").value = 13;
var block2 = $("#2").value = 14;
var block3 = $("#3").value = 15;
var block4 = $("#4").value = 16;
var block5 = $("#5").value = 17;

if (block3 < currentHour){
    $("#8").addClass("past");
} else if (block3 == currentTime){
    $("#8").addClass("present");
} else {
    $("#8").addClass("future");
};

if (block4 < currentHour){
    $("#9").addClass("past");
} else if (block4 == currentHour){
    $("#9").addClass("present");
} else {
    $("#9").addClass("future");
};

if (block5 < currentHour){
    $("#10").addClass("past");
} else if (block5 == currentHour){
    $("#10").addClass("present");
} else{
    $("#10").addClass("future");
};

if (block11 < currentHour){
    $("#11").addClass("past");
} else if (block11 == currentHour){
    $("#11").addClass("present");
} else {
    $("#11").addClass("future");
};

if (block12 < currentHour){
    $("#12").addClass("past");
} else if (block12 === currentHour){
    $("#12").addClass("present");
} else {
    $("#12").addClass("future");
};

//1pm
if (block1 < currentHour){
    $("#1").addClass("past");
} else if (block1 === currentHour){
    $("#1").addClass("present");
} else {
    $("#1").addClass("future");
};

//2pm
if (block2 < currentHour){
    $("#2").addClass("past");
} else if (block1 === currentHour){
    $("#2").addClass("present");
} else {
    $("#2").addClass("future");
};

//3pm
if (block3 < currentHour){
    $("#3").addClass("past");
} else if (block3 === currentHour){
    $("#3").addClass("present");
} else {
    $("#3").addClass("future");
};

//4pm
if (block4 < currentHour){
    $("#4").addClass("past");
} else if (block4 === currentHour){
    $("#4").addClass("present");
} else {
    $("#4").addClass("future");
};

//5pm
if (block5 < currentTime){
    $("#5").addClass("past");
} else if (block5 === currentTime){
    $("#5").addClass("present");
} else {
    $("#5").addClass("future");
};

// Save input to local storage
//8 am
$("#saveBtn1").on("click", function(e){
    e.preventDefault();
    console.log($("#myText1").val());
    localStorage.setItem('Task 1:', $("#myText1").val());
});

local1 = localStorage.getItem('Task 1:');
$("#myText1").val(local1);

//9am
$("#saveBtn2").on("click", function(e){
    e.preventDefault();
    console.log($("#myText2").val());
    localStorage.setItem('Task 2:', $("#myText2").val());
});

local2 = localStorage.getItem('Task 2:');
console.log(local2);
$("#myText2").val(local2);

//10am
$("#saveBtn3").on("click", function(e){
    e.preventDefault();
    console.log($("#myText3").val());
    localStorage.setItem('Task 3:', $("#myText3").val());
});

local3 = localStorage.getItem('Task 3:');
$("#myText3").val(local3);

//11am
$("#saveBtn4").on("click", function(e){
    e.preventDefault();
    console.log($("#myText4").val());
    localStorage.setItem('Task 4:', $("#myText4").val());
});

local4 = window.localStorage.getItem('Task 4:');
console.log(local4);
$("#myText4").val(local4);

//12pm
$("#saveBtn5").on("click", function(e){
    e.preventDefault();
    console.log($("#myText5").val());
    localStorage.setItem('Task 5:', $("#myText5").val());
});

local5 = window.localStorage.getItem('Task 5:');
console.log(local5);
$("#myText5").val(local5);

//1pm
$("#saveBtn6").on("click", function(e){
    e.preventDefault();
    console.log($("#myText6").val());
    localStorage.setItem('Task 6:', $("#myText6").val());
});

local6 = window.localStorage.getItem('Task 6:');
console.log(local6);
$("#myText6").val(local6);

//2pm
$("#saveBtn7").on("click", function(e){
    e.preventDefault();
    console.log($("#myText7").val());
    localStorage.setItem('Task 7:', $("#myText7").val());
});

local7 = window.localStorage.getItem('Task 7:');
console.log(local7);
$("#myText7").val(local7);

//3pm
$("#saveBtn8").on("click", function(e){
    e.preventDefault();
    console.log($("#myText8").val());
    localStorage.setItem('Task 8:', $("#myText8").val());
});

local8 = window.localStorage.getItem('Task 8:');
console.log(local8);
$("#myText8").val(local8);

//4pm
$("#saveBtn9").on("click", function(e){
    e.preventDefault();
    console.log($("#myText9").val());
    localStorage.setItem('Task 9:', $("#myText9").val());
});

local9 = window.localStorage.getItem('Task 9:');
console.log(local9);
$("#myText9").val(local9);

//5pm
$("#saveBtn10").on("click", function(e){
    e.preventDefault();
    console.log($("#myText10").val());
    localStorage.setItem('Task 10:', $("#myText10").val());
});

local10 = window.localStorage.getItem('Task 10:');
console.log(local10);
$("#myText10").val(local10);
