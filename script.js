let tasks = JSON.parse(localStorage.getItem('tasks'));

if (!tasks) {

  tasks = [
    {
      time: 8,
      tasks: [""]
    },
    {
      time: 9,
      tasks: [""]
    },
    {
      time: 10,
      tasks: [""]
    },
    {
      time: 11,
      tasks: [""]
    },
    {
      time: 12,
      tasks: [""]
    },
    {
      time: 13,
      tasks: [""]
    },
    {
      time: 14,
      tasks: [""]
    },
    {
      time: 15,
      tasks: [""]
    },
    {
      time: 16,
      tasks: [""]
    },
    {
      time: 17,
      tasks: [""]
    },
  ];
}

var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("hour");
var timeBlock = document.getElementById("time-slot");
var taskList = document.getElementById("task-text");
var dateTime = function () {
  var todaysDate = moment();
  currentDay.textContent = todaysDate.format("LLLL");
}

$(document).ready(function () {
  dateTime();
  setInteravl(dateTime, 1000)
});




$( "#save-btn" ).click(function() {
console.log ("click!");
});


function myFunction() {
  var x = document.createElement("BUTTON");
  var t = document.createTextNode("Click Me");
  x.appendChild(t);
  document.body.appendChild(x);
  ;
  
}