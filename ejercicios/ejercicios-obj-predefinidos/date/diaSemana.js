function getDay(day) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var date = new Date(day);
  return days[date.getDay()];
}