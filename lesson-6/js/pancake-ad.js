var currentDate = new Date();
var currentDateString;

// get day of week
var weekDayNumber = currentDate.getDay();

var daysOfWeek =[
'Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday'
];

var weekDay = daysOfWeek[weekDayNumber];

// show/hide pancake
if(weekDayNumber == 6){
document.getElementById("pancakead").removeAttribute("class","hidden");
}