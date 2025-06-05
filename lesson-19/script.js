const apiKey = "e774a2a2532b5fc1e403aaca069252a9";

async function getWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Bratislava&units=metric&lang=en&appid=${apiKey}`
  );

  const data = await response.json();

  document.getElementById("temp").textContent = Math.round(data.main.temp);
  document.getElementById("feels_like").textContent = Math.round(
    data.main.feels_like
  );
  document.getElementById("weather").textContent = data.weather[0].description;
  document.getElementById("humidity").textContent = data.main.humidity;
  document.getElementById("pressure").textContent = data.main.pressure;
  document.getElementById("wind").textContent = data.wind.speed;

  const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
  const localTime = new Date(utc + data.timezone * 1000);

  document.getElementById("time").textContent = localTime.toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  document.getElementById("date").textContent = localTime.toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const img = document.createElement("img");
  img.src = iconUrl;
  img.alt = "icon";
  img.width = 60;

  const iconContainer = document.getElementById("weather-icon");

  while (iconContainer.firstChild) {
    iconContainer.removeChild(iconContainer.firstChild);
  }

  iconContainer.appendChild(img);
}

getWeather();
