import { UserStore } from "./UserStore";

let _Store = undefined;

export class RootStore {
  constructor() {
    if (_Store) {
      return _Store;
    }

    this.user = new UserStore();
    _Store = this;
  }
}
