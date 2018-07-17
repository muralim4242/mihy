import { configure } from 'mobx';

import SessionStore from './sessionStore';
import UserStore from './userStore';
import App from './app';
//blood store
import BloodStore from './donate/blood/bloodStore';
import DonorProfile from './donate/blood/donorProfile';

configure({ enforceActions: true });

class RootStore {
  constructor() {
    this.sessionStore = new SessionStore(this);
    this.userStore = new UserStore(this);
    this.app=new App();
    //blood store
    this.bloodStore = new BloodStore();
    this.donorProfile = new DonorProfile();
  }
}

const rootStore = new RootStore();

export default rootStore;
