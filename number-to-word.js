// Number to Word Conversion (1-999999)
function numberToWord(input) {
  const firstStep = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const secondStep = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  // 1-19  Number
  if (input < 20) {
    return firstStep[input];
  }

  // 20-99 Number
  if (input < 100) {
    if (input % 10 !== 0) {
      return secondStep[Math.floor(input / 10)] + " " + firstStep[input % 10];
    }
    else {
      return secondStep[Math.floor(input / 10)] + " ";
    }
  }

  // 100-999 Number
  if (input < 1000) {
    if (input % 100 !== 0) {
      return firstStep[Math.floor(input / 100)] + " hundred and " + numberToWord(input % 100);
    }
    else {
      return firstStep[Math.floor(input / 100)] + " hundred";
    }
  }

  // 1000-9999 Number
  if (input < 10000) {
    if (input % 1000 !== 0) {
      return firstStep[Math.floor(input / 1000)] + " thousand and " + numberToWord(input % 1000);
    }
    else {
      return firstStep[Math.floor(input / 1000)] + " thousand";
    }
  }

  // 10000-99999 Number
  if (input < 100000) {
    if (input % 10000 !== 0) {
      return numberToWord(Math.floor(input / 1000)) + " thousand" + " " + numberToWord(input % 1000);
    }
    else {
      return numberToWord(Math.floor(input / 1000)) + " thousand";
    }
  }

  // 100000-999999 Number
  if (input < 1000000) {
    if (input % 100000 !== 0) {
      return numberToWord(Math.floor(input / 10000)) + " million" + " " + numberToWord(input % 10000);
    }
    else {
      return numberToWord(Math.floor(input / 10000)) + " million";
    }
  }

  else {
    return "Please input the correct numbers between 1 to 999999 digits."
  }
}
console.log(numberToWord(999999));