import { SelectorComponent } from "./components/city-selector.js";
import { WeatherResultComponent } from "./components/weatherResultContainer.js";
import { render, RenderPosition } from "./render.js";
import { WeatherService } from "./WeatherService.js";

const weatherBody = document.querySelector('.weather-widget');
const weatherService = new WeatherService();

render(new SelectorComponent(), weatherBody, RenderPosition.BEFOREEND);

const weathers = weatherService.getWeathers();

const select = document.querySelector('select');
select.addEventListener('change', () => {
    removeWeatherElement();
    weathers.forEach(weather => {
        if (select.value == weather.city) {
            const weatherResultComponent = new WeatherResultComponent({ id: weather.id, title: weather.title, city: weather.cityRus });
            render(weatherResultComponent, weatherBody);
        }
    });
});

function removeWeatherElement() {
    const weatherResultElement = document.getElementById('weather-result');

    if (weatherResultElement) {
        weatherResultElement.remove();
    }
}