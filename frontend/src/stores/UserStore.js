import {action, extendObservable} from "mobx";
import {post} from '../helpers/RestAPI'

export class UserStore {
  constructor() {
    extendObservable(this, {
      addUserIsFetching: false,
      addUserError: undefined,

      users: [],
      actions: {
        addUser: action(name => {
          this.addUserIsFetching = true;
          this.addUserError = undefined

          post(`users/add`, undefined, {name}).then(resp => {
            this.addUserIsFetching = false
            this.addUserError = undefined
            this.users.push({resp})
          }).catch(err => {
            this.addUserIsFetching = false
            this.addUserError = String(err)
          })
        })
      }
    });
  }
}
