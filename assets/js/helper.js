// small function to check leap year
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
  let weekDays = [];
  let thirtyone = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
  let thirty = ['April', 'June', 'September', 'November'];
  let twentyeight = ['February'];
  if (thirtyone.includes(month)) {
    let number;
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
        weekDays.push(newNumber);
      } else {
        weekDays.push(number);
      }
    }
  } else if (thirty.includes(month)) {
    let number;
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
        weekDays.push(newNumber);
      } else {
        weekDays.push(number);
      }
    }
  } else if (twentyeight.includes(month)) {
    let number;
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
        weekDays.push(newNumber);
      } else {
        weekDays.push(number);
      }
    }
  } else if (twentyeight.includes(month) && checkLeapYear(year)) {
    let number;
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
        weekDays.push(newNumber);
      } else {
        weekDays.push(number);
      }
    }
  }

  return weekDays;
}
