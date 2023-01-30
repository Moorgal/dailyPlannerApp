// -------------------------------------------------------------------------------
// function what works with a date value, and gives back a new Date() value
// -------------------------------------------------------------------------------
function dateToNewDate(value) {
  let oldDate = value.val();
  let msec = Date.parse(oldDate); // swap the date to millisec then from millisec swap to newDate()
  const newDate = new Date(msec);
  return newDate;
}

// -------------------------------------------------------------------------------
// function input is a date and the output is the date of the previous sunday
// -------------------------------------------------------------------------------

function calculateLastSunday(date) {
  let theDate = new Date(date);
  let getDate = theDate.getDate();
  let getDay = theDate.getDay();
  let lastSunday = theDate.setDate(getDate - getDay);
  let sundayID = new Date(lastSunday);
  return { year: sundayID.getFullYear(), month: months[sundayID.getMonth()], day: sundayID.getDate() };
}

// -------------------------------------------------------------------------------
// small function to check leap year
// -------------------------------------------------------------------------------
function checkLeapYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return true;
  } else {
    return false;
  }
}

// -------------------------------------------------------------------------------
// function what sets the days for the calendar
// -------------------------------------------------------------------------------

function monthChecker({ year: year, month: month, day: day }) {
  let weekValues = [];
  let monthValues = [];
  let yearValues = [];
  let thirtyone = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
  let thirty = ['April', 'June', 'September', 'November'];
  let twentyeight = ['February'];
  if (thirtyone.includes(month)) {
    for (let i = 0; i < 7; i++) {
      let number = day + i;
      if (number > 31) {
        let newNumber;
        switch (number) {
          case 32:
            newNumber = 1;
            break;
          case 33:
            newNumber = 2;
            break;
          case 34:
            newNumber = 3;
            break;
          case 35:
            newNumber = 4;
            break;
          case 36:
            newNumber = 5;
            break;
          case 37:
            newNumber = 6;
            break;
          case 38:
            newNumber = 7;
        }
        weekValues.push(newNumber);
        monthValues.push(months[months.indexOf(month) + 1]);
      } else {
        weekValues.push(number);
        monthValues.push(month);
      }
    }
  } else if (thirty.includes(month)) {
    for (let i = 0; i < 7; i++) {
      let number = day + i;
      if (number > 30) {
        let newNumber;
        switch (number) {
          case 31:
            newNumber = 1;
            break;
          case 32:
            newNumber = 2;
            break;
          case 33:
            newNumber = 3;
            break;
          case 34:
            newNumber = 4;
            break;
          case 35:
            newNumber = 5;
            break;
          case 36:
            newNumber = 6;
            break;
          case 37:
            newNumber = 7;
        }
        weekValues.push(newNumber);
        monthValues.push(months[months.indexOf(month) + 1]);
      } else {
        weekValues.push(number);
        monthValues.push(month);
      }
    }
  } else if (twentyeight.includes(month)) {
    for (let i = 0; i < 7; i++) {
      let number = day + i;
      if (number > 28) {
        let newNumber;
        switch (number) {
          case 29:
            newNumber = 1;
            break;
          case 30:
            newNumber = 2;
            break;
          case 31:
            newNumber = 3;
            break;
          case 32:
            newNumber = 4;
            break;
          case 33:
            newNumber = 5;
            break;
          case 34:
            newNumber = 6;
            break;
          case 35:
            newNumber = 7;
        }
        weekValues.push(newNumber);
        monthValues.push(months[months.indexOf(month) + 1]);
      } else {
        weekValues.push(number);
        monthValues.push(month);
      }
    }
  } else if (twentyeight.includes(month) && checkLeapYear(year)) {
    for (let i = 0; i < 7; i++) {
      let number = day + i;
      if (number > 28) {
        let newNumber;
        switch (number) {
          case 29:
            newNumber = 1;
            break;
          case 30:
            newNumber = 2;
            break;
          case 31:
            newNumber = 3;
            break;
          case 32:
            newNumber = 4;
            break;
          case 33:
            newNumber = 5;
            break;
          case 34:
            newNumber = 6;
            break;
          case 35:
            newNumber = 7;
        }
        weekValues.push(newNumber);
        monthValues.push(months[months.indexOf(month) + 1]);
      } else {
        weekValues.push(number);
        monthValues.push(month);
      }
    }
  }
  for (let i = 0; i < 7; i++) {
    if (monthValues[i] === 'December' && monthValues.indexOf[i] !== monthValues.indexOf[i + 1]) {
      yearValues.push(year + 1);
    } else {
      yearValues.push(year);
    }
  }
  return { year: yearValues, month: monthValues, day: weekValues };
}
