import { configure } from 'mobx';

import SessionStore from './sessionStore';
import UserStore from './userStore';
import BloodStore from './bloodStore';
import App from './app';

configure({ enforceActions: true });

class RootStore {
  constructor() {
    this.sessionStore = new SessionStore(this);
    this.userStore = new UserStore(this);
    this.bloodStore = new BloodStore(this);
    this.app=new App(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
