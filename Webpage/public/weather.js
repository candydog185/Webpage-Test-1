window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const apiUrl = `https://api.weather.gov/points/${latitude},${longitude}/forecast`;
            
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                const weatherForecast = data.properties.periods[0];
                displayWeather(weatherForecast);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
});

function displayWeather(weatherForecast) {
    const weatherContainer = document.getElementById('weather');
    const temperature = weatherForecast.temperature;
    const description = weatherForecast.shortForecast;
    weatherContainer.textContent = `Current weather: ${temperature}°F, ${description}`;
}
