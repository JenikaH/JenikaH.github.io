var currentDate = new Date();
var currentDateString;

// get day of week
var weekDayNumber = currentDate.getDay();

// show/hide pancake
if(weekDayNumber == 5){
document.getElementById("displayad").removeAttribute("class","hidden");
}