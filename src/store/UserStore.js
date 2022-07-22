import { makeAutoObservable } from "mobx";
import { MASTER_ROLE } from "../utils/consts";

export default class UserStore {
  constructor() {
    this._isAuth = true;
    this._user = {name:"Гриша Кислый",female:'Август',email:"assa@gmail.com",id:1,role:MASTER_ROLE};
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
