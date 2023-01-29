// to-do

// * Display the current day at the top of the calender when a user opens the planner.

// * Present timeblocks for standard business hours when the user scrolls down.

// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page

// ----------------------------------------------------------------------------
// pseudo

// 1 create HMTL
// 2 create dynamic dates and calendar for a week
// 3 add todo list dragable ----- sortable conect list - to create a dynamic experience. Left side add todo then drag it to calendar
//   --top days of the week and hours from top to bottom
//   --left side top date picker above an add task section
// 4 set up current date on the top
// 5 shade grey time what already passed.
// 6 get info from local storage

// ----------------------------------------------------------------------------
// ##########################################################################
// collectig ideas / testing
// ##########################################################################

// const notToday = new Date(2019, 2, 28, 14, 55);
// const today = new Date();
// const year = today.getFullYear();
// const month = today.getMonth();
// const day = today.getDate();
// const hour = today.getHours();
// const minutes = today.getMinutes();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(today);
// // Creating a new Date (with the delta)
// const finalDate = new Date(year, month, day + 17);

// console.log(finalDate); // 31 March 2019

// today.toLocaleString();

// $(function () {
//   console.log('it loads when the whole page got loaded');
// });

const currentDay = $('#currentDay');
setInterval(displayDate, 1000);
function displayDate() {
  currentDay.text(new Date().toLocaleString());
}

// ######################---no touch above ---#############################

const formInput = $('#formInput');
const activityInput = $('#activityInput');
const dateInput = $('#dateInput');
let dayInput;
let monthInput;
let yearInput;

let submitForm = function (event) {
  event.preventDefault();
  let dateValue = dateInput.val();
  let msec = Date.parse(dateValue);
  const newDate = new Date(msec);
  console.log(newDate);

  let dayInput;
  let monthInput;
  let yearInput;
  // let activityValue = activityInput.val();

  activityInput.val('');
  dateInput.val('');
};

formInput.on('submit', submitForm);
