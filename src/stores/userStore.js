import { observable, action,decorate } from 'mobx';

class UserStore {
  users = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  setUsers = users => {
    this.users = users;
  }
}

decorate(UserStore, {
    authUser: observable,
    setUsers: action
})

export default UserStore;
