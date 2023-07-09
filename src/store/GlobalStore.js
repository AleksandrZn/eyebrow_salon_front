import axios from "axios";
import { makeAutoObservable } from "mobx";

const setData = () => {
  return async function () {
    const response = await axios.get("http://localhost:5000/api/data");
    return response.data.response;
  };
};

export default class GlobalStore {
  constructor() {
    this._data = setData();
    this._isOpenBurger = false;
    this._stab = {
      global: false,
      main: false,
      appintment: false,
      courses: false,
    };
    makeAutoObservable(this);
  }

  setData(data) {
    this._data = data;
  }
  get data() {
    return this._data;
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
