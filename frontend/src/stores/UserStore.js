import {action, extendObservable} from "mobx";
import {post} from "../helpers/RestAPI";

export class UserStore {
  constructor() {
    extendObservable(this, {
      addUserIsFetching: false,
      addUserError: undefined,

      users: [],

      actions: {
        addUser: action(url => {
          this.addUserIsFetching = true;
          this.addUserError = undefined;

          post(`/api/user`, undefined, {url})
            .then(resp => {
              this.users.push(resp.data);

              this.addUserIsFetching = false;
              this.addUserError = undefined;
            })
            .catch(err => {
              this.addUserError = String(err);
              this.addUserIsFetching = false;
            });
        })
      }
    });
  }
}
