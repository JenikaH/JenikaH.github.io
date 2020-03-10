var currentDate = new Date();

// get day of week
var weekDayNumber = currentDate.getDay();

// show/hide pancake
if(weekDayNumber == 6){
document.getElementById("displayad").removeAttribute("class","hidden");
}