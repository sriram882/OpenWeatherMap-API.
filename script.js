async function getWeather() {
    let city = document.getElementById("city").value;

    let apiKey = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}";  // replace this
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let res = await fetch(url);
    let data = await res.json();

    if (!res.ok || !data.main) {
        alert(data.message || "Failed to fetch weather. Check city name or API key.");
        return;
    }

    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let condition = data.weather[0].main;

    new Chart(document.getElementById("chart"), {
        type: "bar",
        data: {
            labels: ["Temperature", "Humidity"],
            datasets: [{
                label: condition,
                data: [temp, humidity]
            }]
        }
    });
}