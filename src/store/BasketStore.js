import { makeAutoObservable } from "mobx";

export default class BasketStore {
  constructor() {
    this._isVisible = false;
    this._products = [];
    makeAutoObservable(this);
  }

  setProducts(mass) {
    this._products = mass;
  }
  get products() {
    return this._products;
  }

  setIsVisible(bool) {
    this._isVisible = bool;
  }
  get isVisible() {
    return this._isVisible;
  }
}
