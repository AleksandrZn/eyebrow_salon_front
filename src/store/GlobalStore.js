import { makeAutoObservable } from "mobx";

export default class GlobalStore {
  constructor() {
    this._isOpenBurger = false;
    this._stab = {
      global: false,
      main: false,
      appintment: false,
      courses: false,
    };
    makeAutoObservable(this);
  }

  setIsOpenBurger(bool) {
    this._isOpenBurger = bool;
  }
  get isOpenBurger() {
    return this._isOpenBurger;
  }

  setStab(object) {
    this._stab = object;
  }

  get stab() {
    return this._stab;
  }
}
