
import { weathers } from "./mock/weather.js";

export class WeatherService {
    #boardWeathers = weathers;

    getWeathers() {
        return this.#boardWeathers;
    }
}