import { makeAutoObservable } from "mobx";

export default class AppointmentStore {
  constructor() {
    this._master = [
      { start: 8, end: 9, idUser: 1, service: ["брови", "жопа"] },
      { start: 9, end: 10, idUser: 2, service: ["брови", "жопа"] },
      { start: 10, end: 11, idUser: 3, service: ["брови", "жопа"] },
      { start: 11, end: 12, idUser: 4, service: ["брови"] },
    ];
    makeAutoObservable(this);
  }

  setMaster(master) {
    this._master = master;
  }

  get master() {
    return this._master;
  }
}
