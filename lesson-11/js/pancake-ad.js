var currentDate = new Date();

// get day of week
let weekDayNumber = currentDate.getDay();
let daysOfWeek =[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

// show/hide pancake
let weekday = daysofWeek[weekDayNumber];
if(daysofWeek[currentDate.getDay] === "Friday"){
document.getElementById("displayad").classList.remove("hidden");
}