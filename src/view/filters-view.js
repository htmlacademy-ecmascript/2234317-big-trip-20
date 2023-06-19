import AbstractView from '../framework/view/abstract-view.js';

function createFilterTemplate(filter, isChecked) {
  const {type, hasPoints} = filter;

  return (`
    <div class="trip-filters__filter">
      <input id="filter-${type}"
        class="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value="${type}"
        ${isChecked ? 'checked' : ''}
        ${hasPoints ? '' : 'disabled'}
      >
      <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
    </div>
  `);
}

function createFiltersTemplate(filters, currentFilterType) {
  const filterTemplate = filters
    .map((filter) => createFilterTemplate(filter, filter.type === currentFilterType))
    .join('');

  return (`
    <form class="trip-filters" action="#" method="get">
      ${filterTemplate}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `);
}

export default class FiltersView extends AbstractView {
  #filters = null;
  #currentFilterType = null;
  #handleFilterTypeChange = null;

  constructor({filters, currentFilterType, onFilterTypeChange}) {
    super();
    this.#filters = filters;
    this.#currentFilterType = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  }

  get template() {
    return createFiltersTemplate(this.#filters, this.#currentFilterType);
  }

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleFilterTypeChange(evt.target.value);
  };
}
