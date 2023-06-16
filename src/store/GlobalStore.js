import { makeAutoObservable } from "mobx";
import { DESCTOP, MOBILE } from "../utils/consts";
import { detectDevice } from "../utils/detectDevice";

export default class GlobalStore {
  constructor() {
    this._deviceType = detectDevice() ? MOBILE : DESCTOP;
    this._isOpenBurger = false;
    makeAutoObservable(this);
  }

  setDeviceType(deviceType) {
    this._deviceType = deviceType;
  }

  get deviceType() {
    return this._deviceType;
  }
  setIsOpenBurger(bool) {
    this._isOpenBurger = bool;
  }
  get isOpenBurger() {
    return this._isOpenBurger;
  }
}
