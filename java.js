//1.In your project, display the current date and time using JavaScript: Tuesday 16:00
let h5 = document.querySelector("h6");

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wenesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

h5.innerHTML = `${hours} : ${minutes} ${now}`;
//2.Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

// app
function showTemperature(response) {
  document.querySelector("#displayCity").innerHTML = response.data.name;
  console.log(response.data.name);
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "cbca1833b4a365f49430e2ac0f4d7459";
  let city = document.querySelector("#search-form").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
