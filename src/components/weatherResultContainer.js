import { AbstractComponent } from "./AbstractComponent.js";

function createWeatherResultComponentTemplate(title, city) {
  return `        <div id="weather-result">
  <p> Температура в ${city}: ${title} </p>
    </div>`;
}

export class WeatherResultComponent extends AbstractComponent {
  #id = null;
  #city = null;
  #title = null;
  constructor({ id, city, title }) {
    super();
    this.#id = id;
    this.#city = city;
    this.#title = title;

  }
  getTemplate() {
    return createWeatherResultComponentTemplate(this.#title, this.#city);
  }
}
