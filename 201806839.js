const dayName = new Array(7);
dayName[0] = "Sunday";
dayName[1] = "Monday";
dayName[2] = "Tuesday";
dayName[3] = "Wednesday";
dayName[4] = "Thursday";
dayName[5] = "Friday";
dayName[6] = "Saturday";

const monthName = new Array(12);
monthName[0] = "January";
monthName[1] = "February";
monthName[2] = "March";
monthName[3] = "April";
monthName[4] = "May";
monthName[5] = "June";
monthName[6] = "July";
monthName[7] = "August";
monthName[8] = "September";
monthName[9] = "October";
monthName[10] = "November";
monthName[11] = "December";

const frame = `
 ________________ 
|                |
|                |
|                |
 ________________
`;
let chars = frame.split("");
let range = 41;

module.exports = {
  getCurrentDate: function () {
    const date = new Date();
    return (
      date.getDate() + "/" + date.getMonth() + "/" + (date.getYear() + 1900)
    );
  },
  getCurrentMood: function (input) {
    const mood = input.toLowerCase();
    switch (mood) {
      case "sad":
        return ":(";
      case "happy":
        return ":)";
      case "bored":
        return ":/";
      case "surprised":
        return ":o";
      case "angry":
        return ">:/";
      case "cute":
        return ":3";
      default:
        return "...";
    }
  },
  flipCoin: function () {
    const coin = Math.floor(this.getRandom(1, 0));
    return coin ? "heads" : "tails";
  },
  getRandom: function (max, min) {
    const delta = max - min;
    const n = delta + 1;
    return Math.floor(Math.random() * n + min);
  },
  frameName: function (name) {
    if (name.length > 14) return "Name cannot be framed";
    name = name.split("");
    name.forEach((e) => {
      chars[range++] = e;
    });
    range = 41;
    return chars.join("");
  },
};
