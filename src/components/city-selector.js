
import { AbstractComponent } from './AbstractComponent.js';


function createSelectorComponentTemplate() {
  return (
    `<select id="city-select" class="city-select">
        <option value="">Выберите город</option>
        <option value="London">Лондон</option>
        <option value="Paris">Париж</option>
        <option value="Berlin">Берлин</option>
      </select>`
  );
}


export class SelectorComponent extends AbstractComponent {
  getTemplate() {
    return createSelectorComponentTemplate();
  }
}