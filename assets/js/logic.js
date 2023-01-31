const formInput = $('#formInput');
const activityInput = $('#activityInput');
const dateInput = $('#dateInput');
const hourInput = $('#hourInput');
const container = $('#container');

const months = [00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 00];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const hours = [
  '00.00',
  '01.00',
  '02.00',
  '03.00',
  '04.00',
  '05.00',
  '06.00',
  '07.00',
  '08.00',
  '09.00',
  '10.00',
  '11.00',
  '12.00',
  '13.00',
  '14.00',
  '15.00',
  '16.00',
  '17.00',
  '18.00',
  '19.00',
  '20.00',
  '21.00',
  '22.00',
  '23.00',
];
// -------------------------------------------------------------------------------
// function what displays the current time and date
// -------------------------------------------------------------------------------

const currentDay = $('#currentDay');
setInterval(displayDate, 1000);
function displayDate() {
  currentDay.text(new Date().toLocaleString());
}

// -------------------------------------------------------------------------------
// submit the activity form
// -------------------------------------------------------------------------------
let submitForm = function (event) {
  event.preventDefault();
  let dateValue = dateToNewDate(dateInput);

  let form = {
    activity: activityInput.val(),
    hour: hourInput.val(),
    dayName: days[dateValue.getDay()],
    dayNumber: dateValue.getDate(),
    month: months[dateValue.getMonth()],
    year: dateValue.getFullYear(),
  };
  let localStorageId = `${form.year}${form.month}${form.dayNumber}${form.hour}`;
  let localStorageMessage = form.activity;
  localStorage.setItem(localStorageId, localStorageMessage);

  activityInput.val('');
  hourInput.val('');
  dateInput.val('');
};
formInput.on('submit', submitForm);

// -------------------------------------------------------------------------------
// create the calendar dinamically
// -------------------------------------------------------------------------------
function createCalendar() {
  let yearMonthDayForId = monthChecker(calculateLastSunday(new Date())); // THIS NEEDS TO BE CHANGED TO HAVE DIFFERENT DATE. details in helpers.js

  // create time on left
  let dayNumberRow = $('<h1 class="empty">');
  let dayNameRow = $('<p class="empty">');
  let ul = $('<ul>');
  let div = $('<div>');
  dayNameRow.text('     ');
  dayNumberRow.text('     ');
  container.append(div);
  div.append(dayNumberRow);
  div.append(dayNameRow);
  div.append(ul);
  for (let i = 0; i < hours.length; i++) {
    let hour = $('<li style="padding:1rem;">');
    hour.text(hours[i]);
    hour.addClass('my-3');
    ul.append(hour);
  }
  // create calendar
  for (let i = 0; i < 7; i++) {
    let rowId = `${yearMonthDayForId.year[i]}${yearMonthDayForId.month[i]}${yearMonthDayForId.day[i]}`;

    let dayNumberRow = $('<h1 style="text-align:center;">');
    let dayNameRow = $('<p style="text-align:center;">');
    let boxUl = $('<ul>');
    boxUl.addClass('sortable2');
    let div = $('<div>');
    dayNameRow.text(days[i]);
    dayNumberRow.text(yearMonthDayForId.day[i]);
    container.append(div);
    div.append(dayNumberRow);
    div.append(dayNameRow);
    div.append(boxUl);
    for (let j = 0; j < 24; j++) {
      let insideBox = $('<li>');
      // insideBox.text(hours[j]);
      insideBox.addClass('ui-state-default');
      insideBox.addClass('ui-state-disabled');
      boxUl.append(insideBox);
      let boxId = `${hours[j]}`;
      let uniqueBoxId = rowId.concat(boxId);
      $(insideBox).attr('id', uniqueBoxId);
    }
  }
}

// -------------------------------------------------------------------------------
// function what displays the current time and date
// -------------------------------------------------------------------------------
let allId = [];
setInterval(renderLocalStorage, 1000);
function renderLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    const displayData = document.getElementById(localStorage.key(i));
    let fillInContent = localStorage.getItem(localStorage.key(i));
    displayData.classList.remove('ui-state-disabled');
    displayData.innerHTML = `${fillInContent}<button class="delete-btn" onclick="removeItem(event)")">x</button>`;
  }
  // checks the current date and creates a string out of it
  currentDateString = `${new Date().getFullYear()}${new Date().getMonth()}${new Date().getDate()}${addZero(new Date().getHours())}`;
  let past = [];
  let future = [];
  // checks the string in all the elements where id ends with ".00"
  $("[id$='.00']").each(function () {
    let targetId = $(this).attr('id');
    // compair the two string and based on the targetId is higher or lower they go to past[] or future[]
    if (targetId > currentDateString) {
      future.push(targetId);
    } else {
      past.push(targetId);
    }
  });
  // adds past/future class what colors the elements
  for (let i = 0; i < past.length; i++) {
    let element = document.getElementById(past[i]);
    element.classList.add('past');
  }
  for (let i = 0; i < future.length; i++) {
    let element = document.getElementById(future[i]);
    element.classList.add('future');
  }
  document.getElementById(`${currentDateString}.00`).classList.remove('future');
  document.getElementById(`${currentDateString}.00`).classList.add('present');
}
// remove the action from localStorage
function removeItem(event) {
  let btn = $(event.target);
  let parentId = btn.parent().attr('id');
  btn.parent().addClass('ui-state-disabled');

  localStorage.removeItem(parentId);
  btn.parent().text(' ').fadeOut().fadeIn();
}

$(function () {
  createCalendar();
});

$(function () {
  $('.sortable2').sortable({
    cancel: '.ui-state-disabled',
  });

  $('.sortable2 li').disableSelection();
});

$(function () {
  $('.resizable').resizable();
});
