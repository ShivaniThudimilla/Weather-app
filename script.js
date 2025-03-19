const apiKey = "36d7b26715132a74ad51b6aa729ba080"; // Get from https://openweathermap.org/api
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name!");
    }
});

async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found. Please try again.");
            return;
        }

        document.getElementById("cityName").textContent = `Weather in ${data.name}`;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("weatherCondition").textContent = `Condition: ${data.weather[0].description}`;
        document.querySelector(".weather-info").style.display = "block";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Something went wrong. Try again later.");
    }
}
