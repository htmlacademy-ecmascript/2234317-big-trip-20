import TripPointView from '../view/point-view.js';
import EditFormView from '../view/edit-form-view.js';
import {
  render,
  replace
} from '../framework/render.js';

export default class TripPointPresenter {
  #pointContainer = null;

  #point = null;
  #offers = [];
  #destinations = [];

  #pointComponent = null;
  #pointEditComponent = null;

  constructor({pointContainer}) {
    this.#pointContainer = pointContainer;
  }

  init(point, offers, destinations) {
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;

    this.#pointComponent = new TripPointView({
      point: this.#point,
      offers: this.#offers,
      destinations: this.#destinations,
      onEditClick: this.#handleEditClick,
    });
    this.#pointEditComponent = new EditFormView({
      point: this.#point,
      offers: this.#offers,
      destinations: this.#destinations,
      onFormSubmit: this.#handleFormSubmit,
      onRollUpClick: this.#handleRollUpClick,
    });

    render(this.#pointComponent, this.#pointContainer);
  }

  #replacePointToForm() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = () => {
    this.#replaceFormToPoint();
  };

  #handleRollUpClick = () => {
    this.#replaceFormToPoint();
  };
}