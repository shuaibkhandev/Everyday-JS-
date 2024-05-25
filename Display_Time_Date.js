// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const updateTime = () => {
  const today = new Date();
  let day = today.getDay();
  let daylists = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let hours = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  let prepand = hours >= 12 ? "PM" : "AM";
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours === 0 ? 12 : hours;
  day = daylists[day];

  let addZero = (num) => (num < 10 ? `0${num}` : num);

  console.log(
    `Today is: ${day} Current Time is ${addZero(hours)}:${addZero(
      min
    )}:${addZero(sec)}:${prepand}`
  );
};

setInterval(updateTime, 1000);
